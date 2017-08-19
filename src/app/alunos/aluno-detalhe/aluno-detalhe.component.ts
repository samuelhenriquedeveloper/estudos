import { AlunosService } from 'app/alunos/alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;

  inscricao : Subscription;
  
  constructor(
    private route : ActivatedRoute,
    private alunosService : AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params : any) => {
        let id = params ['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
