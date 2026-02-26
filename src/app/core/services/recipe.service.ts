import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import RecipeData from '../../../../public/data.json';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly recipes: Recipe[] = RecipeData;

  public getAll(): Recipe[] {
    return this.recipes;
  }

  public getBySlug(slug: string): Recipe | null {
    return this.recipes.find((recipe) => recipe.slug === slug) ?? null;
  }

  public getRelated(currentRecipeId: number, limit: number = 3): Recipe[] {
    return this.recipes.filter((recipe) => recipe.id !== currentRecipeId).slice(0, limit);
  }
}
