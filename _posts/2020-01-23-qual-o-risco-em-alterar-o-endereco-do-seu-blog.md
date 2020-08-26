---
layout: post
title: 'Qual o risco em alterar o endereço do seu blog'
description: >-
  Você já pensou em alterar o endereço do seu blog, acho melhor você pensar direito.
datePublished: '2020-01-23 07:00:00'
dateModified: '2020-01-23 07:00:00'
tags:
  - misc
  - seo
  - dev
  - js
  - otimização
category:
  - misc
image: /qual-o-risco-em-alterar-o-endereco-do-seu-blog.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Olá pessoal, hoje irei fazer um post com base nas dúvidas de usuários, que perdem muitas visitas depois de alterar o endereço do blog. Atualmente eu sou membro do Programa de Experts em Produtos do Google, e atuo diretamente no Fórum de Suporte Oficial do Blogger. De modo geral, este artigo não é voltado apenas aos usuários do Blogger, mas sim para todos que têm blogs e pretende por algum motivo alterar o endereço do mesmo.

## Como funciona uma URL
Primeiramente, você precisa saber para que e como funciona uma URL (domínio), vou tentar explicar da forma mais simples possível. Uma URL é como se fosse uma estrada, porém uma estrada pode te levar a vários locais diferentes, no caso da URL elas são únicas, uma vez que você entra nela, você sempre vai chegar no mesmo destino.

## Mecanismos de pesquisa
Os mecanismos de pesquisa é responsável por rastrear páginas disponível e acessível em toda a internet através dos domínios registrados. Depois de rastreado, o mecanismo disponibiliza as informações de modo que os usuário possa encontrar, os resultados pesquisando por termos, frases específicas, palavras-chave, URL, entre outros.

## Altera o endereço do blog
Quando você alterar o endereço/url de um blog ou qualquer página web, a URL antiga deixa de existir, isso ocorre porque duas URLs não pode ocupar o mesmo caminho naturalmente, assim como em uma estrada, não existe estradas dentro de estradas exceto quando levamos em consideração os cruzamentos, que no caso dos URL esses cruzamentos é chamada de redimensionamento.

De modo geral, um endereço deixou de existir, e um novo agora existe no lugar. Desse modo, os usuário não consegue identificar que o URL do seu blog mudou, a menos que você ou alguém informe a eles, assim também como nos mecanismo de pesquisa, os URLs antigos pode continuar aparecendo para os usuário por meses, até que eles comece a rastrear a nova URL do blog.

## Principais problemas
Os problemas causados pela alteração da URL são muitos, a primeira delas é a queda de visitas instantaneamente, a segunda é pelos erros 404, mas o que pode mais impactado na alteração da URL, são em relações aos artigos compartilhados em redes sociais e fóruns, esses endereços nunca mais vão funcionar para o usuário, impedindo de modo que o seu blog ou página ganha novas visitas a partir da nova url. Se o seu blog de algum modo gera receita, essas receitas também serão afetadas drasticamente.

Quando a URL de um blog é alterada, seu blog passa a ser considerado novamente como um novo blog, deste modo assim como no início do seu blog, esta nova URL terá que ganhar novamente a confiança dos mecanismo de pesquisas e dos leitores.

## Minimizando o problema
Apesar desse tipo de alteração, impactar de forma negativa os resultados de um blog, nem tudo está perdido, existem técnicas aplicadas por SEOs que pode minimizar os impactos causados pela alteração de uma URL, de início iremos apresentar duas dessas técnicas.

Primeira: Trabalhar com redirecionamento 301, o redirecionamento 301 permite que uma URL redireciona para outro URL, esse tipo de configuração pode ser aplicada dentro das configurações de DNS de um domínio personalizado, entretanto é necessário manter os dois domínios ativos (antigo e novo), para que este método funcione de forma adequada.

Segunda: O segundo método é muito usado caso o seu blog não tenho um domínio personalizado, sendo assim você irá precisar de dois blogs, o seu blog principal ativo funcionando com a nova URL, um segundo blog com a URL antiga para receber um script de redirecionamento. Observe o código abaixo faça as alterações necessárias e aplique ele dentro do blog com a URL antiga.

```js
<script type="text/javascript">
    var str = window.location.href;
    var str = str.replace("*/www.url-do-blog-antigo.com/*", "*/www.url-do-novo-blog.com/*");
    location.href = str;
</script>
```

Depois de aplicar o código, o redirecionamento é para funcionar de forma automática, quando os usuários acessar o blog pela URL antiga eles serão redirecionado para o novo endereço.

## Conclusão
Apesar desses tipo de técnicas serem usadas por SEOs, o uso dela deve ser feito apenas quando necessário e sem muitos ocorrências, pois alguns mecanismos de pesquisa como o Google, pode punir o seu novo endereço do blog, caso seja identificado redirecionamentos de forma exagerada e sem as definições corretas. 

Eu espero que todos vocês tenham entendido e gostado deste artigo qualquer dúvida é só deixar nos comentários, não esqueça de compartilhar nas redes sociais com seus amigos.
