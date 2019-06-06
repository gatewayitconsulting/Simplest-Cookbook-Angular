import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeOverviewComponent }    from './recipe-overview/recipe-overview.component';
import { RecipeComponent }  from './recipe-single/recipe.component';

const recipesRoutes: Routes = [
  { path: 'heroes', redirectTo: '/superheroes' },
  { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'superheroes',  component: RecipeOverviewComponent, data: { animation: 'heroes' } },
  { path: 'superhero/:id', component: RecipeComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
