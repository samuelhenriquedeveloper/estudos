import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { AlunosComponent } from "app/alunos/alunos.component";
import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "app/alunos/aluno-detalhe/aluno-detalhe.component";

const alunosRoutes =[
    {path: '', component: AlunosComponent, children : [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent},
    {path: ':id/editar', component: AlunoFormComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule{}