import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Recipe } from './services/recipe/recipe';
import { RecipeService } from './services/recipe/recipe.service';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { CookingToolsComponent } from './components/cooking-tools/cooking-tools.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/1',
    pathMatch: 'full',
    data: {
      title: 'Home',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        }
      ]
    },
  },
  {
    path: 'home/1',
    component: WelcomeComponent,
    data: {
      title: 'Home',
      breadcrumb: [
        {
          label: 'Home',
          url: ''
        }
      ]
    },
  },
  {
    path: 'home/1/recipe-list/2',
    component: RecipeListComponent,
    data: {
      title: 'Recipe List',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home/1'
        },
        {
          label: 'Recipes',
          url: ''
        }
      ]
    },
  },
  // {
  //   path: 'cooking-tools',
  //   component: CookingToolsComponent
  // },
  {
    path: 'home/1/recipe-list/2/recipe/3/recipe/:id',
    component: RecipeDetailComponent,
    data: {
      title: '{{dynamicText}}',
      breadcrumb: [
        {
          label: 'Home',
          url: '/home/1'
        },
        {
          label: 'Recipes',
          url: '/home/1/recipe-list/2'
        },
        {
          label: '{{dynamicText}}',
          url: ''
        }
      ]
    },
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  }
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
