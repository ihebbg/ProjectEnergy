import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { OnlineComponent } from './online/online.component';

const routes: Routes = [
  { path: '', redirectTo: 'infoenergy', pathMatch: 'full' },

  { path: 'infoenergy', component: AccueilComponent },
  {
    path: 'infoenergy/online',
    component: OnlineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
