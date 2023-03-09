import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pokemonForm = new FormControl("");

  constructor(
    private pokedex: PokedexService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public pesquisar(): void {
    this.router.navigateByUrl("");
    this.pokedex.setPokemonAtual(this.pokemonForm?.value);
  }
}
