import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit, OnChanges {

  public pokemonAtual: any
  public descricao: any;
  public species: any

  @Input() public pokemon: any; 


  constructor(private pokedex: PokedexService) { }

  public ngOnInit(): void {
    if(this.pokemon){
      return;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
      if(this.pokemon){
      this.buildPokemon();
    }
  }

  public getSpecies(): void {
    this.pokedex.genericRequest(this.pokemonAtual?.species?.url).subscribe(data => {
      console.log(data);
      if (!data) {
        return;
      }
      return data!.flavor_text_entries[0];
    })
  }

  public buildPokemon(): void {
    console.log("entrou");
  
    var pokemon = new Pokemon();
    this.pokedex.getPokemon(this.pokemon).subscribe(data => {
      if (!data) { return; }
      pokemon.name = data.name;
      pokemon.sprite = data.sprites.front_default;
      pokemon.types = data.types;
      pokemon.weight = data.weight;

      this.pokedex.genericRequest(data?.species?.url).subscribe(species => {
        if (!species) { return;}
        pokemon.description = species?.flavor_text_entries[0].flavor_text;
        pokemon.color = species?.color?.name;
        this.pokemonAtual = pokemon;
    
      });
    });

  }
}
