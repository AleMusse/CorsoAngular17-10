import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http'; // quando è barrata significa DEPRECATA
import { provideHttpClient } from '@angular/common/http';
// provide è una funzione e non una class per questo è con la lettera minusciola
// e sostituisce HttpClientModule 

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RequestComponent } from './request/request.component'; 

@NgModule(
  {
  declarations: [
    AppComponent,
    RequestComponent,  
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    FormsModule
  ],
  providers: [provideHttpClient()], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
