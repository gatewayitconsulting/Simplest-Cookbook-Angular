import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
    { 
      path: 'recipes', 
      component: RecipesComponent 
    },
    { 
      path: 'index', 
      component: WelcomeComponent 
    },
    { 
      path: '', 
      redirectTo: '/index',
      pathMatch: 'full'
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
export class AppRoutingModule { }
