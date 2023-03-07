import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemonAtual: any
  public listaPokemon: any;

  constructor(private pokedex: PokedexService) { }

  public ngOnInit(): void {
    this.pokedex.pokemonAtual.subscribe(data => {
      if (!data) {
        this.pokemonAtual = data;        
        return;
      }
      this.pokemonAtual = data;
    });

    this.pokedex.fetchPokemon().subscribe(data => {
      console.log(data);
      this.listaPokemon = data?.results;
    })
  }

  public strIsEmpt(str: string) {
    if(str) {
      let s = str.trim()
      if (!s || s.length === 0 || s === " ") {
        return true;
      } return false;
    } return;
  }
}
