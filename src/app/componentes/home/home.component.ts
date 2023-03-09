import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemonAtual: any
  public listaPokemon: any[];
  private offset = 20;
  public limit = 20;

  constructor (private pokedex: PokedexService) { }

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

  public onScrollDown(): void {
    this.offset += 20;
    this.pokedex.fetchPokemonWithPagination(this.offset, this.limit).subscribe(data => {
      this.listaPokemon = this.listaPokemon.concat(data.results);
    });
  }
}
