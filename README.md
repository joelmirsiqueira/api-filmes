# API de Filmes - Trabalho de Gestão de Configuração

Este é um projeto simples de uma API para gerenciar filmes, desenvolvido como parte da disciplina de Gestão de Configuração de Software.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa para instalar o software:

*   [Node.js](https://nodejs.org/en/)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação e Execução

Um passo a passo que te diz como ter um ambiente de desenvolvimento rodando:

1.  Clone o repositório:
    ```sh
    git clone <url-do-seu-repositorio>
    ```
2.  Navegue até o diretório da API:
    ```sh
    cd api
    ```
3.  Instale as dependências do projeto:
    ```sh
    npm install
    ```
4.  Inicie o servidor:
    ```sh
    npm start
    ```
    O servidor estará rodando em `http://localhost:3000` (ou na porta que você configurar).

## 📖 Rotas da API

A API possui as seguintes rotas:

*   **GET `/filmes`**: Retorna uma lista de todos os filmes.
*   **POST `/filmes`**: Adiciona um novo filme à lista. O corpo da requisição deve ser um JSON com os detalhes do filme. Ex: `{"titulo": "O Poderoso Chefão", "ano": 1972}`.

## 🌊 Fluxo de Trabalho (Workflow)

Este projeto utiliza o **GitLab Flow** como fluxo de trabalho de desenvolvimento. É um fluxo mais simples que o Git Flow, baseado em *feature branches* e ambientes múltiplos (produção, pré-produção, etc.), é mais adequado do que o github flow para projetos que tem pretensão de escalar rapidamente e que é mantido por mais de um dev.

## Estudantes
Joelmir & 
Jalmir