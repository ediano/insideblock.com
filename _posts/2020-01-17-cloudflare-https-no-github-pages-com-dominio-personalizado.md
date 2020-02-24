---
layout: post
title: 'CloudFlare: HTTPS no Github Pages com domínio personalizado'
description: >-
  Garantir a segurança e a privacidade de nossos leitores é fundamental, o protocolo HTTPS é a aplicação mais usada em páginas web. Este tipo de serviços geralmente são muitos caros quando contratados por grandes empresas, felizmente a CloudFlare disponibilizou um serviços gratuitos para seus usuários.
datePublished: '2020-01-17 12:00:00'
dateModified: '2020-01-17 12:00:00'
tags:
  - dev
  - seo
  - dicas
category: dev
image: /cloudflare-https-no-github-pages-com-dominio-personalizado.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Em 2016 o GitHub Pages anunciou a liberação do protocolo HTTPS para blog que usam .github.io; infelizmente para os desenvolvedores que usam “custom domains” em suas páginas a novidade ainda ~~não está disponível~~. Entretanto é possível fazermos a aplicação do HTTPS usando um serviços secundário.

O CloudFlare oferece alguns serviços gratuitos e com está incluso o protocolo HTTPS. De acordo com a empresa o serviço gratuito é compartilhado entre vários usuários, porém a navegação do site ainda se torna muito mais rápido que usar o protocolo de autenticação padrão HTTP.

Fique atento, durante o procedimento o seu blog pode ficar fora do ar por alguns instantes, pois leva tempo para que o novo apontamento DNS se propague pela internet.

## Adicionando o primeiro site
Para iniciar a aplicação em seu site, primeiro crie uma conta no CloudFlare, caso já tenha uma conta faça login. Agora adicione um site para fazer o scanner dos apontamentos de DNS do domínio.

## DNS
Após a conclusão do scanner, certifique que todos os registro DNS estejam corretos, e que os mesmo esteja passando por dentro da nuvem.

## Free  Website
Depois de verificar todos os DNS, selecione a o plano “**Free Website**”, e prossiga com as configurações.

## Servidores de nome
Estamos quase concluindo, agora o procedimento é um pouco mais complicado, para executá-lo vamos precisar acessar o Painel de configurações de DNS, onde seu domínio foi registrado.

Em configurações de DNS, procure por “**Servidores de nome**” ou algo parecido, e substitua todos os endereços do servidor padrão pelo endereço que o CloudFlare te indicou, ao concluir as alterações clique em continuar.

## Crypto
Agora vamos definir o tipo de criptografia que iremos usar, na guia “**Crypto**” na seção “**SSL**”, selecione o opção “**Flexible**”, assim podemos garantir a entrega do protocolo HTTPS para todos os usuários.

## Page Rule
Sugerimos que aguarde de 10 a 15 minutos para prosseguirmos com o próximo passo. Caso você já tenha esperado por este intervalo, acesse a guia “**Page Rule**” para definirmos as regras das páginas, agora clique em “**Buy More Page Rules**” adicione o endereço do seu site.

Repare que na imagem existe uma opção chamada “**Always Use HTTPS**” selecionada, caso você tenha sido um pouco apressado e não esperou o tempo como indicamos, a opção ainda não vai está disponível, só depois de algum tempo ela vai começar aparecer, neste caso é só aguardar mais um pouco.

## Conclusão
O update do GitHub Pages ajudou e ajuda muitos desenvolvedores, garantindo ainda mais a segurança e a privacidade de seus usuários. Eu fiquei um pouco triste porque a aplicação não tem suporte para “custom domains”, felizmentes com um pouco de conhecimento e pesquisa conseguimos ótimos resultados.

Bom pessoal, por enquanto foi isso, eu espero que você tenham gostado no nosso artigo, na dúvida deixe nos comentários.
