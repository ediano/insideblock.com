---
layout: post
title: Ocultar elementos em páginas específica do Blogger
datePublished: "2016-07-21 22:34:00"
tags: [seo, blogger, dicas]
category: dev
image: /ocultar-elementos-em-paginas-especifica.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Com esta dica você vai aprender a ocultar e exibir elementos do blogger em determinadas paginas, quando instalamos um elemento no blogger por parão ele mostra na página inicial, nas páginas internas, incluindo as páginas de arquivos e marcadores.

Para que você possa ocultar ou exibir elementos em determinadas página você tem que fazer uso das condicionais do Blogger, são com elas que você poderá deixar seu template de modo que a página inicial se diferencie das demais páginas, ajuda a melhorar o carregamento do seu blog, ao ocultar certos elementos ‘mais pesados’ da página inicial.

## Exemplificando para um melhor entendimento
Digamos que você instalou um anuncio em seu blog, por padrão este anuncio vai aparecer em todas as página, porem você que que ele apereça apenas na página inicial (home).

Acesse o *Painel do Blogger\Modelo\Editar HTML*. (Recomendamos que faça o backup do seu template ante de fazer qualquer alteração).

No nosso exemplo, este elemento é o anuncio, então o código html que inicia este anuncio vai estar assim:

```html
<!--Inicio do Anuncio Que Iremos Ocultar-->
<div id="ads" class="ads">

</div>
<!--Fim do Anuncio Que Iremos Ocultar-->
```

Agora você deve colar o código da condicional que define onde o anuncio irá aparecer, que no nosso exemplo será apenas na home.

Você deve colar o código de abertura da condicional logo ACIMA da linha que inicia o código html do anuncio, e APÓS o código de encerramento do anuncio, você deve colar a tag de fechamento da condicional.

Deverá ficar assim:

```html
<b:if cond="data:blog.url == data:blog.homepageUrl">
<!--Inicio do Anuncio Que Iremos Ocultar-->
<div id="ads" class="ads">

</div>
<!--Fim do Anuncio Que Iremos Ocultar--> 
</b:if>
```

No exemplo acima, o anuncio vai aparecer somente na página inicial do blog.

Não esqueça que: Sempre que quiser ocultar um elemento em determinada página, você deve colar o código de abertura da condicional logo ACIMA da linha que inicia o código html do elemento, e APÓS o código de encerramento dele, você deve colar a tag de fechamento da condicional.

### Código específicos da condicional para função ocultar
Para Ocultar um elemento APENAS na Página Inicial:
```html
<b:if cond="data:blog.homepageUrl != data:blog.url">
```

Para Ocultar um elemento APENAS nas Páginas internas(de postagens):
```html
<b:if cond="data:blog.pageType != "item"">
```

Para Ocultar um elemento APENAS na página inicial, de marcadores e arquivo:
```html
<b:if cond="data:blog.pageType == "item"">
```

Para ocultar um elemento APENAS nas Páginas Estáticas:
```html
<b:if cond="data:blog.pageType != "static_page"">
```

### Código específicos da condicional para função exibir/mostrar
Para MOSTRAR um elemento APENAS na Página Inicial:
```html
<b:if cond="data:blog.url == data:blog.homepageUrl">
```

Para MOSTRAR um elemento APENAS nas Páginas Inicial, de Marcadores e de Arquivos:
```html
<b:if cond="data:blog.pageType != "item"">
```

Para MOSTRAR um elemento APENAS nas Páginas Individuais dos Posts(páginas internas):
```html
<b:if cond="data:blog.pageType == "item"">
```

Para MOSTRAR um elemento APENAS nas Páginas Estáticas:
```html
<b:if cond="data:blog.pageType == "static_page"">
```

Para MOSTRAR um elemento APENAS na Página de um Post Específico:
```html
<b:if cond="data:blog.url == "URL-DO-POST"">
```

Para MOSTRAR um elemento APENAS nas Páginas de Arquivos:
```html
<b:if cond="data:blog.pageType == "archive"">
```

Estas são as condicionais suportáveis pelo Blogger. Se algum código que você inseriu não deu certo, eu recomendo que você teste, usando o outro.