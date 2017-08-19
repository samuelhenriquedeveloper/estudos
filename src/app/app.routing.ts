import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "app/cursos/cursos.component";

import { LoginComponent } from "app/login/login.component";
import { CursoDetalheComponent } from "app/cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "app/cursos/curso-nao-encontrado/curso-nao-encontrado.component";


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'curso/:id', component: CursoDetalheComponent},
    {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
    {path: 'login', component: LoginComponent}
]

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);