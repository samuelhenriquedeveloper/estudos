import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from 'app/cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from 'app/cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from 'app/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CursosRoutingModule } from "app/cursos/cursos.routing.module";

@NgModule({
    imports: [CommonModule, CursosRoutingModule],
    exports: [],
    declarations: [CursosComponent, CursoDetalheComponent,CursoNaoEncontradoComponent],
    providers: [CursosService]

})
export class CursosModule{}
