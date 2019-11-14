import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng7BootstrapBreadcrumbModule } from 'ng7-bootstrap-breadcrumb';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { ImageUploadModule } from './shared/image-upload/image-upload.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/welcome/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookingToolsComponent } from './components/cooking-tools/cooking-tools.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { CookTimeComponent } from './components/cook-time/cook-time.component';
import { DescriptionComponent } from './components/description/description.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StepsComponent } from './components/steps/steps.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ToddyRatioHelperComponent } from './components/cooking-tools/toddy-ratio-helper/toddy-ratio-helper.component';
import { WINDOW_PROVIDERS } from './services/window/window';
import { SearchBannerComponent } from './shared/search-banner/search-banner.component';
import { SearchComponent } from './shared/search/search.component';
import { FlavorProfileComponent } from './components/flavor-profile/flavor-profile.component';

@NgModule({
  declarations: [
    AppComponent,

    BannerComponent,
    WelcomeComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipesComponent,
    FooterComponent,
    CookingToolsComponent,
    MessagesComponent,
    RecipeListComponent,
    BreadcrumbComponent,
    CookTimeComponent,
    DescriptionComponent,
    IngredientsComponent,
    StepsComponent,
    ToolsComponent,
    ToddyRatioHelperComponent,
    SearchBannerComponent,
    SearchComponent,
    FlavorProfileComponent
  ],
  exports: [
    MatSidenavModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng7BootstrapBreadcrumbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    TagInputModule,
    AngularMultiSelectModule,
    NgxGalleryModule,
    ImageUploadModule,
    ComponentsModule,
    MatSidenavModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCopyright);
  }
}
