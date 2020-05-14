---
layout: post
title: 'Processamento de condicional com Jekyll'
description: >-
  Saiba como criar condições de variáveis com Jekyll (if, elsif ou else).
datePublished: '2020-01-21 21:00:00'
dateModified: '2020-01-21 21:00:00'
tags:
  - jekyll
  - seo
  - dev
category:
  - jekyll
image: /processamento-de-condicional-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Desde a migração do Inside Block, o assunto sobre Jekyll não parou de crescer, hoje iremos aprender mais um pouco sobre o gerador de sites estáticos. Os processamentos de condições do Jekyll é bem simples, elas podem ser manipuladas e classificadas pelas suas próprias variáveis globais (reservadas) ou definida pelo próprio desenvolvedor.

Para entender melhor como funciona esse processamento, iremos usar como exemplos o método aplicados aqui no Inside Block, para organizar nossos arquivos .CSS individualmente por página.

Veja as condições a seguir, não se preocupe com os detalhes, nós iremos te explicar cada uma das linha de código. A lógica global que seguimos foi a seguinte, criamos um arquivos .CSS “default.css” que é usado em todas as páginas, criamos outro chamamo “post.css” que vai ser carregado apenas quando uma postagem for aberta, criamos outro chamado “page.css” destinados as páginas de contato, categorias, tags e outros, e criamos um outro arquivo chamado “home.css”. Usar este tipo de método foi necessário porque sabemos que quanto menos CSS tiver em uma página mais rápido ela carrega.

Então criamos as seguintes condições, exceto para o arquivo “default.css”, pois sabemos que ele deve ser carregado em todas as páginas do blog.

OBS: Para iniciarmos uma condição no Jekyll é inserido {% raw %}`{% if tipo.variavel %}`{% endraw %}, lembrando que as condicionais são aplicadas com base nas variáveis inseridas no “liquid template” da página.

Primeira condição: Se na página tiver a variável “layout: post”, então insira o CSS de “css/post.css”. 

{% raw %}
```html
<!-- Arquivo Default -->
<link href="css/default.css" rel="stylesheet">

<!-- Início das Condicionais -->
{% if page.layout == "post" %}
<link href="css/post.css" rel="stylesheet">
{% endif %}
```
{% endraw %}

A primeira condição “{% raw %}`{% if page.layout == "post" %}`{% endraw %}”, permite que toda vez que for acessada uma página do tipo post, o navegador irá carregar o CSS específico “post.css”.

Mas então, agora como seria se o usuário acessar a página de contato do blog, bom de certa forma o modelo CSS não seria aplicado, pois ainda não criamos a condição de “page”.

Neste caso a Segunda condição, pode ser resolvida com {% raw %}`{% else %}`{% endraw %}, veja o exemplo.

{% raw %}
```html
{% else %}
<link href="css/page.css" rel="stylesheet">
```
{% endraw %}

Veja como fica o código montado com as duas condições.

{% raw %}
```html
<!-- Arquivo Default -->
<link href="css/default.css" rel="stylesheet">

<!-- Inicio das Condicionais -->
{% if page.layout == "post" %}
<link href="css/post.css" rel="stylesheet">
   {% else %}
   <link href="css/page.css" rel="stylesheet">
{% endif %}
```
{% endraw %}

Note que acrescentamos um “{% raw %}`{% else %}`{% endraw %}”, nesta situação ele está fazendo o que? Se, não existir a variável “{% raw %}`{% if page.layout == "post" %}`{% endraw %}” dentro de uma página, então escreva o que estiver depois de “{% raw %}`{% else %}`{% endraw %}”.

Entretanto existe uma terceira condição, onde ficaria o CSS da página home? Bom para isso também existe um solução no Jekyll, porém com um pouco mais de detalhes, observe.

{% raw %}
```html
<!-- Arquivo Default -->
<link href="css/default.css" rel="stylesheet">

<!-- Início das Condicionais -->
{% if page.layout == "post" %}
<link href="css/post.css" rel="stylesheet">
   {% elsif page.layout == "page" %}
   <link href="css/page.css" rel="stylesheet">
       {% else %}
       <link href="css/home.css" rel="stylesheet">
{% endif %}
```
{% endraw %}

Você não entendeu? Não se preocupe, vamos explicar o código, então vamos começar do início em {% raw %}`{% if...`{% endraw %}, a primeira condição ela está passando a seguinte situação, se existir um “layout igual a post”, então leia o arquivo “post.css”, determinada pela condição {% raw %}`{% if page.layout == "post" %}`{% endraw %}; ou se então não existir o “layout igual a post” então leia “page.css” determinada pela condição {% raw %}`{% elsif page.layout == "page" %}`{% endraw %}; se não existir nenhuma e nem outra então leia “home.css” determinada pela condição {% raw %}`{% else %}`{% endraw %}.

Porém existe uma outra situação que pode acontecer em casos específicos, como layout do Inside Block usa o mesmo código CSS “page.css” para modelar a página de categorias, então temos que criar mais uma pequena regra, veja o resultado.

{% raw %}
```html
<!-- Arquivo Default -->
<link href="css/default.css" rel="stylesheet">

<!-- Início das Condicionais -->
{% if page.layout == "post" %}
<link href="css/post.css" rel="stylesheet">
   {% elsif page.layout == "page" or page.layout == "category" %}
   <link href="css/page.css" rel="stylesheet">
       {% else %}
       <link href="css/home.css" rel="stylesheet">
{% endif %}
```
{% endraw %}

A única alteração que fizemos foi adicionar a condição do tipo `or` para as categorias para ler o mesmo arquivo “page.css”.

{% raw %}`{% elsif page.layout == "page" or page.layout == "category" %}`{% endraw %}

Para saber mais sobre os operações, [acesse o site oficial](https://shopify.github.io/liquid/basics/operators/){:rel="nofollow noopener noreferrer"}{:target="_blank"}.

## Conclusão
Bom, por enquanto foi isso, espero que tenham entendido o que foi passado aqui, qualquer dúvida é só deixar nos comentários, se você gostou do artigo não esqueça de compartilhar nas redes sociais.