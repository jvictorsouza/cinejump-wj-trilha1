![image](https://user-images.githubusercontent.com/54218892/148388406-98635308-436f-4077-bd07-1d7e4016dd89.png)
# Cinejump

Projeto final da Trilha 1 para desenvolvedores Frontend React disponibilizado pela Academia Webjump, programa de capacitação interno da empresa Webjump Design em Informática. O projeto consiste em um website voltado para amostragem de filmes e séries.

## Motivação

Criação de uma plataforma com login, cadastro e home page com as bases de React, mais precisamente **HTML**, **ES6** e **CSS**.

## Métodos e resultados

O projeto visa modularizar a renderização dos principais componentes e páginas da plataforma. O principais módulos criados são:

- Login
- Cadatro
- Header
- Footer
- Home

Cada módulo é separado por pastas contendo arquivos estruturados em **ES6** e **CSS** de estilização individuais. A estrutura adotada permite dividir o projeto proporcionando um maior controle do projeto durante desenvolvimento dos arquivos e a manutenção.

## Projeto

O projeto tem como pilar as seguintes características/ferramentas:

- **HTML**
- **CSS** - **CSS**-loader and style-loader package
- ECMAScript 6 - babel and webpack package
- TMDB API - axios package
- Youtube API - youtube-search package
- Enviroment Variables - dotenv-webpack package

## Requisitos e Instruções de execução

Primeiro de tudo é necessário configurar o arquivo .env com a url da API TMDB (API_BASE_URL) juntamente com a key de acesso pessoal (API_KEY), a url de acesso às imagens (IMAGE_BASE_URL) e por fim o token para acesso à API do Google, mais precisamente para a API Youtube Search (API_GOOGLE_YOUTUBE_V3)

Valores exemplo:

- API_BASE_URL = 'https://api.themoviedb.org/3'
- API_KEY = 'AIzaSyB0dAPeTlnv9j-7vM3-RCNPWA0NFmppvo0'
- IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'
- API_GOOGLE_YOUTUBE_V3 = 'b9e1384462905203809836896979951d'

Configurado o arquivo .env, agora com o software NODE.js e o gerenciador de pacotes npm instalados, execute as instruções abaixo na pasta raiz do projeto:

```console
npm install
npm run dev
```

Acesse a url http://localhost:8080/

## Vídeo demonstrativo

https://user-images.githubusercontent.com/54218892/148390439-7efcfb58-d095-4a7a-b2a8-44fb266efeec.mp4
