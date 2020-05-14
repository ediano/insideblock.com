---
layout: post
title: 'Criando barra de aviso de cookies para sites'
description: >-
  Aprenda a criar, instalar e personalizar a barra de aviso de cookies em seu site.
datePublished: '2020-05-15 07:00:00'
dateModified: '2020-05-15 07:00:00'
tags:
  - dev
  - js
  - html
  - css
category:
  - dev
image: /criando-barra-de-aviso-de-cookies-para-sites.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Em março de 2018, começou a valer a leis da União Europeia, que obriga você a informar aos seus visitantes que tipos de informações o seu site coleta. Apesar dessa prática agora ser obrigatória, são poucos os sites que tem este tipo de aviso instalado em suas páginas.

Para evitar que o seu blog seja punido por algum motivo relacionado, iremos mostrar como você pode instalar um pequeno código porém poderoso, que vai passar a exibir uma barra para os seus visitante sobre uso de cookies.

OBS: Caso você seja um usuário do Blogger e faz uso de templates oficiais da plataforma, o Google se encarrega de exibir este aviso automaticamente caso um visitante acesse o blog da União Europeia.

A código fonte da barra de aviso de cookies é muito simples, primeiro vamos criar a nossa box com HTML, em seguida vamos adicionar um pouco de CSS para estilizar a barra, por último vamos aplicar um função com JavaScript puro.

Adicionando o HTML
```html
<div class="box-cookies">
   <p class="msg-cookies">Este site usa cookies para garantir que você obtenha a melhor experiência.</p>
   <button class="btn-cookies">Aceitar!</button>
</div>
```

Veja que o código HTML é bem simples, ao todo ele é composto por quatro linhas, uma div `.box-cookies` que vai fazer o container das outras duas linhas `.msg-cookies` e `.btn-cookies`.

Adicionando o CSS
```css
.box-cookies.accept {
   display: none !important
}

.box-cookies {
   bottom: 0;
   width: 100%;
   z-index: 998;
   color: #fff;
   position: fixed;
   background: rgba(0, 0, 0, .9)
}

.box-cookies .msg-cookies,
.box-cookies .btn-cookies {
   text-align: center;
   padding: 10px 15px;
   color: #fff
}

.box-cookies .btn-cookies {
   background: #1e88e5
}

@media screen and (min-width: 576px) {
   .box-cookies {
       display: flex;
       align-items: center;
       height: 60px
   }
   .box-cookies .btn-cookies {
       height: 60px;
       margin-left: auto;
       color: #fff
   }
}

@media screen and (max-width: 575px) {
   .box-cookies .btn-cookies {
       width: 100%
   }
}
```

O código CSS ele é um pouquinho maior, porém isso é necessário para que ele fique em uma posição fixa e totalmente responsivo. OBS: A função responsiva só vai funcionar se o blog também for responsivo.

Adicionando o JavaScript
```js
if (localStorage.cookies) {
   document.getElementsByClassName("box-cookies")[0].classList.add("accept");
};

var acceptCookies = function() {
   document.getElementsByClassName("box-cookies")[0].classList.add("accept");
   localStorage.setItem("cookies", "accept");
};

var btnCookies = document.getElementsByClassName("btn-cookies")[0];
btnCookies.onclick = acceptCookies;
```

O código JS também é considerado pequeno, pois estamos trabalhando com o armazenamento local no navegador `localStorage`, assim podemos garantir que quando o visitante clicar no botão “Aceitar”, que ele não precise clicar novamente ao retornar ao blog ou a página.

## Conclusão
Mesmo que você não use o código fonte criado pelo Inside Block, é extremamente importante que você faça uso do aviso de cookies em seu blog, pois assim você garantir um pouco mais que o seu blog esteja de acordo com as leis da União Europeia quando for visitada por um usuário da região.

Bom, eu espero que todos vocês tenham gostado, não esqueça de fazer um comentário sobre o assunto e compartilhe na redes sociais.