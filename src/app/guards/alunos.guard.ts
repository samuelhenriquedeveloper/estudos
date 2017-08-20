import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateChild } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild{
    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|boolean {
            console.log ('guarda de rota filha');
            console.log(route);
            console.log(state);
            return true;
        }
}