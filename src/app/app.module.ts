import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //per visualizzare il layout nel browser o smartphone 
import { AppRoutingModule } from './app-routing.module';//per gestire il routing
import { FormsModule } from '@angular/forms'; //per lavorare con le FORM per i metodi di validazione ed intercettazione dei valori immessi
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; //per gestire richieste HTTP
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { DettailCardComponent } from './dettail-card/dettail-card.component';
import { AddscarpaComponent } from './addscarpa/addscarpa.component'; //componente di default




@NgModule(
  {
    //annoto i componenti del progetto
  declarations: [
    AppComponent,
    CardsComponent,
    DettailCardComponent,
    AddscarpaComponent,
  ],
  imports: [ //annoto i moduli del progetto
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [provideHttpClient()], //Annotare i Services, particolari classi ts condivise da tutti i componenti
  bootstrap: [AppComponent] 
})
export class AppModule { }
