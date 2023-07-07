# Gerenciador de Usuários Plus

Gerencie seus usuários com facilidade e segurança usando o Gerenciador de Usuários Plus.

## Descrição

O Gerenciador de Usuários Plus é uma aplicação web que oferece uma plataforma para gerenciar usuários e suas informações.

Com este sistema, os usuários podem se cadastrar, fazer login, atualizar seus dados,
e realizar outras operações relacionadas ao gerenciamento de usuários.

A aplicação possui recursos como autenticação, proteção de rotas, CRUD de usuários,
e uma interface amigável e intuitiva para a melhor experiência do usuário.

## Pré-requisitos

- Angular CLI (versão 16.1.0)

## Instalação

1. Clone o repositório: `git clone https://github.com/luissobrinho/maitha-tech-app.git`
2. Navegue até o diretório do projeto: `cd maitha-tech-app`
3. Instale as dependências: `npm install`

## Configuração

Explique as etapas de configuração necessárias, como a configuração de variáveis de ambiente ou outras configurações específicas do projeto.

## Utilização

1. Inicie o servidor de desenvolvimento: `ng serve`
2. Abra o projeto no navegador: `http://localhost:4200`

## Estrutura de Arquivos

```
src
├── app
│   ├── components
│   │   ├── delete-user
│   │   ├── edit-user
│   │   ├── sign-in
│   │   ├── sign-up
│   │   └── snack-bar
│   ├── dtos
│   │   ├── login
│   │   ├── sign-up
│   │   ├── token
│   │   └── user
│   ├── guards
│   │   ├── authenticated
│   │   └── unauthenticated
│   ├── interceptors
│   │   └── error
│   ├── models
│   │   └── user
│   ├── pages
│   │   ├── home
│   │   └── login
│   └── services
│       ├── api
│       ├── auth
│       └── user
└── assets
```

## Recursos

- #### Componentes:
  - **delete-user**: Componente responsável pela exibição e confirmação de exclusão de um usuário.
  - **edit-user**: Componente que permite editar as informações de um usuário.
  - **sign-in**: Componente para o formulário de login de usuário.
  - **sign-up**: Componente para o formulário de cadastro de usuário.
  - **snack-bar**: Componente personalizado para exibição de mensagens em estilo de snack bar.
  
- #### DTOs (Data Transfer Objects):
  - **login**: DTO que representa os dados necessários para o login de um usuário.
  - **sign-up**: DTO que representa os dados necessários para o cadastro de um novo usuário.
  - **token**: DTO que representa os dados de autenticação e autorização de um usuário.
  - **user**: DTO que representa os dados de um usuário.
  
- #### Guardas:
  - **authenticated**: Guarda de rota que permite o acesso somente a usuários autenticados.
  - **unauthenticated**: Guarda de rota que permite o acesso somente a usuários não autenticados.

- #### Interceptadores:
  - **error**: Interceptador responsável por capturar erros de requisição e exibir mensagens de erro.

- #### Modelos:
  - **user**: Modelo que define a estrutura de dados de um usuário.

- #### Páginas:
  - **home**: Página inicial do aplicativo.
  - **login**: Página de login do aplicativo.

- #### Serviços:
  - **api**: Serviço responsável por fazer requisições à API para comunicação com o backend.
  - **auth**: Serviço de autenticação e autorização de usuários.
  - **user**: Serviço para gerenciamento de usuários.

## Contribuição

Explique como outras pessoas podem contribuir para o projeto. Por exemplo:

1. Faça um fork do projeto
2. Crie uma branch para sua contribuição: `git checkout -b feature/nova-funcionalidade`
3. Faça as alterações necessárias
4. Faça o commit das suas alterações: `git commit -m 'Adiciona nova funcionalidade'`
5. Envie suas alterações para o repositório remoto: `git push origin feature/nova-funcionalidade`
6. Abra um pull request no GitHub

## Contato

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- Nome: Luis Sobrinho
- Email: ads.luis.sobrinho@gmail.com
- GitHub: [luissobrinho](https://github.com/luissobrinho)

