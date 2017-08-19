import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Injectable , EventEmitter} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private router : Router) { }

  private usuarioAutenticado : boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();


  fazerLogin(usuario : Usuario){
    if (usuario.nome === "sam" && usuario.senha === "123")
      {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/']);
      }
      else
        {
          this.usuarioAutenticado = false;
          this.mostrarMenuEmitter.emit(false);
        }
  }

  usuarioestaAutenticado(){
    return this.usuarioAutenticado;
  }

}
