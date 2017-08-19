import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

    private alunos : any[] = [
    {id: 1,nome: 'Joao', email: 'joao@google.com'},
    {id: 2,nome: 'Pedro', email: 'pedro@google.com'},
    {id: 3,nome: 'Maria', email: 'maria@google.com'}
        
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id : number){
    for (let i = 0; i < this.alunos.length; i++)
      if (this.alunos[i].id == id)
        return this.alunos[i];    
    return null;
  }

  constructor() { }

}
