import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  private user: any;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser$.subscribe(user => {this.user = user})
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authenticated();
  }

  authenticated(): boolean {
    // If user is authenticated already return true;
    if (this.user) return true;
  
    this.router.navigate(['/login']);

    return false;
  }
  
}
