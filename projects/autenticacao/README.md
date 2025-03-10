# SIGAE Open Source - Microfrontend de Autenticação
Este repositório contém a biblioteca de autenticação do projeto SIGAE.

## Tecnologias Utilizadas
- Angular 19 (Standalone)
- Native Federation 19 
- PrimeNG
- Primeicons
- Tailwind
- MSW
- Auth0

## Configuração e Execução

1. Clone o repositório:

   ```sh
    https://github.com/patriciacrestani/sigae-autenticacao.git
    cd sigae-autenticacao
   ```

2. Instale as dependências:

   ```sh
    npm install
   ```

3. Faça o build da bibilioteca e estabeleça o link

   ```sh
    ng build autenticacao
    npm link autenticacao
   ```

4. Estabeleça o link nos demais projetos

   ```sh
    npm link autenticacao
   ```

## Contribuição
1. Fork o repositório.
2. Crie uma branch para sua feature.
3. Realize as modificações e commit.
4. Envie um Pull Request.

## Licença
Este projeto está sob a licença MIT.