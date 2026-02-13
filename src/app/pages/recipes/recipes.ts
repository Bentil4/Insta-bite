import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';
import { UrlPersistence } from '../../services/url-persistence';
import {
  FilterDropdownComponent,
  FilterOption,
} from '../../components/filter-dropdown/filter-dropdown';
import { Recipe } from '../../types/recipe';
import RecipeData  from '../../../../public/data.json';

@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RecipeCardComponent, FilterDropdownComponent],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class RecipesComponent {
  private readonly urlPersistence = inject(UrlPersistence);

  protected readonly recipes = signal<Recipe[]>(RecipeData);
  protected readonly recipeSearchQuery = signal(this.urlPersistence.getQueryParameterAsString('q') ?? '');
  protected readonly maximumPrepTime = signal<number | null>(
    this.urlPersistence.getQueryParameterAsNumber('maxPrep'),
  );
  protected readonly maximumCookTime = signal<number | null>(
    this.urlPersistence.getQueryParameterAsNumber('maxCook'),
  );

  protected readonly prepTimeOptions: FilterOption[] = [
    { value: 0, label: '0 minutes' },
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
  ];

  protected readonly cookTimeOptions: FilterOption[] = [
    { value: 0, label: '0 minutes' },
    { value: 5, label: '5 minutes' },
    { value: 10, label: '10 minutes' },
    { value: 15, label: '15 minutes' },
    { value: 20, label: '20 minutes' },
  ];

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

      this.urlPersistence.updateQueryParams({
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
