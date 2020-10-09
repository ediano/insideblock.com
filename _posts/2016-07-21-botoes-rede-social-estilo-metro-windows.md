---
layout: post
title: Botões rede social estilo Metro Windows 8
datePublished: "2016-07-21 14:06:00"
tags: [seo, redes sociais, front-end]
category:
  - css
image: /botoes-rede-social-estilo-metro-windows.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Hoje as redes sociais é um grande aliados para todos os blogueiros, principalmente quando criamos nossas páginas oficiais para divulgar nossos artigos, em primeira mão para nossos visitantes diretamente para o Facebook, Twitter, Google+ entre outros.

A divulgação dos seus artigos diretamente para as redes sociais, pode aumentar em ate 3 vezes mais o numero de visitantes diários em seu blog, (depende dos artigos publicado, ou a que categoria seu blog se classifica).

Por isso não perca tempos e coloque agora mesmo os botão das redes sociais do estilo Metro (Windows 8) ao seu blog, para compartilhar melhor os artigos do seu blog com seus amigos e visitantes.

Para começar siga as instruções abaixo para adicionar os botões ao seu blog.

1. Aplique o código CSS dentro da folha de estilos do blog.

```css
.metro-social {
    width: 300px
}

.metro-social li {
    position: relative;
    cursor: pointer;
    padding: 0;
    list-style: none
}

.metro-social .fb,
.tw,
.gp,
.pi,
.in,
.yt,
.fd {
    z-index: 7;
    float: left;
    margin: 1px;
    position: relative;
    display: block
}

.metro-social .fb {
    background: url(http://2.bp.blogspot.com/-jDi1minoHBw/UhvjiI1GY6I/AAAAAAAAAio/lfs0h-hpbaQ/s1600/facebook.png) no-repeatcenter center #1f69b3;
    width: 147px;
    height: 141px
}

.metro-social .tw {
    background: url(http://2.bp.blogspot.com/-G3C_O5XFKbI/UhvjsPqpe8I/AAAAAAAAAiw/uxhlb5snwaY/s1600/twitter-bird-dark-bgs.png)no-repeat center center #43b3e5;
    width: 72px;
    height: 70px
}

.metro-social .gp {
    background: url(http://3.bp.blogspot.com/-nQBTmP6DMeo/Uhvj0d0wbvI/AAAAAAAAAi4/TN0crRtiTqo/s1600/google+plus.png) no-repeatcenter center #da4a38;
    width: 73px;
    height: 70px
}

.metro-social .pi {
    background: url(http://1.bp.blogspot.com/-5UVlqbmfrGE/Uhvj-bzHjdI/AAAAAAAAAjA/ONblStiMWc8/s1600/pinterest.png) no-repeatcenter center #d73532;
    width: 72px;
    height: 69px
}

.metro-social .in {
    background: url(http://1.bp.blogspot.com/-wstBUi1KJvM/UhvkFE0ULUI/AAAAAAAAAjI/pYXFGoASttM/s1600/linkedin.png) no-repeatcenter center #0097bd;
    width: 73px;
    height: 69px
}

.metro-social .yt {
    background: url(http://2.bp.blogspot.com/-TrekCNcWUx0/UhvkM9ZF3CI/AAAAAAAAAjQ/Mo34C4balm8/s1600/youtube.png) no-repeatcenter center #e64a41;
    width: 147px;
    height: 69px
}

.metro-social .fd {
    background: url(http://3.bp.blogspot.com/-cCSDv3lC0X0/UhvkU9C9HiI/AAAAAAAAAjY/mGiP5hJsM-c/s1600/feed.png) no-repeat center center #e9a01c;
    width: 147px;
    height: 69px
}

.metro-social li:hover .fb {
    background: url(http://1.bp.blogspot.com/-BFbVTHudOlM/UhvkgeVoiqI/AAAAAAAAAjg/35axnVfIeS0/s1600/facebook1.png) no-repeatcenter center #1f69b3
}

.metro-social li:hover .tw {
    background: url(http://2.bp.blogspot.com/-saT_EfxJaJE/UhvkuFTXjJI/AAAAAAAAAjo/577uDpJQEbc/s1600/twitter-bird-dark-bgs1.png) no-repeat center center #43b3e5
}

.metro-social li:hover .gp {
    background: url(http://2.bp.blogspot.com/-v5Z8YpYN8_E/Uhvk4WeytEI/AAAAAAAAAjw/r2i0umcEW_s/s1600/google+plus1.png)no-repeat center center #da4a38
}

.metro-social li:hover .pi {
    background: url(http://3.bp.blogspot.com/-xOu6vPaWFQI/UhvlHFWtWYI/AAAAAAAAAkA/ZuLiaTQEgvc/s1600/pinterest1.png) no-repeatcenter center #d73532
}

.metro-social li:hover .in {
    background: url(http://1.bp.blogspot.com/-C2efDwlsVw8/UhvlPv0z7QI/AAAAAAAAAkI/7Ja7pe4oeXI/s1600/linkedin1.png) no-repeatcenter center #0097bd
}

.metro-social li:hover .yt {
    background: url(http://2.bp.blogspot.com/-a-WmFJ1piuc/UhvlXQDOOCI/AAAAAAAAAkQ/VWNkxrcP2PM/s1600/youtube1.png) no-repeatcenter center #e64a41
}

.metro-social li:hover .fd {
    background: url(http://2.bp.blogspot.com/-d_arcwBs6SM/UhvlgtDGGhI/AAAAAAAAAkY/J2th4re5ihc/s1600/feed1.png) no-repeatcenter center #e9a01c
}
```

{:start="2"}
2. Agora, instale o código HTML, onde os botões vão aparecer, entre as tags `<body>` e `</body>`.

```html
<div class="metro-social">
    <li>
        <a class="fb" href="http://www.facebook.com/" target="blank"></a>
    </li>
    <li>
        <a class="tw" href="http://twitter.com/" target="blank"></a>
    </li>
    <li>
        <a class="gp" href="https://plus.google.com/" target="blank"></a>
    </li>
    <li>
        <a class="pi" href="http://pinterest.com/" target="blank"></a>
    </li>
    <li>
        <a class="in" href="https://www.linkedin.com/" target="blank"></a>
    </li>
    <li>
        <a class="yt" href="http://www.youtube.com/" target="blank"></a>
    </li>
    <li>
        <a class="fd" href="http://feeds.feedburner.com/" target="blank"></a>
    </li>
</div>
```

## Alteração do código
Se você quiser remover o link com imagem (ícone) do YouTube você tem que remover as 3 funções do botão, veja o exemplo abaixo.

Na linha `.metro-social{width:300px}` o valor 300px define a largura do seu Gadget. Os valores na linha `width:147px; height:141px` define a altura e a largura dos ícones dos botões sociais.

## Remover link do YouTube:
```html
<li>
    <a class="yt" href="http://www.youtube.com/" target="blank"></a>
</li>
```

## Remover imagem 1 (ícone) do YouTube:
```css
.metro-social .yt {
    background: url (http: //2.bp.blogspot.com/-TrekCNcWUx0/UhvkM9ZF3CI/AAAAAAAAAjQ/Mo34C4balm8/s1600/youtube.png) no-repeat center center #e64a41;
    width: 147px;
    height: 69px
}
```

## Remover imagem 2 (ícone) do YouTube:
```css
.metro-social li:hover .yt {
    background: url (http: //2.bp.blogspot.com/-a-WmFJ1piuc/UhvlXQDOOCI/AAAAAAAAAkQ/VWNkxrcP2PM/s1600/youtube1.png) no-repeat center center #e64a41
}
```

O exemplo onde acabamos de mostrar, serve para você remover o link mais imagem do botão do YouTube, para remover outros botões você só tem que seguir o exemplo sitado acima.
