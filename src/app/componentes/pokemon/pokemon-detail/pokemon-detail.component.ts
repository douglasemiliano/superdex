import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{

  public pokemon: Pokemon;
  public viewShiny: boolean;

  constructor(private pokedex:PokedexService, private activatedRouter: ActivatedRoute) {}

  public ngOnInit(): void {
      this.pokemon = this.pokedex.buildPokemon(this.activatedRouter?.snapshot?.paramMap?.get("parametro"));
      console.log(this.pokemon);
      if(this.pokemon){
        console.log(document.getElementById("1"));

      }
  }

  public getPokemon(pokemon: string | null): void{
    this.pokedex.getPokemon(pokemon).subscribe(poke => {
      console.log(poke);
    });
  }

  public shiny(): void {
    this.viewShiny = !this.viewShiny;
  }
}
