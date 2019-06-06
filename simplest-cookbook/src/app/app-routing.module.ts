import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
    { path: 'recipes', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'index', component: WelcomeComponent },
    { path: '', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
