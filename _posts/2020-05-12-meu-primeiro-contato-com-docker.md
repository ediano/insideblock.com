---
layout: post
title: 'Meu primeiro contato com Docker'
description: >-
  Minha primeira experiência com Docker não foi das melhores, mas garanto que valeu muito o tempo para aprender esta tecnologia.
datePublished: '2020-05-12 07:00:00'
dateModified: '2020-05-12 07:00:00'
tags: [docker, jekyll, dev]
categories: [docker]
image: /meu-primeiro-contato-com-docker.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Meu primeiro contato com Docker foi um pouco forçado, na verdade foi devido a minha graduação em sistemas de informação que concluo em 2021, este aprendizado não foi iniciado devido a faculdade em si, foi devido a necessidade de ter várias aplicações para realizar pequenas atividade no decorrer de algumas disciplinas. Quando eu inicio uma nova fase da faculdade, o mais óbvio é que eu inicie novas disciplinas, e muitas dessas disciplinas não aproveitava certas configurações que eu tinha definido no sistema operacional, com isso eu ficava com um monte de aplicações e configurações que eu não usava mais no final de cada fase, foi aí que me surgiu a necessidade de aprender um pouco de Docker.

Mas onde isso me ajudou realmente? Bom, um exemplo disso foi a matéria de programação orientada a objeto com Java, sei que preciso de varias configurações e definições para compilar em Java, nada mais simples que ir ao Docker Hub, pega uma imagem do Java SDK, subir um container em minha máquina local, depois que finalizar a matéria remover o container e a imagem (opcional) e pronto, não preciso fazer mais nada, meu PC já está pronto para receber um nova aplicação construído a partir de imagens Docker.

É claro, isso não é tão simples como descrevi no parágrafo anterior, principalmente para que não é familiarizado com Linux, pois por padrão todas as imagens Docker é baseada em distros Linux, que no meu caso foi exatamente isso, eu não tinha nenhum contato com Linux até começa a usar Docker. Entretanto, depois de estudar um pouco sobre conteinerização de aplicações e vi suas vantagens, entre elas estão o uso de menos recursos computacional evitando criação VMs tradicionais, mais segurança e muito mais rapidez ao iniciar uma aplicação, sem contar que mesmo não fazendo parte de alguma matéria da faculdade até o momento, eu estou aprendo uma nova tecnologia que hoje é muito forte no mercado, apesar de ter citado apenas três das principais vantagens do Docker elas não são as únicas, podemos dizer que o uso dele nos dá infinitas vantagens.

Eu já contei para os nossos leitores em postagens anteriores que o Inside Block é construído com Jekyll, já mostrei também como [configurar um ambiente no Windows para desenvolver](https://insideblock.com/blog/instalando-o-jekyll-via-bash-no-windows-10/){:rel="noopener"}{:target="_blank"} com essa tecnologia, depois de familiarizar um pouco mais com Docker, deixei de usar todas aquelas configurações feitas diretamente no sistema operacional, hoje eu desenvolvo com Jekyll um pouco diferente, que funciona da seguinte maneira.

Com o Docker instalado no meu sistema operacional, fiz um pull de uma imagem oficial do Ruby, depois disso tiver que realizar algumas personalizações a partir da imagem oficia, acompanhe o arquivo `Dockerfile`.

```docker
FROM ruby:2.6-alpine

WORKDIR /app

RUN apk update \

    && apk add build-base git \
    && gem install bundler jekyll

EXPOSE 4000
```

Depois criei um arquivo `docker-compose.yml` com as seguintes configurações.

```yml
version: '3.7'

services:
   insideblock:
       build: .
       image: jekyll
       container_name: insideblock
       tty: true
       volumes:
           - "$PWD:/app"
       ports:
           - "4000:4000"
```

A partir deste instante eu tenho algumas vantagens excepcionais e até o momento não vi desvantagem, pois eu posso iniciar e parar minha aplicação Jekyll a qualquer momento, e em caso de erro com o container eu posso removê-lo facilmente e iniciar um novo em questões de segundos, sem contar que se você for um desenvolvedor que usar Jekyll, pode usar esses mesmos arquivos para construir seu projeto com muita facilidade.

## Conclusão

Eu espero que todos você tenha gostado deste post, não sou expert no assunto, ainda estou aprendo mais sobre Docker, mas qualquer dúvida que tiver não exite em perguntar é só deixar nos comentários.
