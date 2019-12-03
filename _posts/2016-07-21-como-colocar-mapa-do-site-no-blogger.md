---
layout: post
title: Como colocar Mapa do Site no Blogger
datePublished: "2016-07-21 12:04:00"
tags: [seo, blogger, tutorial]
category: dev
image: /assets/blog/como-colocar-mapa-do-site-no-blogger.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Você já pensou, em facilitar a navegação dos seus visitantes em seu blog, e encontrar todos os seus artigos publicado nele.

Bom muitos blogueiros, geralmente comentem erros em seu blog, começando por uma coisa bem simples, Mapa do blog/site, onde seus visitantes pode encontrar todos os seus artigos publicado em uma unica página.

Um mapa do site, tem muito mais funções de otimização do blog, do você pode imaginas, ele facilita o acesso de todos os seus artigos, com atualizações automática sem você precisar de acrescentar links ou qualquer outro coisa do tipo. Siga as instruções para por um mapa ao seu blog.

1. Entre no *Painel do Blogger\Páginas\Nova página*.

2. Agora coloque o nome da Página que você preferir e clique em HTML.

Cole o código abaixo dentro da página, faça as alterações necessária e clique em publicar.

```html
<script type="text/javascript" src="https://open-source.multicamada.com/JavaScript/SitemapForBlogger.js"></script>
<script type="text/javascript" src="http://NOME-DO-SEU-BLOG.blogspot.com/feeds/posts/default?max-results=9999&amp;alt=json-in-script&ampcallback=loadtoc"></script>
```

## Modificação necessária
Altere onde esta "*NOME-DO-SEU-BLOG*", para o nome do seu blog.

Este tutorial foi testado apenas na plataforma Blogger, por isso recomendamos que use este código apenas para o Blogger.