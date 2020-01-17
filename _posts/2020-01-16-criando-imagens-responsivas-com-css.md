---
layout: post
title: 'Criando imagens responsivas com CSS'
description: >-
  Você já deve ter notado que não é tão simples criar imagens responsivas, conheça um pouco sobre as técnicas que usamos em nosso blog.
datePublished: '2020-01-16 18:00:00'
dateModified: '2020-01-16 18:00:00'
tags:
  - css
  - dev
  - dicas
category: css
image: /assets/blog/criando-imagens-responsivas-com-css.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Olá pessoa, certamente você já deve ter tentado por diversas vezes criar imagens que se adapta ao layout do blog. Mas veja bem, se as imagens têm valor fixo, como é possível criar um redimensionamento automático?

Bom, uma imagem pode ser facilmente redimensionada com o CSS, não importa se ela tem 50px ou 400px, se eu declarar na folha de estilo que a imagem vai ter mais de 50px ou mais 400px, ela com certeza vai seguir a regra do valor declarado, porém uma simples declaração no CSS não garante a qualidade das imagens e isso de fato dificulta um pouco as coisas.

```css
img {
   width: 100%;
   height: auto;
}
```

Se você entende um pouco de CSS, certamente deve saber que o código acima é o básico para declarar imagens responsivas, porém esta declaração pode ser um problema para imagens pequenas, depois de uma certo ponto ela começa a se esticar perdendo totalmente o foto. Podemos resolver este problemas substituído algumas propriedades do CSS que estiliza as imagens.

## Perda de qualidade
Quando essa perda de qualidade é perceptivo? Vamos supor que o elemento pai tenha uma largura fixa de 800px, dentro deste elemento tem uma imagem com a largura de 400px e altura de 300px, com a declaração do CSS anterior (width e height), a imagem vai se esticar para as laterais até atingir a largura máxima de 800px, com este resultado a imagem perde qualidade por se esticar 400px a mais do que deveria.

## Mantendo a qualidade
Não é possível esticar uma imagem sem ela perder a qualidade, porém podemos garantir que ela não ultrapasse a largura ou altura máxima, usado os mesmo exemplos anteriores, podemos fazer uma pequena modificação no CSS dessa forma.

```css
img {
   max-width: 100%;
   height: auto;
}
```

Veja que substituímos `width` por `max-width`, fazendo com que a imagem não se estique além de sua largura máxima.

## Imagens lado a lado
As declarações anteriores, são aplicadas em caso de usar uma imagem por elemento, se um elemento em específico tiver mais de uma imagem, e queira criar um efeito de imagens lado a lado, você pode fazer a seguinte declaração no CSS.

```css
img {
   float: left;
   max-width: calc((100%)/3);
   height: auto;
}
```

Declaramos a seguinte situação para três imagens. Todas as imagens fica situada a esquerda `float: left;`, essas imagens também vão ter um cálculo com a largura de 100%, apesar delas serem declarada com a largura 100%, as imagens vão usar apenas um terço da tela `max-width: calc((100%)/3);` e altura proporcional a largura `height: auto;`.

As regras de CSS para criar imagens responsivas não acaba por aqui, entretanto isso é mais que o suficiente para você construir imagens altamente ajustável com a largura dos elementos e dispositivos usado para acessar uma página web.

## Conclusão
Mesmo em grandes front-end como Bootstrap e Materializecss, você não vai ver regras além das que foram mostrada neste artigo, no máximo, o que você veja é uma regra específica para um determinado elemento com media queries `@media {...}`.

Bom pessoal, eu espero que todos você tenha gostado do post, não esqueça de deixar o seu comentário e compartilhar nas redes sociais.
