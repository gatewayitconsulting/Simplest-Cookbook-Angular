import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { CookingToolsComponent } from './components/cooking-tools/cooking-tools.component';
import { RecipeComponent } from './components/recipe-detail/recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: WelcomeComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'cooking-tools', component: CookingToolsComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'recipes', component: RecipesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // <-- debugging purposes only
        useHash: true
      },
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
