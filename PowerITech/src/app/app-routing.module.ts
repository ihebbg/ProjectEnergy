import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  // { path: '**', pathMatch: 'full', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
