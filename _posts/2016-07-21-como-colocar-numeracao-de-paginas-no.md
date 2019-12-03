---
layout: post
title: Como colocar numeração de páginas no Blogger
datePublished: "2016-07-21 16:39:00"
tags: [blogger, seo, tutorial]
category: dev
image: /static/blog/como-colocar-numeracao-de-paginas-no.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Muitos usuários do Blogger, geralmente opta por fazer algumas alterações em seu template, para facilitar a navegação de seus usuários e tona-la mais acessível todas as informações publicada em seu blog. As alterações do template varia da necessidade de cada blogueiro, sendo assim hoje nos vamos lhe ensinar a por numeração de página em seu blog do Blogger.

A numeração de página para blogs facilita a navegação de seus usuários, deixando seu blog mais otimizado, para encontrar com mais facilidade seus artigos publicado, deixando cada um deles mais organizado junto com a categoria escolhida em suas pesquisas.

Antes de fazer qualquer alteração recomendamos que você faça o BACKUP do modelo atual do seu blog, para evitar problemas e alterações indesejáveis do template.

## Adicionando o Script
Pressione Ctrl+F e procure pelo seguinte código

```html
]]></b:skin>
```

Antes dele adicione o seguinte código:

```css
.blog-pager {
    float: right;
    font: bold 12px Arial;
    text-align: center;
    padding: 15px 10px;
    margin: 0
}

.showpageNum a,
.showpage a {
    background: #fff;
    text-decoration: none;
    white-space: nowrap;
    color: #222;
    margin: 10px 3px;
    padding: 5px 10px;
    border: 1px solid #ddd
}

.showpageNum a:hover,
.article-post .showpage a:hover {
    color: #fff;
    text-decoration: none;
    background-color: #4285f4;
    border: 1px solid #4285f4
}

.showpageOf {
    display: none;
    margin: 0
}

.showpagePoint {
    color: #fff;
    text-decoration: none;
    background-color: #4285f4;
    font-size: 12px;
    margin: 10px 3px;
    padding: 5px 10px;
    border: 1px solid #4285f4
}

.blog-pager-newer-link,
.article-post .home-link,
.article-post .blog-pager-older-link {
    padding: 10px
}
```

Prepare as tags script para receber o .js. Procure por `</body>`, adicone o código abaixo acida do código encontrado.

```html
<script type="text/javascript">
    var postperpage = 10;
    var numshowpage = 3;
    var upPageWord = "&#8249;Anterior";
    var downPageWord = "Próximo&#8250;";
    var urlactivepage = location.href;
    var home_page = "/";
</script>

<script type="text/javascript" src="https://open-source.multicamada.com/JavaScript/PaginationForBlogger.js"></script>
```

## Alteração do código
Na linha `(var numshowpage=10;)` o numero 10 exibe a o resultado de página que o blog tem.

Na linha `(var postperpage =3;)` o numero 3 exibe o resultados de artigos encontrador por página.

No trecho `#` você pode alterar os valores (a frente de #), para combinar com as cores do seu blog.

## Corrigindo o Template
Agora procure pelo trecho a seguinte:

```
"data:label.url"
```

Substitua todos os código encontrado por:

```
"data:label.url + &quot;?&amp;max-results=10&quot;"
```

Alterar o os resultados da correção do Template

No trecho `"max-results=5&quot;"` do código, o numero 5 e o resultado de artigos encontrado por categoria selecionada.

Salve o template e faça os devidos teste, para ver se esta tudo certo, se você não gostou da numeração de página, você pode inserir o modelo antigo, o BACKUP que recomendamos fazer do modelo anterior do seu blog.