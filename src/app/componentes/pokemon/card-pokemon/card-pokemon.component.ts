import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnChanges {

  public pokemonAtual: any
  public descricao: any;
  public species: any

  @Input() public pokemon: any; 


  constructor(private pokedex: PokedexService,private router: Router) { }

  public ngOnChanges(changes: SimpleChanges): void {
      if(this.pokemon){
      this.pokemonAtual = this.pokedex.buildPokemon(this.pokemon);      
    }
  }
  
  public goToPokemon(pokemon: any):void{
    this.router.navigateByUrl("pokemon/"+pokemon);
  }
}
