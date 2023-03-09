import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  public apiUrl = "https://pokeapi.co/api/v2/pokemon";

  private pokemonAtualSubject = new BehaviorSubject <any>(null);
  public pokemonAtual = this.pokemonAtualSubject.asObservable();
  
  constructor(private http: HttpClient) { }

  public fetchPokemon(): Observable <any>{
    return this.http.get(this.apiUrl);
  }

  public getPokemon(pokemon: any): Observable <any>{
    return this.http.get(this.apiUrl + "/" + pokemon);
  }

  public setPokemonAtual(pokemon: string | null): void {
    return this.pokemonAtualSubject.next(pokemon);
  }

  public genericRequest(url: string): Observable <any> {
    return this.http.get(url);
  }

  public fetchPokemonWithPagination(offset: number, limit: number): Observable<any> {
    return this.http.get(this.apiUrl + "?offset=" + offset + "&limit=" + limit );
  }

  public buildPokemon(nomePokemon: string | null): Pokemon {
    var pokemon = new Pokemon();
    this.getPokemon(nomePokemon).subscribe(data => {
      if (!data) { return; }      
      pokemon.name = data.name;
      if(!data.sprites.other["official-artwork"].front_default){pokemon.sprite = "https://cdn.dribbble.com/users/310943/screenshots/2792692/empty-state-illustrations.gif"}
      else{
        // pokemon.sprite = data.sprites.other.dream_world.front_default;
        // pokemon.sprite = data.sprites.other.home.front_default;
        pokemon.sprite = data.sprites.other["official-artwork"].front_default;
        pokemon.spriteShiny = data.sprites.other["official-artwork"].front_shiny;

        // pokemon.sprite = data.sprites.front_default;

      }
      pokemon.types = data.types;
      pokemon.weight = data.weight;
      pokemon.id = data.id;

      this.genericRequest(data?.species?.url).subscribe(species => {
        if (!species) { return;}
        pokemon.color = species?.color?.name;
        if (species.flavor_text_entries.length === 0){
          pokemon.description = "Este pokemon ainda não possui uma descrição!"
          return pokemon;
        }
        pokemon.description = species?.flavor_text_entries[0].flavor_text;
        return pokemon;
      });
    });
    return pokemon;
  }
}
