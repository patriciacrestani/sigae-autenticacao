
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class AutenticacaoService {

  constructor(private authService: AuthService) { }

  public login(): void {
    this.authService.loginWithRedirect();
  }
}