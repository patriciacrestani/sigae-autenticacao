interface AuthConfig {
    clientId: string;
    domain: string;
    authorizationParams: { redirect_uri: string };
}
  
export const AUTH_CONFIG: AuthConfig = {
    domain: 'dev-p5e2nv6n34o06zgu.us.auth0.com',
    clientId: 'AeBPz25AdEIxo3BWSsGMC9qhDebqpuZh',
    authorizationParams: {
        redirect_uri: window.location.origin
    }
};