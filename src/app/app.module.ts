import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './componentes/home/home.component';
import { CardPokemonComponent } from './componentes/pokemon/card-pokemon/card-pokemon.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PokemonDetailComponent } from './componentes/pokemon/pokemon-detail/pokemon-detail.component';
import { AppRoutingModule } from './app-routing-module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardPokemonComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InfiniteScrollModule, 
    AppRoutingModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);