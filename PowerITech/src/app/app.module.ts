import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServicesEnergetiqueComponent } from './services-energetique/services-energetique.component';
import { OffresComponent } from './offres/offres.component';
import { ReferencesComponent } from './references/references.component';
import { ValeursComponent } from './valeurs/valeurs.component';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,

    ContactComponent,
    FooterComponent,
    AccueilComponent,
    ServicesEnergetiqueComponent,
    OffresComponent,
    ReferencesComponent,
    ValeursComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
