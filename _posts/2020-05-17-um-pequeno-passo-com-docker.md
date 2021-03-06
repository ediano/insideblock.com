---
layout: post
title: 'Um pequeno passo com Docker'
description: >-
  Você não conhece Docker, para com isso, vamos entender um pouco como ele funciona.
datePublished: '2020-05-17 07:00:00'
dateModified: '2020-05-17 07:00:00'
tags: [docker, dev]
categories: [docker]
image: /um-pequeno-passo-com-docker.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Apesar do título fazer uma breve chamada para a famosa frase (um pequeno passo para o homem mas um grande salto para a humanidade), este artigo não tem nada a ver com viagens à lua, pelo contrário, vamos fazer com que lua venha até nós. E para que isso aconteça, vou tentar ser bem simples, esclarecendo de uma vez por todas como o Docker funciona, e para que também seja possível, vou deixar as palavras técnica, difíceis de ser compreendidas um pouco de lado, para que qualquer leitor consegue compreender a principal proposta deste software de conteinerização.

## Proposta
Bom, o Docker é um software de gerenciamento de containers, mas o que isso significa? Imagine que em um ambiente de produção, você precisa manter vários serviços isolados de forma que nenhum dependa do outro, dessa forma considerando o ambiente de desenvolvimento tradicional, você precisaria construir várias máquina virtual para cada um desses serviços, na prática esse tipo de conceito hoje traz grande desvantagem, isso porque máquinas virtuais tradicionais, são bem reconhecidas por consumir muitos recursos computacionais.

Para corrigir esse tipo de problema surgiu o Docker, um software que faz gerenciamento de container, que podemos definir como mini máquina virtual, porém muito potente e eficiente, que requer baixo consumo computacional, além de garantir uma maior segurança e instabilidade por manter cada um dos seus serviços isolado sem dependências um do outro.

Leia também: [Meu primeiro contato com Docker](https://insideblock.com/blog/meu-primeiro-contato-com-docker/){:rel="noopener"}{:target="_blank"}

## Imagem
Para um iniciante conseguir entender imagens Docker pode ser um pouco confuso. Para simplificar o entendimento de imagens vamos usar como exemplo um arquivo .ISO, suponhamos que você tenha um arquivo de instalação do Windows, MacOS ou uma distribuição Linux, não importante, esse arquivo em vez de chamar o de ISO iremos chamá-las de imagem, isso porque todas as imagens do Docker é a base de um container.

Para simplificar de forma direta, imagine que você seja um usuário do Windows e use o pacote Office por exemplo, toda vez que você formatar seu computador você tem o hábito de instalar o pacote Office, para poupar tempo você constrói uma ISO do Windows com pacote Office pré-instalado, dessa forma, toda vez que você usar esta ISO para formatar o computador, o pacote Office virar por padrão instalado no sistema. Contextualizando a partir deste conceito, podemos definir esta ISO como uma imagem Docker, que é uma pré-configuração de um sistema que será executado a partir de um container.

Podemos ainda dizer que a partir do momento que uma imagem é construída, ela não poderá ser mudada, apesar disso não fazer muito sentido, para redefinir as configurações de uma imagem já existe, você deverá criar uma nova a partir daquele ponto já definido.

## Container
O conceito de container pode ser o mais complicado para se entender, pois ele é facilmente confundido com as imagens, na prática e na teoria, um contêiner só pode ser construído e inicializando a partir de uma imagem, entretanto, diferente das imagens, containers podem ser modificado durante o seu ciclo de construção e execução.

Containers nasceu com a ideia de iniciar serviços. Imagine que você tenha um site com NGINX e MySQL, podemos dizer que esse site precisa de dois serviços para se manter em execução, desta forma será necessário que dois container seja construídos a partir de duas imagens, cada um com seu respectivo serviço (um com NGINX e outro com MySQL).

Dessa forma você pode executar os dois container simultaneamente, como também pode executar um de cada vez isoladamente. Mas é claro, como usamos o exemplo de um site que dependa de um servidor MySQL, o ideal aqui seria que os dois containers seja iniciados ao mesmo tempo, para garantir que a aplicação web consiga acessar os dados armazenados no banco.

## Conclusão
Bom, eu espero que todos vocês tenham compreendido a proposta principal do Docker, apesar dele ser o único citado neste artigo, ele não é o único software de conteinerização disponível atualmente.

Explore novas opções, novas tecnologias, procure entender no mínimo o básico de como elas funcionam.
