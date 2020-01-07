---
layout: post
title: Desativar links automáticos do Markdown com Jekyll
description: >-
  Criar link no markdown é muito simples, desativar os links automáticos é mais
  fácil ainda.
datePublished: '2019-02-06 18:20:00'
dateModified: '2020-01-07 07:45:49'
tags:
  - markdown
  - html
  - js
  - disqus
  - jekyll
category: dev
image: /assets/blog/desativar-links-automaticos-do-markdown-com-jekyll.jpg
image_source: Dillinger
author: Ediano Silva Santos
coauthor: Luciana Fabiano
comments: true
ads: true
---

O Inside Block passou por uma grande migração em 2018, e logo de primeira encontramos um problema ao reescrever alguns de nossos artigos. A questão é que alguns de nossos artigos têm links em forma de texto não clicáveis, entretanto, como passamos a usar arquivos **.md** para escrever nossos posts, esse tipo de arquivo transforma link textos não clicáveis em autolinks ativos. Bom, era isso que eu pensava, até descobrir que o problema não estava ligado aos arquivos .md, muito menos ao gerador de sites estáticos (Jekyll).

Felizmente depois de quase um ano encontrei uma solução, o mais interessante disso tudo é que ela não funciona apenas nos arquivos .md ou em sites estáticos gerados com o Jekyll. De acordo com a *kramdown*, para gerar um autolink através dos arquivos .md, precisamos inserir o mesmo entre os sinais de menor e maior `<link_da_pagina_aqui>`, neste caso o arquivo .md junto com o gerador de sites estático não é capaz de ativar os links de texto em links ativos automaticamente.

## Causador do problema
O problema é causado pelos comentários do **Disqus**. Eu sei que é difícil acreditar, mas se você tiver dúvidas pode fazer um teste: remova a caixa de comentários de uma página por alguns instantes e realize o teste.

O que acontece é que o Disqus tem uma parceria com uma empresa chamada **VigLink**, na qual a principal função dela é gerar autolinks ativos a partir de links em formato de texto não clicável, com a intenção de gerar receita através dos anúncios que são ativados por esses links.

## Solução
Quando eu descobri isso, fiquei frustrado, pois apesar de todas as tentativas de resolver o problema só me restava duas opções: a) deixar os autolinks serem gerados automaticamente, ou b) remover os comentários do Disqus. Entretanto, nenhuma das duas opções era estrategicamente viável para o Inside Block.

Foi aí que surgiu a ideia, criar uma conta no VigLink, copiar o código fonte que gera os autolinks, entender como funciona o código, remover partes dispensáveis, e usar somente o necessário para desativar o autolink. Bom, esta parte foi mais simples do que imaginei, em poucos minutos eu já tinha uma solução, e o código representado abaixo é o necessário para desativar o autolink.

```html
<script type="text/javascript">
   var vglnk = {key: ""};
</script>
<!-- Comments Disqus -->
```

O código deve ser adicionado acima da caixa do comentário do Disqus, depois de aplicado você não vai precisar fazer mais “gambiarras” do tipo.

```
http://www<span></span>.example.com/
```

## Conclusão
Bom senhores(as), só por desencargo de consciência, não sei dizer se essa prática é contra as regras do Disqus, entretanto, esta foi a solução mais viável que encontrei no momento.

Eu espero ter ajudado todos vocês, por enquanto é só isso, não esqueçam de deixar um comentário sobre o assunto ou compartilhar nas redes sociais.
