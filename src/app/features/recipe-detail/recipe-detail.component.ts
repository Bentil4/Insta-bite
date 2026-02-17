import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { RecipeCardComponent } from '../../shared/components/recipe-card/recipe-card';
import { RecipeService } from '../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, RecipeCardComponent],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetailComponent {
  private readonly recipeService = inject(RecipeService);

  readonly slug = input.required<string>();

  protected readonly recipe = computed(() => this.recipeService.getBySlug(this.slug()));

  protected readonly relatedRecipes = computed(() => {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return [];

    return this.recipeService.getRelated(currentRecipe.id);
  });
}
