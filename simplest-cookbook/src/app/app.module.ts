import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/welcome/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeComponent } from './components/recipes/recipe-single/recipe.component';
import { RecipeOverviewComponent } from './components/recipes/recipe-overview/recipe-overview.component';

const appRoutes: Routes = [
  // { path: 'recipe/:id',      component: RecipeComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Recipes' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelcomeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
