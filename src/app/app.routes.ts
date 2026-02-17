import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./features/recipes/recipes.component').then((m) => m.RecipesComponent),
  },
  {
    path: 'recipes/:slug',
    loadComponent: () =>
      import('./features/recipe-detail/recipe-detail.component').then((m) => m.RecipeDetailComponent),
  },
];
