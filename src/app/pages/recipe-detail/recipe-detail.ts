import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Recipe } from '../../types/recipe';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';
import RecipeData from '../../../../public/data.json';

@Component({
  selector: 'app-recipe-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage, RecipeCardComponent],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetailComponent {
  readonly slug = input.required<string>();

  protected readonly recipes: Recipe[] = RecipeData;

  protected readonly recipe = computed(() => {
    return this.recipes.find((recipe) => recipe.slug === this.slug()) ?? null;
  });

  protected readonly relatedRecipes = computed(() => {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return [];

    return this.recipes.filter((recipe) => recipe.id !== currentRecipe.id).slice(0, 3);
  });
}
