---
layout: post
title: 'Como eu aprendi Jekyll'
description: >-
  Com o passar do tempo fui aperfeiçoando técnicas de desenvolvimento web, nem tudo eu aprendi sozinho, em quase tudo precisei de foco, dedicação e muita vontade de aprender.
datePublished: '2020-01-24 07:00:00'
dateModified: '2020-01-24 07:00:00'
tags:
  - misc
  - jekyll
  - dev
category:
  - misc
  - jekyll
image: /como-eu-aprendi-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Acredito que todos os nossos leitores já saibam que o Inside Block não usa mais a plataforma Blogger, inclusive publicamos um artigo onde falamos sobre a nossa migração, apesar de termos confirmado que tinhamos migrado para o ~~GitHub Pages, hoje estamos hospedado no GitLab, implementado com Netlify~~ e construído pelo gerador de sites estáticos Jekyll. Para que a migração fosse bem sucedida, antes tivemos que preparar o novo terreno, entender como ele funciona, desenvolver um novo template e programar nossas próprias regras de negócio.

Criamo este artigo para você entender melhor como fizemos uma migração perfeita em tão pouco tempo, e como foi feito o nosso planejamento passo a passo.

## Onde tudo começou?
Essa ideia de migrar de plataforma já havia sendo estudado há algum tempo, devido ao crescimento do Inside Block, com o passar do tempo essa ideia foi ficando mais forte e eu fiquei disposto a migrar a todo custo. Mas foi no dias 09/12/2017 no escritório de uma amiga que eu estava visitando que comecei a colocar o novo projeto em prática.

Apesar de todos os meus esforços eu não tinha muita experiência para migrar para o novo serviço sozinho, com uma pesquisa rápida na web eu encontrei um curso gratuito de GitHub Pages e Jekyll que vamos falar a seguir.

## Entendendo a plataforma
Como falei antes, primeiro migramos para o GitHub Pages, portanto vou partir do princípio. Entender como funciona o GitHub Pages é bem simples, agora saber como funciona a aplicação do Jekyll dentro da plataforma e um pouco complicado, ainda mais para quem não tem experiência com programação. Para entender todos processos da aplicação eu tive que assistir algumas horas do curso apresentado pelo desenvolvedor de front-end “[Willian Justen](https://willianjusten.com.br/){:rel="nofollow noopener noreferrer"}{:target="_blank"}”.

O curso “[Criando sites estáticos com Jekyll](https://www.udemy.com/share/102md6BUMaeF9WR34=/){:rel="nofollow noopener noreferrer"}{:target="_blank"}” está disponível gratuitamente na Udemy para todos os usuário que tiver cadastro. Durante todo o curso Willian Justen mostra com clareza e simplicidade todos os passos básicos para desenvolver qualquer template com Jekyll.

## Criando o template
Depois de entender como funciona toda a autonomia do Jekyll, comecei a desenvolver um novo layout para o Inside Block, leve, limpo e somente o necessário para os leitores, como sempre durante o desenvolvimento fiz uso do ~~front-end desenvolvido pela materializecss.com~~.

É claro que nem tudo se ajusta como o esperado, pois vi a necessidade de adicionar um pouco do meu próprio css, para que os elementos se adequasse perfeitamente por todo o modelo.

## Reescrevendo os artigo
Apesar dos nossos artigos iniciais estarem hospedados no Blogger, uma repositorio do Jekyll nominado de “jekyll-import” facilitou a importação dos mesmo, para que não houvesse a necessidade de reedição completa de nossos artigos.

Entretanto, apesar da explicação perfeita de Willian, eu vi a necessidade de reescrever todos os nossos artigos, adicionei alguns padrões de variáveis no “Front Matter” de cada postagem, devido o uso dessa estratégia hoje posso publicar qualquer artigo e escolher o que vai aparecer dentro dele, como autores, data de publicação, descrição do artigo, comentários entre outros.

## Colocando o blog no ar
Depois do blog está quase 100% pronto, faltou apenas colocá-lo no ar, para este processo funcionar perfeitamente, criei todos os apontamento de DNS necessários para o GitHub e só depois enviei o repositório para a nossa conta, algum tempo depois o Inside Block estava novamente acessível por todos os usuários.

## Conclusão
Ao todo foram 26 dias até a migração completa do Inside Block, 12 dias para o desenvolvimento do template e 2 dias para entender a sintaxe básicas do Jekyll. Durante este período aprendemos mais sobre a nova plataforma.

Desde a migração, começamos a criar nosso modelos para não perder a prática, e assim disponibilizar alguns deles para os nossos visitantes.

Bom pessoal, por enquanto foi isso, eu espero que vocês tenham curtido nosso post, não esqueça de compartilhar nas redes sociais.
