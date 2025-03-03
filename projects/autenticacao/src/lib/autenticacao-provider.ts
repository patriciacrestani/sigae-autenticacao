import { EnvironmentProviders, inject, InjectionToken, makeEnvironmentProviders, provideAppInitializer } from '@angular/core';
import { provideAuth0 } from '@auth0/auth0-angular';
import { AUTH_CONFIG } from './autenticacao-config';
import { AutenticacaoService } from './autenticacao.service';

export function provideAutenticacao(): EnvironmentProviders {
   return makeEnvironmentProviders([
        provideAuth0({
            domain: AUTH_CONFIG.domain,
            clientId: AUTH_CONFIG.clientId,
            authorizationParams: {
                redirect_uri: AUTH_CONFIG.authorizationParams.redirect_uri
            }
        }),
        AutenticacaoService
   ]);
}