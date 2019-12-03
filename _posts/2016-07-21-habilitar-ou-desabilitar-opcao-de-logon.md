---
layout: post
title: Habilitar ou desabilitar opção de logon (Ctrl-Alt-Delete)
datePublished: "2016-07-21 18:42:00"
tags: [windows, dicas]
category: misc
image: /static/blog/habilitar-ou-desabilitar-opcao-de-logon/habilitar-ou-desabilitar-opcao-de-logon.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

O tela segura de logon do Windows, geralmente fica disponível para usuários que estão dentro de rede corporativa, controlado por um servidor de AD, em casos raros esta tela também pode ser exibida para usuários de computadores comuns, causando um certo desconforto para o usuário, obrigando a pressionar as teclas Ctrl-Alt-Del toda vez que ele ligar o computador ou quando ele ativar a tela de bloqueio.

Para que você não tenha mais esse desconforto, siga o tutorial abaixo; Detalhe para os usuários de AD, não é possível desativar esta opção em seu computador, pois o mesmo é controlado por um servidor remotamente.

## Primeiro método
1. Pressione a tecla *Windows+R* digite *netplwiz* e pressione Enter”

2. Clique em Avançado, desmarque a opção “Exibir que os usuários pressionem Ctrl-Alt-Delete”.

3. Reinicie o Windows, caso continue pedindo Ctrl-Alt-Delete na tela de logon, siga para o próximo método.

<figure class="image">
<img alt="Contas de usuário" src="/static/blog/habilitar-ou-desabilitar-opcao-de-logon/contas-de-usuario.jpg">
<figcaption>Contas de usuário. (Imagem: Inside Block)</figcaption>
</figure>

## Segundo método
1. Pressione a tecla *Windows+R* digite *secpol.msc* sem aspas e pressione Enter.

2. Navegue para *Politicas locais\Opções de segurança*; De um clique duplo em “*Logon interativo: não exigir Ctrl-Alt-Del*”.

3. Marque a opção *Desabilitado*, *Aplique* e em *OK*.

<figure class="image">
<img alt="Politicas de segurança local" src="/static/blog/habilitar-ou-desabilitar-opcao-de-logon/politicas-de-seguranca.jpg">
<figcaption>Politicas de segurança local. (Imagem: Inside Block)</figcaption>
</figure>

Espero ter ajudado como esta informações, caso tenha alguma outra duvida deixe um comentários.