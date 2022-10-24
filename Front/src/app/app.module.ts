import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './_services/services.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { OnlineComponent } from './online/online.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NosServicesComponent } from './nos-services/nos-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    ServicesComponent,
    PartenaireComponent,
    ContactComponent,
    FooterComponent,
    OnlineComponent,
    AccueilComponent,
    NosServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
