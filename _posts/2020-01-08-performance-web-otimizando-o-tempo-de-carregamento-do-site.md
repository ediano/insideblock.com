---
layout: post
title: 'Performance web:  Otimizando o tempo de carregamento do site'
description: >-
  Entenda como podemos melhorar o carregamento do site com práticas simples e
  eficientes.
datePublished: '2020-01-07 09:34:09'
dateModified: '2020-01-07 09:34:09'
tags:
  - dev
  - js
  - javascript
  - dicas
  - performance web
category: dev
image: /assets/blog/performance-web-otimizando-o-tempo-de-carregamento-do-site.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---
Sem dúvidas, a pior coisa que pode existir quando pesquisamos por algo na internet é esperar o conteúdo do site carregar, em alguns casos existem sites que nem carregam, ou que o usuário (eu) nem aguarda mais que 10 segundos para concluir o carregamento da página e acaba que desistindo de ver o conteúdo.

Isso de fato é um problema precoce que afeta centenas de milhares de sites, seja ela por ser uma página muito poluída com banners e plugins desnecessários, ou até mesmo pela falta de experiência e métrica do desenvolvendo em analisar como os conteúdos devem ser exibido dentro da página. Eu digo isso com todas as convicções, a falta de experiência do desenvolvedor pode afetar no carregamento do site, inclusive o próprio insideblock.com já apresentou algumas páginas mais lentas que o comum, deixando nossos visitantes frustrados por ter que aguardar a página carregar. Por isso, hoje eu tragos a todos vocês dicas de como podemos melhorar o tempo de carregamento de nossos sites/blogs.

**Aviso:** Só para deixar claro, iremos falar um pouco sobre JavaScript, portanto isso vai exigir que você tenha noções de lógica de programação.

## Entendendo o carregamento do site

Para entender melhor como podemos melhorar o carregamento de uma página web, primeiro temos que entender como o navegador faz a leitura das páginas. Quando uma página é aberta no navegador, ele começa a fazer a leitura do conteúdo de cima para baixo, da direita para a esquerda, até a última linha do código fonte.

Vamos criar um cenário de um site que tenha centenas de imagens. Quando o usuário acessa esse site, por padrão todas as imagens que tiver na página serão carregadas ao mesmo tempo, esse tipo de requisição por parte do navegador, faz com que a navegação se inicie lenta e o tempo de carregamento da página seja ainda maior.

Sabendo disso podemos criar algumas regras dentro do nosso site, uma delas é evitar que todas as imagens seja carregada ao mesmo tempo. Imagine uma coisa, você acabou de acessar o site, o primeiro quadro que aparece no seu monitor é chamado de "primeira quebra de página", se esta primeira quebra de página é o seu campo de visão inicial do conteúdo, não faz sentido permitir que as demais quebras de páginas, carregue as imagens, pois de certa forma o usuário não sabe o que ainda tem para baixo. Dentro desse campo de visão, podemos programar em nosso site, que as demais imagens sejam carregadas somente quando o usuário fizer a requisição através do navegador, essa requisição pode ser definida quando o usuário rolar a barra lateral do site para ir para próxima quebra de página.

Este tipo de prática, garante que o conteúdo não seja carregado sem que o usuário precise dele, garantido que a página carregue mais rápido em internet ruim evitando gargalos de navegação.

## Colocando em prática

Para facilitar o entendimento, iremos dividir este tópico em três partes, a primeira se trata sobre a minificação de códigos; a segunda na compactação e no atraso no carregamento das imagens e a terceira parte iremos citar o Google Analytics como plugin de terceiros.

Veja a velocidade da nossa página - <http://bit.ly/ib-pagespeedhttp://bit.ly/ib-pagespeed>{:rel="nofollow noopener noreferrer"}{:target="_blank"}

## HTML, CSS e JS minificado

Existe uma dúvida muito grande entre os desenvolvedores iniciantes em relação a compactação de códigos, pois muitos acreditam que ao compactando código a legibilidade do mesmo se torna impossível, que fato isto é realmente verdade, entretanto vamos entender o por que um desenvolvedor mais experiente compacta seus códigos.

1. O usuário final não vai ler o código fonte do site, ele simplesmente lê o conteúdo;
2. Usuários não precisam saber como o site funciona ou o que tem por trás dele para funcionar;
3. Um site com código compactado carrega mais rápido;

Definindo essas características, podemos perceber que deixar o código do site em produção indentado não faz muito sentido, por este motivo após o desenvolvimento de todo o código fonte, costumamos compacta-lo de forma que ele fique em uma única linha, tirando todas as tags e espaços de indentação, esse tipo de prática não faz com que o código original ou a indentação original se perca, pois geralmente na hora da compactação o código origem não é modificado. HTML, CSS e JS minificado Existe uma dúvida muito grande entre os desenvolvedores iniciantes em relação a compactação de códigos, pois muitos acreditam que ao compactando código a legibilidade do mesmo se torna impossível, que fato isto é realmente verdade, entretanto vamos entender o por que um desenvolvedor mais experiente compacta seus códigos.

O usuário final não vai ler o código fonte do site, ele simplesmente lê o conteúdo; Usuários não precisam saber como o site funciona ou o que tem por trás dele para funcionar; Um site com código compactado carrega mais rápido;

Definindo essas características, podemos perceber que deixar o código do site em produção indentado não faz muito sentido, por este motivo após o desenvolvimento de todo o código fonte, costumamos compacta-lo de forma que ele fique em uma única linha, tirando todas as tags e espaços de indentação, esse tipo de prática não faz com que o código original ou a indentação original se perca, pois geralmente na hora da compactação o código origem não é modificado.

Exemplo: Código CSS indentado

```css
.identified-minified {
    background-color: rgba(0, 0, 0, .5);
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 300px;
}
```

Exemplo: Código CSS identado

```css
.identified-minified {
    background-color: rgba(0, 0, 0, .5);
    padding: 10px;
    margin: 10px;
    width: 300px;
    height: 300px;
}
```

Exemplo: Código CSS compactado

```css
.identified-minified{background-color:rgba(0,0,0,.5);padding:10px;margin:10px;width:300px;height:300px}
```

Exemplo: Código CSS compactado

```css
.identified-minified{background-color:rgba(0,0,0,.5);padding:10px;margin:10px;width:300px;height:300px}
```

Se repararmos os códigos, ambos têm a mesma funcionalidade, apesar deles serem muito pequenos para fazermos um teste, o código compactado será carregado muito mais rápido que o código identado, geralmente esse teste pode ser facilmente percebido quando realizamos em códigos que possui centenas de linhas, entretanto é recomendado que qualquer código em produção seja compactado.

Site para compactar CSS e JS: https://www.websiteplanet.com/pt-br/webtools/jscssminifier/Se repararmos os códigos, ambos têm a mesma funcionalidade, apesar deles serem muito pequenos para fazermos um teste, o código compactado será carregado muito mais rápido que o código identado, geralmente esse teste pode ser facilmente percebido quando realizamos em códigos que possui centenas de linhas, entretanto é recomendado que qualquer código em produção seja compactado.

[Site para compactar CSS e JS](https://www.websiteplanet.com/pt-br/webtools/jscssminifier/https://www.websiteplanet.com/pt-br/webtools/jscssminifier/){:rel="nofollow noopener noreferrer"}{:target="_blank"}

## Imagens compactas

As imagens além dela ser muito importantes para ajudar a modelar o layout do site, ou que ela esteja disponível para apresentar uma simples capa de livro. O uso incorreto e a não preparação dessa imagem pode se tornar a grande vilã de um site, imagens muito grandes requer uma quantidade maior de tempo para ser baixada e exibida para o visitante.

Alternativas como o redimensionamento de imagem, compactação de peso e formatos como .webp, .jpg e .jpg200, pode melhorar o carregamento da página, apesar dessa melhoria ser notável ela não é a única disponível, outras práticas, como o controle de fluxo de carregamento, podem ser aplicadas nas imagens com programação simples. Veja o exemplo no script a seguir. Imagens compactas
As imagens além dela ser muito importantes para ajudar a modelar o layout do site, ou que ela esteja disponível para apresentar uma simples capa de livro. O uso incorreto e a não preparação dessa imagem pode se tornar a grande vilã de um site, imagens muito grandes requer uma quantidade maior de tempo para ser baixada e exibida para o visitante.

Alternativas como o redimensionamento de imagem, compactação de peso e formatos como .webp, .jpg e .jpg200, pode melhorar o carregamento da página, apesar dessa melhoria ser notável ela não é a única disponível, outras práticas, como o controle de fluxo de carregamento, podem ser aplicadas nas imagens com programação simples. Veja o exemplo no script a seguir.

```js
// Elemento (tag img src)
const articleImg = document.querySelectorAll('img');
 
// URL das imagens (não carregadas)
const src = [];
 
// Controle do fluxo (abrir site e scroll)
const flow = [];
 
// Função para carregar a imagem
function img() {
    for (let i = 0; i < articleImg.length; i++) {
        if (articleImg[i].getBoundingClientRect().top < window.innerHeight && (typeof flow[i] == 'undefined')) {
            articleImg[i].src = src[i];
            flow[i] = true;
        }
    }
}
 
// Carrega as imagens 1 segundo depois de abrir o site
setTimeout(
    function() {
        img();
    }, 1000);
 
// Carrega as imagens 1 segundo depois de rolar a página
this.addEventListener('scroll', function() {
    setTimeout(
        function() {
            img();
        }, 1000);
});
```
```js
// Elemento (tag img src)
const articleImg = document.querySelectorAll('img');
 
// URL das imagens (não carregadas)
const src = [];
 
// Controle do fluxo (abrir site e scroll)
const flow = [];
 
// Função para carregar a imagem
function img() {
    for (let i = 0; i < articleImg.length; i++) {
        if (articleImg[i].getBoundingClientRect().top < window.innerHeight && (typeof flow[i] == 'undefined')) {
            articleImg[i].src = src[i];
            flow[i] = true;
        }
    }
}
 
// Carrega as imagens 1 segundo depois de abrir o site
setTimeout(
    function() {
        img();
    }, 1000);
 
// Carrega as imagens 1 segundo depois de rolar a página
this.addEventListener('scroll', function() {
    setTimeout(
        function() {
            img();
        }, 1000);
});
```

Se você for uma pessoa que já tem um pouco de experiência com JavaScript, esse código não vai ser muito difícil de se entendido, praticamente todas as linhas estão comentadas exceto pela condição a seguir.

```js
if (articleImg[i].getBoundingClientRect().top < window.innerHeight && (typeof flow[i] == 'undefined')) { ... }
```

Essa condição tem a função de verificar as coordenadas das imagens dentro da página, em seguida ela verifica se a coordenada da imagem é menor que a altura da quebra de página, ela também verifica se a imagem não foi carregada antes, se todas as verificações forem verdadeiras, então o script insere o endereço da imagem que deve ser carregada na exata coordenada em que o visitante está rolando a página.

Essa prática é necessária, pois como tínhamos citado antes, não faz sentido carregar uma imagem que o visitante ainda não requisitou de alguma forma, essa prática com certeza é a que dá mais eficiência no carregamento da página, principalmente em sites que tem muitas imagens.
Se você for uma pessoa que já tem um pouco de experiência com JavaScript, esse código não vai ser muito difícil de se entendido, praticamente todas as linhas estão comentadas exceto pela condição a seguir.

```js
if (articleImg[i].getBoundingClientRect().top < window.innerHeight && (typeof flow[i] == 'undefined')) { ... }
```

Essa condição tem a função de verificar as coordenadas das imagens dentro da página, em seguida ela verifica se a coordenada da imagem é menor que a altura da quebra de página, ela também verifica se a imagem não foi carregada antes, se todas as verificações forem verdadeiras, então o script insere o endereço da imagem que deve ser carregada na exata coordenada em que o visitante está rolando a página.

Essa prática é necessária, pois como tínhamos citado antes, não faz sentido carregar uma imagem que o visitante ainda não requisitou de alguma forma, essa prática com certeza é a que dá mais eficiência no carregamento da página, principalmente em sites que tem muitas imagens.

[Software para compactar imagens](https://www.faststone.org/FSResizerDetail.htm
){:rel="nofollow noopener noreferrer"}{:target="_blank"}{:rel="nofollow noopener noreferrer"}{:target="_blank"}

[Site online para compactar imagens](https://www.iloveimg.com/pt/comprimir-imagem){:rel="nofollow noopener noreferrer"}{:target="_blank"}{:rel="nofollow noopener noreferrer"}{:target="_blank"}

## Plugs de terceiros

Outro ponto importante é em relação ao atraso do carregamento dos arquivos scripts do tipo src, para este tópico iremos usar o plugin do Google Analytics, inclusive nós mesmo do Inside Block usamos este plugin para gerenciar o fluxo de visitas que recebemos diariamente.

Como é de se esperar fizemos algumas alterações no código oficial para melhorar o carregamento das nossas páginas, nesse momento iremos apresentar o código original e o “código melhorado que usamos em nosso site”.

Exemplo: Código oficial
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-0000000-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'UA-0000000-1');
</script>
```

Exemplo: Código melhorado que usamos
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script>
    window.dataLayer = window.dataLayer || [];
 
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
 
    gtag('config', 'UA-0000000-1');
 
    // A partir daqui criamos nossa função melhorada.
    setTimeout(function() {
        const gtag = document.createElement('script');
        gtag.setAttribute('async', 'async');
        gtag.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-0000000-1');
        document.head.appendChild(gtag);
    }, 5000);
</script>
```

Note que o código oficial é bem menor que o nosso código melhorado, apesar dessa diferença o código melhorado que usamos pode permitir que as páginas do Inside Block carregue até 5 segundos mais rápidos, evitando latência desnecessárias, isso é possível graças a função temporizada (setTimeout) do JavaScript, em nosso exemplo colocamos um atraso de 5 segundos depois que o visitante entrar na página, para criar a tag script e carregar os atributos e o arquivo src.

## Conclusão

Bom, eu espero que todos tenham gostado desse artigo, pois ele foi construído com base em minha experiência de vários testes que fiz durante o desenvolvimento de alguns projetos, incluindo o próprio Inside Block.

Infelizmente como nem tudo são flores, alguns desenvolvedores menos experiente pode sentir um pouco de dificuldade ao colocar, alguns de nossos tópicos em produção.

Eu agradeço por ter nos visitados e até logo.
Plugs de terceiros
Outro ponto importante é em relação ao atraso do carregamento dos arquivos scripts do tipo src, para este tópico iremos usar o plugin do Google Analytics, inclusive nós mesmo do Inside Block usamos este plugin para gerenciar o fluxo de visitas que recebemos diariamente.

Como é de se esperar fizemos algumas alterações no código oficial para melhorar o carregamento das nossas páginas, nesse momento iremos apresentar o código original e o “código melhorado que usamos em nosso site”.

**Exemplo:** Código oficial
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-0000000-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'UA-0000000-1');
</script>
```

**Exemplo:** Código melhorado que usamos
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script>
    window.dataLayer = window.dataLayer || [];
 
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
 
    gtag('config', 'UA-0000000-1');
 
    // A partir daqui criamos nossa função melhorada.
    setTimeout(function() {
        const gtag = document.createElement('script');
        gtag.setAttribute('async', 'async');
        gtag.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-0000000-1');
        document.head.appendChild(gtag);
    }, 5000);
</script>
```

Note que o código oficial é bem menor que o nosso código melhorado, apesar dessa diferença o código melhorado que usamos pode permitir que as páginas do Inside Block carregue até 5 segundos mais rápidos, evitando latência desnecessárias, isso é possível graças a função temporizada (setTimeout) do JavaScript, em nosso exemplo colocamos um atraso de 5 segundos depois que o visitante entrar na página, para criar a tag script e carregar os atributos e o arquivo src.

## Conclusão

Bom, eu espero que todos tenham gostado desse artigo, pois ele foi construído com base em minha experiência de vários testes que fiz durante o desenvolvimento de alguns projetos, incluindo o próprio Inside Block.

Infelizmente como nem tudo são flores, alguns desenvolvedores menos experiente pode sentir um pouco de dificuldade ao colocar, alguns de nossos tópicos em produção.

Eu agradeço por ter nos visitados e até logo.

