import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PokemonDetailComponent } from './componentes/pokemon/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "home", component: HomeComponent},
    { path: "pokemon/:parametro", component: PokemonDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }