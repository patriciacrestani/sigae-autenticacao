
import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Injectable()
export class AutenticacaoService {
  constructor(private authService: AuthService) { }

  public loginWithRedirect(): void {
    this.authService.loginWithRedirect();
  }

  public loginWithPopup(): void {
    this.authService.loginWithPopup();
  }
  
  public logout(): void {
    this.authService.logout();
  }

  public get user() {
    return this.authService.user$;
  }
  
  public get isAuthenticated() {
    return this.authService.isAuthenticated$;
  }
}