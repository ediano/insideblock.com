---
layout: post
title: Postagens relacionadas com imagem para Blogger
datePublished: "2016-07-21 09:22:00"
dateModified: '2020-01-31 23:40:00'
tags: [seo, blogger, otimização]
category: dev
image: /assets/blog/postagens-relacionadas-com-imagem-para.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Uma maneira bem simples de manter seus leitores por mais tempo dentro do seu site, é utilizando as postagens relacionadas.

As postagens relacionas, são sugeridas automaticamente na mesma categoria que a postagem atual, deixando o site mais otimizando e profissional. Existe serviços online que facilita a vida dos blogueiros, que nos fornece códigos já pre definido para adicionar no template de nossos blogs, entretanto esses serviços pode ser descontinuado a qualquer momento, deixando as postagens sem conteúdo relacionado.

Para que isso não aconteça, recomendamos que hospede um código pronto dentro de sua plataforma, onde você terá o controle absoluto do conteúdo.

Vá ao Painel do Blogger, clique no blog que você quer adicionar as postagens relacionas &gt; Modelo. Antes de qualquer alterar recomentamos que faça o backup do seu templete, em fim clique em "Editar HTML"

## Primeiro código
Procure pela tag

```html
</head>
```

Adicione o código js a seguir acima do código encontrado (`</head>`).

```html
<script type="text/javascript">
    $(document).ready(function() {$(&#39;.resizethumbnail&#39;).attr(&#39;src&#39;, function(i, src) {returnsrc.replace( &#39;s72-c&#39;, &#39;s500-c&#39; );});});

    var currentposturl = & quot; < data: post.url / > & quot;;
    var maxresults = 4;
    var relatedpoststitle = & quot;
    Recomendados Para Você: & quot;;
    removeRelatedDuplicates_thumbs();
    printRelatedLabels_thumbs();
</script>
<script src="https://insideblock.github.io/open-code/js/blogger/related-post.js"></script>
```

## Segundo código
Porcure por `</b:skin>` e adicione o código abaixo antes dela.

```css
#related-posts {
    float: center;
    text-transform: none;
}

#related-posts h2 {
    font-size: 20px;
    color: #000;
    margin-bottom: 10px;
}

#related-posts a {
    color: #000;
}

#related-posts a:hover {
    color: #4285F4;
}

#related-posts img {
    margin: auto;
}

#rp-imagem {
    width: 100%;
    height: auto;
    border-radius: 1000px;
}

#rp-texto {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: normal;
}
```

## Terceiro código
Agora procure um dos dois códigos abaixo.

```html
<div class="post-footer">
```

ou

```html
<div class="post-footer-line post-footer-line-1">
```

Adicione o código seguinte abaixo de um dos dois códigos que você encontrar.

```html
<div class="hide-on-small-only" id="related-posts">
    <b:loop values="data:post.labels" var="label">
        <b:if cond="data:label.isLast != &quot;true&quot;"></b:if>
        <b:if cond="data:blog.pageType == &quot;item&quot;">
            <script expr:src="&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&ampcallback=related_results_labels_thumbs&amp;max-results=6&quot;></script>
        </b:if>
    </b:loop>
</div>
```

Apos adicionar todos os código ao template, você pode personalizar de acordo com o layout do seu site. Lembrando que necessário que você tenha alguma experiencia com JavaScript, CSS e HTML.

Espero que tenha gostado, qualquer duvida deixe um comentaria.