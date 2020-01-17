---
layout: post
title: 'GitHub Pages: HTTPS próprio do GitHub para domínios personalizado'
description: >-
  GitHub Pages agora tem HTTPS próprio para domínios personalizados, confira o método de aplicação para o seu blog.
datePublished: '2020-01-18 07:00:00'
dateModified: '2020-01-18 07:00:00'
tags:
  - dev
  - seo
  - dicas
category: dev
image: /assets/blog/github-pages-https-proprio-do-github-para-dominios-personalizado.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Desde o início do GitHub Pages, ela sempre ofereceu suporte para “custom domain” de seus repositórios, entretanto a plataforma só oferecia suporte HTTPS para os subdominios .github.io, isso de fato mudou e agora é possível ativar SSL/HTTPS em domínios personalizados, sem a necessidade de uma serviço de terceiros, inclusive já postamos no Inside Block antes de [como ativar o HTTPS usando o CloudFlare](https://insideblock.com/blog/cloudflare-https-no-github-pages-com-dominio-personalizado/){:rel="noopener"}{:target="_blank"}.

O serviço de HTTPS do GitHub Pages, tem suas vantagens, incluindo CDN própria que acelera o carregamento da página, além de ser totalmente compatível com as aplicações suportada pela plataforma.

Atenção: Este é um processo demorado, muitas das vezes o site pode ficar fora do ar por 24 horas, tempo necessário para que o DNS se propague pela internet.

Vamos começar pela propagação do DNS, quanto antes terminamos esta etapa melhor. Acesse o serviço contratado para registrar o domínio personalizado, procure pelas configurações de DNS, remova todos as entrada do tipo A que corresponde ao GitHub.

Exemplo: **199.27.XX.XXX**.

Crie quatro novas entradas do tipo A, com os seguintes endereço de IP.

```
> 185.199.108.153
> 185.199.109.153
> 185.199.110.153
> 185.199.111.153
```

Agora acesse sua conta do GitHub, abra as configurações do repositório que vai receber o HTTPS, na seção GitHub Pages, em “Source” deixe selecionado “master branch”, adicione o seu o domínio personalizado na caixa “**Custom domain**”, salve a aplicação e aguarde a página ser atualizada.

Volte para a seção “**GitHub Pages**”, marque a opção “**Enforce HTTPS**”, caso o DNS ainda tenha se propagado esta opção vai ficar disponivel porem não vai ser possível selecioná-la para ativação.

~~OBS: Se o seu domínio for do tipo “.com.br”, o HTTPS só funciona se tiver a entrada de subdomínio com “www”.~~

Exemplo: www.example.com.br

Bom, por enquanto é só, se durante este tempo o seu site ainda não voltou a funcionar, recomendo que aguarde mais um pouco para finalizar a propagação de DNS.

Em breve vamos ver, como migrar um site do GitHub Pages para o Netlify sem perder nenhum dados, e ainda manter o HTTPS ativo no custom domain.

## Conclusão
Bom pessoal, nosso post de hoje foi isso, espero que todos vocês tenham gostado do conteúdo, qualquer dúvida é deixar nos comentários, não esqueça de compartilhar nas redes sociais.
