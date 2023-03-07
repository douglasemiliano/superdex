import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public pokemonForm = new FormControl("");

  constructor(
    private pokedex: PokedexService
  ){}

  ngOnInit(): void {
      
  }

  public pesquisar(): void{
    console.log(this.pokemonForm.value);
    
      this.pokedex.setPokemonAtual(this.pokemonForm?.value);
  }
}
