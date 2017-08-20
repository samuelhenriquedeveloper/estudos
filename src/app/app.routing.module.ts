import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, CanActivateChild } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "app/login/login.component";


const appRoutes: Routes = [
    {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canActivateChild: [CursosGuard] },
    {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canActivate:[AuthGuard], canActivateChild: [AlunosGuard] },
    {path: '', component: HomeComponent , canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}