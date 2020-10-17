---
layout: post
title: "Fazendo deploy na Vercel com sites Jekyll"
description: >-
  Entenda como você pode fazer o seu primeiro deploy na Vercel, usando qualquer tipo de Framework para construção de site estático.
datePublished: "2020-08-30 07:00:00"
dateModified: "2020-08-30 07:00:00"
tags: [jekyll, dev, vercel, reactjs, deploy]
categories: [jekyll, dev]
image: /fazendo-deploy-na-vercel-com-sites-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Com certeza muitos de vocês já sabem que o Inside Block é construído em cima do Jekyll, e por muito tempo usamos para fazer deploy o [Netlify](https://www.netlify.com){:target="_blank"}{:rel="nofollow noopener noreferrer"},  porém depois de algum tempo usando este serviço,  acabei conhecendo a [Vercel](https://vercel.com){:target="_blank"}{:rel="nofollow noopener noreferrer"}, que por sua vez acabei gostando muito,  porém não posso afirmar se é melhor ou pior que o Netlify,  pois eu acredito que isso é uma questão de gosto e análise de custo benefício.

Eu particularmente, achei a ferramenta de deploy da Vercel mais simples,  porém encontrei uma certa complicação, durante o processo de migração,  que diz respeito a exibição personalizada de páginas 404.  Nativamente, a Vercel não exibe a página 404  customizável do Jekyll, ela exibe sua própria página 404.

## Primeiro passo

Vamos entender como foi o processo do primeiro deploy na Vercel utilizando um site estático com Jekyll. Antes de tudo você já deve ter um repositório com um site Jekyll em um dos serviços de git em nuvem, como GitHub, GitLab, Bitbucket entre outros.

Depois disso você pode acessar o site da Vercel,  criar uma conta caso não tenha ou fazer login utilizando um dos serviços de git em nuvem disponível. Em seguida você **Import Project**, clique em **Continuar**, e cole a URL do repositório que você deseja fazer o deploy. exemplo: *https://github.com/ediano/insideblock.com*.

## Domínio personalizado

Depois disso é só aguardar o deploy finalizar e pronto seu site já está no ar,  em seguida caso deseja você pode adicionar um domínio personalizado, para realizar a configuração do domínio personalizado,  você pode acessar o painel do seu projeto na Vercel, em seguida acesse **View Domains**.

Dentro das configurações de domínio você pode inserir um novo ou editar um domínios já existentes e até mesmo fazer redirecionamentos entre eles.

É claro, você tem que-se certificar de que as configurações de DNS seja feito junto as configurações da detentora do domínio onde você comprou. Para saber mais veja [Custom Domains Vercel](https://vercel.com/docs/custom-domains){:target="_blank"}{:rel="nofollow noopener noreferrer"}.

## Erro 404 not found

Como citei anteriormente, a Vercel  não consegue identificar a página 404 customizada do Jekyll, por esse motivo precisamos fazer uma configuração manualmente,  dentro do nosso repositório, lidar com esse tipo de erro é extremamente simples na Vercel,  então agora vamos colocar a mão no código.

Primeiro vamos criar um arquivo chamado `vercel.json`  na raiz do  repositório,  em seguida vamos adicionar as seguintes configurações.

```js
{
  "name": "insideblock",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "status": 404, "dest": "/404.html" }
  ]
}
```

Observe que este arquivo de configuração é bem simples, entretanto ele deve seguir algumas regras,  na opção `name`,  você deve substituir pelo nome do projeto que foi criado na Vercel, algo parecido como https://vercel.com/edianodev/**insideblock**.

As configurações de `routes`,  está relacionado as rotas que o blog tem,  neste  caso será necessário configurar apenas a rota da página 404, para que ela funcione de forma correta,  você deve alterar a opção `dest:`,  apontando para o caminho exato onde a página 404 fica acessível quando digitado no navegador. exemplo: https://insideblock.com**/404.html**.

Bom, este foi o meu primeiro deploy na Vercel,  lembrando que a Vercel não  se limita apenas ao Jekyll,  ela suporta vários outros frameworks para construção de sites estáticos, como o próprio NextJS produzido pela Vercel, ReactJS, Gatsby, Angular, Vue.JS entre vários outros.

## Conclusão

Eu espero que todos vocês tenham gostado deste artigo,  ele foi simples, curto e não teve muitos detalhes de como foi feito o deploy, mas isso é uma coisa que queremos mudar logo,  quem sabe na próxima o próprio Inside Block não esteja usando um framework diferente para deploy como o NextJS.

Desde o meu [primeiro contato com o ReactJS](https://insideblock.com/blog/meu-primeiro-app-web-e-mobile-com-react-e-react-native/){:target="_blank"}{:rel="noopener"} promovido pela [Rocketseat](https://rocketseat.com.br/){:target="_blank"}{:rel="nofollow noopener noreferrer"}, meu interesse pela comunidade JavaScript tem crescido muito.
