import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, UrlSegment, Route, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor(private authService: AuthServiceService, private router: Router){}

  canLoad(
    route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
      if(!this.authService.userIsAuthenticated){
        this.router.navigateByUrl('/auth');
      }
      return this.authService.userIsAuthenticated;
  }
  
}
