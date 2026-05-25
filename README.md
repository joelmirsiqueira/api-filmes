# API de Filmes - Trabalho de Gestão de Configuração

[![Docker](https://badgen.net/badge/icon/Docker?icon=docker&label)](https://hub.docker.com/r/joelmirsiqueira/api-filmes-gc2)

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

## Infraestrutura com Vagrant

### Requisitos:

- VirtualBox
- Vagrant

### Passo a Passo:
**1. Iniciar as máquinas virtuais:**

No terminal da máquina hospedeira execute esse comando na raiz do projeto, ele vai baixar a Box necessária, configurar as redes privadas, sincronizar as pastas e instalar as dependências automaticamente.


```bash 
vagrant up
```

**2. Verificar Status das VMs:**

Para ter a certeza que ambas as máquinas estão rodando, checar o status delas.

```bash
vagrant status
```

**3. Acessar a VM1:**

Entrar na máquina via SSH:

```bash
vagrant ssh vm1
```

**4. Acessar a rota GET na VM2:**

Dentro do terminal da VM1, utilize o comando `curl` para disparar uma requisição HTTP para a API de filmes que está rodando na VM2:

```bash
curl -X GET http://192.168.56.11:3000/filmes
```

## 📖 Rotas da API

A API possui as seguintes rotas:

*   **GET `/filmes`**: Retorna uma lista de todos os filmes.
*   **POST `/filmes`**: Adiciona um novo filme à lista. O corpo da requisição deve ser um JSON com os detalhes do filme. Ex: `{"titulo": "O Poderoso Chefão", "ano": 1972}`.

## 🌊 Fluxo de Trabalho (Workflow)

Este projeto utiliza o **GitLab Flow** como fluxo de trabalho de desenvolvimento. É um fluxo mais simples que o Git Flow, baseado em *feature branches* e ambientes múltiplos (produção, pré-produção, etc.), é mais adequado do que o github flow para projetos que tem pretensão de escalar rapidamente e que é mantido por mais de um dev.

## Estudantes
Joelmir & 
Jalmir