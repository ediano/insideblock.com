---
layout: post
title: Caixa de pesquisa personalizado para blogger
date: "2016-07-21 17:18:00"
tags: [front-end, seo, blogger]
category: dev
image: /assets/media-image/caixa-de-pesquisa-personalizado-para.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

A caixa de pesquisa ( ou caixa de busca) é um dos recursos mais importantes em um blog. É através dela que o leitor irá procurar por outros posts mais antigos e de maior interesse dele. É muito útil também para o dono do blog encontrar seus próprios artigos e tornando mais fácil a navegação em seu blog ou site.

Neste artigo iremos trabalar apenas com códigos CSS e HTML, desta formar 

1. Adicone o CSS dentro da folha de estilo do site.

```css
#box {
    background: #eee;
    padding: 15px;
    border: 1px solid;
    width: 100%;
}

#btn-box {
    border: 1px solid #222;
    color: #eee;
    background: url(http://i.imgur.com/cz4sguf.png) no-repeat left #4591fa;
    margin-left: -3px;
    color: #fff;
    padding: 15px 15px 15px 22px;
    border: 0 none;
    font-weight: bold;
    border-radius: 7px;
}

#btn-box:hover {
    cursor: pointer;
    background: url(http://i.imgur.com/cz4sguf.png) no-repeat left #2375E6;
}
```

{:start="2"}
2. Agora instale o HTML entre as tags `<body>` e `</body>`.

```html
<form action="/search" method="get" style="display: inline;">
    <input id="box" name="q" placeholder="O que está procurando?" size="50" type="text" />
    <input id="btn-box" type="submit" value="Pesquisar" />
</form>
```

Despois de instalar todos os códigos, você pode personalizar a caixa de pesquisa, agora vamos enternder como funciona.

**width: 100%**: Se você preferir, a largura da caixa de pesquisa pode ser alterada facilmente, substitua a valor `100%` para o tamanho desejado, como no exemplo `250px` ou `50%`.

**placeholder**: Você também pode alterar a mensagem da chamada da caixa de pesquisa, para fazer isso bastar alterar `O que está procurando?` para a mensagem desejada.

Bom, por enquanto é isso, espero que você tenha gostado.

