import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardPrincipalComponent } from './components/card-principal/card-principal.component';
import { CardsSecundariosComponent } from './components/cards-secundarios/cards-secundarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MightLikeCardsComponent } from './components/might-like-cards/might-like-cards.component';
import { PostComponent } from './pages/post/post.component';
import { ContainerRecommendationsComponent } from './components/container-recommendations/container-recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardPrincipalComponent,
    CardsSecundariosComponent,
    HomeComponent,
    MightLikeCardsComponent,
    PostComponent,
    ContainerRecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
