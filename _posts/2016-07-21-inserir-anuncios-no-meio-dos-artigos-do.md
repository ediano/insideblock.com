---
layout: post
title: Inserir anúncios no meio dos artigos do Blogger
datePublished: "2016-07-21 17:59:00"
tags: [dicas, blogger, monetização]
category: misc
image: /inserir-anuncios-no-meio-dos-artigos-do.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

O posicionamento dos anúncios é mesmo muito importante para o rendimento do seu blog, entretanto escolher e colocar os anúncios em locais específicos pode ser um pouco difícil. Para que isso fique mais fácil temos alguns códigos para o templete do Blogger.

Lembrando antes de qualquer alteração recomendamos que faça o backup do templete original.

Todos os códigos abaixo foram testados e aprovado por nos, portanto se você tem um templete personalizado, pode ser que você não encontre o código que deve ser alterado.

## Formatos de anúncios
Colocar dois anúncios lado a lado

```html
<b:if cond="data:blog.pageType == &quot;item&quot;">
    <div align="center" style="padding:10px">
        <td> Código do Anúncio 1 Aqui! </td>
        <td> Código do Anúncio 2 Aqui! </td>
    </div>
</b:if>
```

Colocar um anúncios do lado esquerdo

```html
<b:if cond="data:blog.pageType == &quot;item&quot;">
    <div style="float:left;padding-right:10px">
        Código do Anúncio Aqui!
    </div>
</b:if>
```

Para que o anuncio fique centralizado abaixo do título altere o código

```html
<div style="float:left;padding-right:10px">
```

por

```html
<div style="float:center;padding:10px">
```

Colocar um anuncio do lado direito

```html
<b:if cond="data:blog.pageType == &quot;item&quot;">
    <div style="float:right;padding-left:10px">
        Código do Anúncio Aqui!
    </div>
</b:if>
```

Para que o anuncio fique centralizado abaixo do título altere o código

```html
<div style="float:right;padding-left:10px">
```

por

```html
<div style="float:center;padding:10px">
```

Anúncios abaixo do título do artigo - Procure por *<div class="post-header-line-1"/>* e logo baixo cole um dos código que você desejar abaixo dele.

Anuncio no fim do artigo - Procure por *<div class="post-footer">* e cole o código que você desejar abaixo dele.

## Anuncio no meio do artigo
Procure por `<data:post.body/>` e substitua pelo código abaixo.

```html
<b:if cond="data:blog.pageType == &quot;item&quot;">
    <div expr:id="&quot;add-ads&quot; + data:post.id" />
    <div style="clear:both; margin:10px 0">
        Código do Anúncio Aqui!
    </div>
    <div expr:id="&quot;texto&quot; + data:post.id"><data:post.body/></div>
    <script type="text/javascript">
        var objAdd - Ads = document.getElementById( & quot; add - ads < data: post.id / > & quot;);
        var objTexto = document.getElementById( & quot; texto < data: post.id / > & quot;);
        var objConteudo = document.getElementById( & quot; conteudo < data: post.id / > & quot;);
        var s = objTexto.innerHTML;
        var r = s.search(/\x3C!-- add-ads --\x3E/igm);
        if (r & lt; = 0) {
            s += & quot;\
            x3C!--add - ads--\x3E & quot;
            r = s.search(/\x3C!-- add-ads --\x3E/igm);
        }
        objAnuncio.innerHTML = s.substr(0, r);
        objTexto.innerHTML = s.substr(r + 16);
    </script>
    <b:else/>
    <data:post.body/>
</b:if>
```

Salve o templante. A partir de agora, todas as suas postagens passarão a exibir o anúncio automaticamente no final dos artigos.

Ao escrever uma nova postagem, entre no modo de edição HTML e insira o código `<!-- add-ads -->` onde você desejar que seja exibido o anúncio.

Agora fica de sua opção de qual dos códigos e formatos de anúncios usar. Caso tenha alguma duvida deixe um comentário.