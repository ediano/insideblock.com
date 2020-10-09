---
layout: post
title: 'Tudo sobre listas de itens com Markdown'
description: >-
  Conheça tudo sobre as listas de itens ordenadas e desordenadas do markdown.
datePublished: '2020-01-19 07:00:00'
dateModified: '2020-01-19 07:00:00'
tags:
  - dev
  - seo
  - md
  - markdown
category: 
  - dev
image: /tudo-sobre-listas-de-itens-com-md.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Markdown é uma linguagem simples de marcação que converte texto em HTML válido, sua extensão pode ser escrita em “.markdown” como o próprio nome da linguagem ou simplesmente “.md”.

Hoje iremos ver como funciona o sistema de listas ordenadas e desordenadas dos arquivos .md. Em uma arquivos .html podemos criar listas usamos as tags “ul” ou “ol”; já com os arquivos .md é bem diferente, em vez de adicionamos tags, adicionamos símbolos de caracteres especiais, apesar dessa característica, os arquivos .md também suporta códigos HTML nativo.

OBS: Para renderizar arquivos .md, você precisa de um servidor para interpretar as marcações do arquivo, alguns site como GitHub e GitLab tem esta função nativa, ou você também pode usar um servidor local com Jekyll para criar os arquivos .md.

## Lista desordenadas
As listas desordenadas (marcadores) podem se escrita no markdown de  três formas, com asteriscos, sinal de mais e sinal de menos (*, + ou -).

OBS: Para formatar uma linha ou texto, antes do mesa deve ser atribuída um símbolo de caractere especial suportado pelo markdown como nos exemplos a seguir.

#### Entrada Markdown
```md
* Item 1
* Item 2
* Item 3

+ Item 1 +
+ Item 2 +
+ Item 3 +

- Item 1 -
- Item 2 -
- Item 3 -
```

Ambas as marcações gera a seguinte saída HTML.

```html
<ul>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ul>
<ul>
   <li>Item 1 +</li>
   <li>Item 2 +</li>
   <li>Item 3 +</li>
</ul>
<ul>
   <li>Item 1 -</li>
   <li>Item 2 -</li>
   <li>Item 3 -</li>
</ul>
```

#### Marcações renderizada pelo navegador.
* Item 1
* Item 2
* Item 3

* Item 1 +
* Item 2 +
* Item 3 +

* Item 1 -
* Item 2 -
* Item 3 -

## Lista desordenada em cascata
As listas desordenadas também podem ser escrita em forma de cascata, em nosso exemplo iremos usar asteriscos, entretanto como vimos anteriormente, também pode ser usado os sinais de + ou -.

Para aplicar um efeito cascata, você deve recuar a linha com 4 espaços ou um tab, depois de qualquer um dos item da lista, veja o exemplo.

#### Entrada Markdown
```md
* Item um
* Item dois
    * Item 1
    * Item 2
* Item três
```

#### Saída HTML
```html
<ul>
   <li>Item um</li>
   <li>Item dois
       <ul>
           <li>Item 1</li>
           <li>Item 2</li>
       </ul>
   </li>
   <li>Item três</li>
</ul>
```

#### Marcações renderizada pelo navegador
* Item um
* Item dois
   * Item 1
   * Item 2
* Item três

## Lista ordenadas numeradas
Criar listas ordenadas é tão simples quanto criar as desordenadas, a formatação no markdown segue o exemplo simples de editores de texto .docx entre outros.

#### Entrada Markdown
```md
1. Item 1
2. Item 2
3. Item 3
```

#### Saída html
```html
<ol>
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
</ol>
```

#### Marcações renderizada pelo navegador
1. Item 1
2. Item 2
3. Item 3

## Lista ordenada em cascata
Assim como as listas desordenadas, as ordenadas também pode ser escrita em forma de cascata, seguindo o mesmo exemplo anterior, para aplicar o formato cascata você deve recuar a linha com 4 espaços ou um tab. 

#### Entrada Markdown
```md
1. Item 1
2. Item 2
   1. Item 1
   2. Item 2
3. Item 3
```

#### Saída html
```html
<ol>
   <li>Item 1</li>
   <li>Item 2
       <ol>
           <li>Item 1</li>
           <li>Item 2</li>
       </ol>
   </li>
   <li>Item 3</li>
</ol>
```

#### Marcações renderizada pelo navegador
1. Item 1
2. Item 2
   1. Item 1
   2. Item 2
3. Item 3

## Lista ordenada não contínua
Para todas as listas ordenadas, todas vez que houve um quebra de linha de parágrafo, a contagem dos itens e reiniciada do estágio 1, veja o exemplo.

#### Entrada Markdown
```md
1. Item 1
2. Item 2

Parágrafo, quebra de linha

3. Item 3
```

#### Saída HTML
```html
<ol>
   <li>Item 1</li>
   <li>Item 2</li>
</ol>

<p>Parágrafo, quebra de linha</p>

<ol>
   <li>Item 3</li>
</ol>
```

#### Marcações renderizada pelo navegador
1. Item 1
2. Item 2

Parágrafo, quebra de linha

3. Item 3

## Lista ordenada contínua
Como vimos anteriormente, quando existe uma quebra de linha entre um item é outro, a lista ordenada reinicia a contagem dos itens na posição “1.”, existe uma forma bem simples de lidar com isso, quando a lista é contínua mas que existe uma quebra de linha entre os itens.

#### Entrada Markdown
```md
1. Item 1
2. Item 2

Parágrafo, quebra de linha

{:start="3"}
3. Item 3
```

Para que uma lista seja contínua, você deve inserir a seguinte marcação `{:start="3"}`, uma linha antes do item contínuo.

#### Saída html
```html
<ol>
   <li>Item 1</li>
   <li>Item 2</li>
</ol>

<p>Parágrafo, quebra de linha</p>

<ol start="3">
   <li>Item 3</li>
</ol>
```

#### Marcações renderizada pelo navegador
1. Item 1
2. Item 2

Parágrafo, quebra de linha

{:start="3"}
3. Item 3

## Conclusão
Bom, por enquanto foi isso pessoal, eu espero que todos você tenha entendido como funciona as marcações de listas com markdown, qualquer dúvidas é só deixar nos comentários.

Se você gostou desse artigo não esqueça de compartilhar nas redes sociais com seus amigos, um forte abraço em breve mais disponível.
