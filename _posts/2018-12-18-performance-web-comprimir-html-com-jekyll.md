---
layout: post
title: 'Performance web: Comprimir HTML com Jekyll'
description: Compile o código fonte de seu site e trabalhe a favor da performance web.
datePublished: '2018-12-18 10:00:00'
tags:
  - performance web
  - html
  - dev
  - css
category: jekyll
image: /performance-web-comprimir-html-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
coauthor: Danielli Carvalho
comments: true
ads: true
---
Olá pessoal, nossos posts começaram a chegar, espero que continuem assim, fiquei quase um ano sem fazer nenhuma publicação. Agora vamos ao que interessa.

Se você chegou a este artigo, com certeza é um amante de Jekyll assim como eu, ou pretende desenvolver algum tipo de projeto com a aplicação do mesmo. São poucos os serviços web preparados para realizar a compilação do código fonte de um site. A compilação pode ser realizada por diversas ferramentas, no presente artigo vamos falar sobre uma aplicação que pode ser facilmente usada em site estaticos com Jekyll.

A soluções é bem simples de aplicar, no entanto para que tudo ocorra como esperado é necessário observar se o repositório do Jekyll está usando à versão anterior a 3.0, se estiver sugiro que seja feito um update. 

Primeiro passo dentro de seu arquivo **_config.yml**, adicione as seguintes linhas.

```yml
# Compress HTML
compress_html:
  clippings: all
  comments: all
  endings: []
  profile: false
```

Note que as linhas fazem menção à compressão HTML, todavia depois de pronta a aplicação pode compilar quase todos os tipo linguagem, incluído CSS e JS. 

Posteriormente, para parametrizar todas as regras de compilação vamos criar um novo arquivo, dentro do diretório **_layouts**, com o nome **compress.html**, em seguida acesse <a href="https://raw.githubusercontent.com/ediano/my-testing-lab/master/code/jekyll/compress-html/compress.html" target="_blank" rel="nofollow noopener noreferrer">esta página</a>, adicione todas as linhas de código da página dentro do novo arquivo.

Créditos para <a href="http://jch.penibelst.de/" target="_blank" rel="nofollow noopener noreferrer">jch.penibelst.de</a>.

Para concluir a aplicação, ainda dentro do diretório **_layouts**, você deve atribuir o `Front Matter` no arquivo **default.html** para apontar para o nosso arquivo **compress.html**.

```md
---
layout: compress
---
```

Podemos observar que o apontamento feito através do `Front Matter` é bem simples, entretanto, é importante levar em consideração  que todos os arquivo que estiverem atribuídos ao **default.html**, através do `Front Matter`, serão automaticamente compilados, caso existam  arquivos que não estejam atribuídos e você deseja compila-los é só adicionar o `Front Matter` apontando diretamente para **compress.html**.

**Dica:** Para evitar possíveis frustrações, sugiro que sejam feitos testes com o servidor local antes de subir o update para repositório em produção.

Concluindo, espero que tenham gostado do post, como citei as aplicações são simples, caso surjam dúvidas deixe-as nos comentários e não esqueçam de compartilhar nas redes sociais.
