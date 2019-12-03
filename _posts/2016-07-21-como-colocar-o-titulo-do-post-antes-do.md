---
layout: post
title: Como colocar o título do post antes do nome do Blog do Blogger
datePublished: "2016-07-21 18:45:00"
tags: [blogger, seo, tutorial]
category: dev
image: /assets/blog/como-colocar-o-titulo-do-post-antes-do.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Nos Templates padrões do Blogger, quando se é aberto o mesmo blog em várias janelas ou guias em um navegador, aparece por primeiro o nome do blog e depois o título da postagem.

Com a personalização do título do Post antes do nome do Blog; Nos provedores de busca pode ajuda, a ter todas as paginas do blog indexadas e gerar mais visitas por isso vale a pena personaliza o títulos do post e nome do seu blog.

1. Acesse o *Painel do Blogger\Layout\Editar HTML*

2. Precione as teclas *ctrl+f* e procure pela linha abaixo.

```html
<title><data:blog.pageTitle/></title>
```

Substitua o código encontrado, pelo código abaixo:

```html
<b:if cond="data:blog.pageType == &quot;item&quot;">
    <title><data:blog.pageName/> - <data:blog.title/></title>

    <b:else/>
    <title><data:blog.pageTitle/></title>
</b:if>
```

Vizualize o modelo antes de salvar, se estiver tudo certo, salve a alteração.

Pronto, a partir de agora o título de suas postagens será apresentado nos Sites de Busca, antes do nome do Blog.

Só vale para o Blogger.