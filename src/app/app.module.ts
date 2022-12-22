import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardPrincipalComponent } from './card-principal/card-principal.component';
import { CardsSecundariosComponent } from './cards-secundarios/cards-secundarios.component';
import { HomeComponent } from './home/home.component';
import { MightLikeCardsComponent } from './might-like-cards/might-like-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardPrincipalComponent,
    CardsSecundariosComponent,
    HomeComponent,
    MightLikeCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
