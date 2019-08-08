import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng7BootstrapBreadcrumbModule } from 'ng7-bootstrap-breadcrumb';
// import { SectionsModule } from './sections/sections.module';
// import { ComponentsModule } from './components/components.module';
// import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/welcome/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/common/header/header.component';
import { RecipeComponent } from './components/recipe-detail/recipe.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CookingToolsComponent } from './components/cooking-tools/cooking-tools.component';
import { AboutComponent } from './components/about/about.component';
import { MissionStatementComponent } from './components/about/mission-statement/mission-statement.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { BreadcrumbComponent } from './components/common/breadcrumb/breadcrumb.component';
import { CookTimeComponent } from './components/cook-time/cook-time.component';
import { DescriptionComponent } from './components/description/description.component';
import { ToddyRatioHelperComponent } from './components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelcomeComponent,
    HeaderComponent,
    RecipeComponent,
    RecipesComponent,
    FooterComponent,
    CookingToolsComponent,
    AboutComponent,
    MissionStatementComponent,
    MessagesComponent,
    RecipeListComponent,
    BreadcrumbComponent,
    CookTimeComponent,
    DescriptionComponent,
    ToddyRatioHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng7BootstrapBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCopyright);
  }
}
