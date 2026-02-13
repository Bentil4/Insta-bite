import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes').then((m) => m.RecipesComponent),
  },
  {
    path: 'recipes/:slug',
    loadComponent: () =>
      import('./pages/recipe-detail/recipe-detail').then((m) => m.RecipeDetailComponent),
  },
];
