import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (this.auth.loggedIn()) {
      return true;
    }
    this.auth.logout();
    return false;
  }

}
