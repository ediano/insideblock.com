---
layout: post
title: Como hospedar arquivos css e js no GitHub
datePublished: "2016-09-13 19:24:00"
tags: [dev, git, github]
categories: [dev]
image: /como-hospedar-arquivos-css-e-js-no-github.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

O GitHub é um tipo de <a href="https://www.insideblock.com/blog/github-rede-social-dos-programadores.html">rede social para programadores</a>, que permitir que os usuários desenvolvam seus códigos e hospedado no mesmo. Outra função interessante é a possibilidade de hospedar seu website e executá-lo diretamente de dentro dele 100% free, sem a necessidade de um servidor ou de pagar um serviço de hospedagem.

Neste artigos vamos lhe ensinar a hospedar arquivos *css e *js, que possa ser executado de dentro do GitHub para o seu site como incorporação de layout.

Antes de iniciarmos é necessário que você tenha uma conta no GitHub, ao criar à conta automaticamente é criado uma organização com o nome de usuário que você escolheu.

## Criar repositório
Crie um novo repositório com no seguinte exemplo “*name-repository.github.io*” sem aspas, a parte “*name-repository*” deve ser substitua pelo nome de sua preferenciar, marque a opção “Initialize this repository with a README” clique em “*Create repository*”. Pronto seu repositório já está criado.

## Gerando o link da página
Acesse as configurações do repositório em “*Settings*”, role a página até chegar em “*GitHub Pages*” e altere a opção “*None*” para “*master branch*” clique em “*Save*”, veja que um link vai ser gerado de acordo com nome da organização e o nome do repositório - exemplo: *`https://name-organization.github.io/name-repository/`*.

## Criar arquivo / Enviar arquivo
Volte para a guia “*Code*” escolha entre criar um novo arquivo (*Create new file*) ou enviar arquivos (*Upload files*). Detalhe se você optar por criar um novo arquivo não esqueça de adicionar a extensão do mesmo tipo “*name-file.ccs*” ou “*name-file.js*”.

## Acessando link de incorporação
Acesse o link que foi criado para sua organização e repositório anteriormente, do tipo "*`https://name-organization.github.io/name-repository/`*", agora acrescente o nome do arquivo seguido da extensão na frente do link como neste exemplo “*`https://name-organization.github.io/name-repository/`name-file.css*”, caso você cria uma pastas para colocar o arquivo dentro da mesma o link já vai ficar assim “*`https://name-organization.github.io/name-repository/`name-pasta*/name-file.css”. Pronto seu arquivo já está disponível e acessível para você lincar no seu site.

Você pode hospedar quantos arquivos quiser, modificá-los sem perder o link original desde que você não renomeie o arquivos e ou a pasta. Você também pode usar a aplicativos do GitHub para sincronizar e gerenciar os arquivos diretamente de seu computador.
