---
layout: post
title: 'Postagens relacionadas com Jekyll'
description: >-
  Tudo é possível com o Jekyll, ainda mais para quem sabe procurar bem.
datePublished: '2020-01-20 07:00:00'
dateModified: '2020-01-20 07:00:00'
tags:
  - jekyll
  - seo
  - dev
category:
  - jekyll
image: /postagens-relacionadas-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Olá pessoal, hoje temos mais uma artigo sobre jekyll, mais precisamente iremos mostrar como colocar artigos relacionados em nosso blog filtrando pelas categorias ou tags dos artigos.

Este método é tão simples que nem precisamos instalar novos plugins no repositório. Como sempre para manter os codigo do nosso blog organizado, dentro do diretório **_include** crie um novo arquivo com o nome **related.html**, agora use o código dentro do novo arquivo.

{% raw %}
```html
<section class="related">
   <div class="related-post">
       <h4>Posts relacionados</h4>
       {% assign maxRelatedCounter  = 0 %}
       <ul>
       {% for post in site.posts %}
           {% if post.url != page.url %}
               {% if post.category == page.category %}
                   <li>
                       <a href="{{ post.url }}">
                           {{ post.title }}
                       </a>
                   </li>
                   {% assign maxRelatedCounter  = maxRelatedCounter | plus: 1 %}
                   {% if maxRelatedCounter == 6 %}
                       {% break %}
                   {% endif %}
               {% endif %}
           {% endif %}
       {% endfor %}
       </ul>
   </div>
</section>
```
{% endraw %}

Note que aqui estamos fazendo uso das categorias para relacionar nossas postagens, caso você queira deixar as postagens relacionadas como o uso de tags, substitua `category` por `tags`, como no exemplo a seguir.

{% raw %}
```liquid
{% if post.tags == page.tags %}
```
{% endraw %}

Você também pode limitar a quantidade máxima de links relacionar que será exibido dentro do post, tudo o que tem a fazer é substituir o número 6 pelo desejado.

{% raw %}
```liquid
{% if maxRelatedCounter == 8 %}
```
{% endraw %}

Agora temos que chamar o nosso arquivo related.html para começar exibir os links das postagens relacionadas, dentro do diretório **_layouts**, no arquivo **post.html**, inicie um novo include como no exemplo.

{% raw %}
```liquid
{% include related.html %}
```
{% endraw %}

Pronto, agora já é possível ver os link relacionado ao abrir um artigo. Repare que os artigos não são exibidos mais que a quantidade máxima determina, porém pode ser exibido menos, isso acontece porque se uma categoria tiver 5 posts, e você determinou que é para mostrar no máximo 6, a categoria do post atual não vai pode relacionar mais artigo, isso não é um bug e sim uma limitação muito lógica.

Já que está tudo andando como o esperado, vamos aplicar um pouquinho de CSS, para deixar os links um pouco mais elegantes. Aplique o CSS dentro da folha de estilo, e deixe a magia acontecer. 

```css
@media only screen and (min-width: 601px) {
   section.related ul {
       column-count: 2
   }
}

section.related {
   position: relative;
   width: 100%;
   background: #fff;
   padding: 25px 0
}

section.related .related-post {
   width: 90%;
   max-width: 800px;
   margin: 0 auto
}

section.related h4 {
   color: #797979;
   font-size: 1.5rem
}

section.related ul li {
   padding: 5px 10px;
   margin-bottom: 15px;
   border-left: 3px solid transparent
}

section.related ul li:hover {
   border-left: 3px solid #2da0c3
}

section.related ul a {
   color: #2da0c3;
   display: block
}
```

## Conclusão
Bom pessoal, por enquanto é só isso, eu espero que você tenham gostado, quaisquer dúvidas que vocês tiverem é só deixar nos comentários que eu irei responder. Ah, não esqueçam de compartilhar nas redes social, um forte abraço.
