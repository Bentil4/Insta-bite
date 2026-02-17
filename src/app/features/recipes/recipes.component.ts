import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RecipeCardComponent } from '../../shared/components/recipe-card/recipe-card';
import { FilterDropdownComponent } from '../../shared/components/filter-dropdown/filter-dropdown';
import { UrlPersistenceService } from '../../core/services/url-persistence.service';
import { RecipeService } from '../../core/services/recipe.service';
import { TIME_FILTER_OPTIONS } from '../../shared/constants/time-filter.constants';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent, FilterDropdownComponent],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class RecipesComponent {
  private readonly urlPersistenceService = inject(UrlPersistenceService);
  private readonly recipeService = inject(RecipeService);

  protected readonly recipes = signal(this.recipeService.getAll());
  protected readonly recipeSearchQuery = signal(this.urlPersistenceService.getQueryParameterAsString('q') ?? '');
  protected readonly maximumPrepTime = signal<number | null>(
    this.urlPersistenceService.getQueryParameterAsNumber('maxPrep'),
  );
  protected readonly maximumCookTime = signal<number | null>(
    this.urlPersistenceService.getQueryParameterAsNumber('maxCook'),
  );

  protected readonly prepTimeOptions = TIME_FILTER_OPTIONS;
  protected readonly cookTimeOptions = TIME_FILTER_OPTIONS;

  protected readonly filteredRecipes = computed(() => {
    const searchTerm = this.recipeSearchQuery().toLowerCase().trim();
    const maximumPrepMinutes = this.maximumPrepTime();
    const maximumCookMinutes = this.maximumCookTime();

    return this.recipes().filter((recipe) => {
      const matchesSearch =
        !searchTerm ||
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some((recipeIngredient) => recipeIngredient.toLowerCase().includes(searchTerm));
      const matchesPrepTime = maximumPrepMinutes === null || recipe.prepMinutes <= maximumPrepMinutes;
      const matchesCookTime = maximumCookMinutes === null || recipe.cookMinutes <= maximumCookMinutes;

      return matchesSearch && matchesPrepTime && matchesCookTime;
    });
  });

  protected readonly totalFilteredRecipes = computed(() => this.filteredRecipes().length);

  constructor() {
    effect(() => {
      const searchTerm = this.recipeSearchQuery();
      const maximumPrepMinutes = this.maximumPrepTime();
      const maximumCookMinutes = this.maximumCookTime();

      this.urlPersistenceService.updateQueryParams({
        q: searchTerm || null,
        maxPrep: maximumPrepMinutes,
        maxCook: maximumCookMinutes,
      });
    });
  }

  protected handleSearchChange(value: string): void {
    this.recipeSearchQuery.set(value);
  }

  protected handleMaxPrepTimeChange(value: number | null): void {
    this.maximumPrepTime.set(value);
  }

  protected handleMaxCookTimeChange(value: number | null): void {
    this.maximumCookTime.set(value);
  }
}
