import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";

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
}
