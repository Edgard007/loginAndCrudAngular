import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      const logged = localStorage.getItem('sesion') || '';

      if (logged) {
        observer.next(true);
        observer.complete();
      } else {
        // Si no está logueado, mandar al login.
        this.router.navigate(['login']);
        observer.complete();
      }
    });
  }
}
