---
layout: post
title: Como verificar e indexar todas as paginas do blog no Google
date: "2016-07-21 18:20:00"
tags: [seo, dicas, blogger]
category: dev
image: /assets/media-image/como-verificar-e-indexar-todas-as.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Ter todas as paginas do blog indexadas no Google pode ajudar a gerar mais visitas por isso vale a pena verificar se o seu blog está indexado corretamente no Google. Isso é simples de fazer e você pode usar as ferramentas para <a href="http://www.google.com/webmasters" target="_blank" rel="noopener">Webmasters</a> do Google para enviar seus sitemaps e melhorar sua posição nos resultados das buscas do Google.

## Verificar Indexação do Blog no Google
Saber se o seu blog ou site aparece nos resultados do Google é muito simples você só precisa colocar a tag site: antes do endereço do seu blog, isto faz o Google procurar somente dentro do seu blog, por exemplo: *site: google.com*, veja o resultado na imagem acima.

Isso mostrará quantas paginas de nosso site aparecem no Google.

Você poderá notar que o numero de resultados é bem maior do que o seu numero de postagens, mas isso é normal porque o Google pode indexar também as paginas dos marcadores do blog, paginas de arquivos e outras.

## Indexar todas as paginas do blog no Google
Para facilitar que o Google encontre suas paginas use as Ferramentas Google para Webmasters e envie um sitemap do seu blog.

1. Acesse o menu *Sitemaps*.

2. Adicone o enderço do sitemap e clique em *Enviar*.

```
atom.xml?redirect=false&amp;start-index=1&amp;max-results=500
```

Isso faz indexar 500 postagens do seu blog, caso tenha mais do que esse numero de postagens, adicione mais um sitemap, mas use o código desta forma:

```
atom.xml?redirect=false&amp;start-index=501&amp;max-results=500
```

Veja que a única coisa que mudou foi o trecho index=501, portanto esse segundo sitemap indexará suas postagens de 501 até 1000. Se você tiver mais de mil posts no seu blog adicione mais um sitemap, mas usando index=1001 e assim por diante para garantir que todos seus posts apareçam no Google.

Essa é uma dica básica que a maioria dos blogueiros faz logo ao criar seu primeiro blog, porém precisamos fazer atualizações dos sitemaps conforme cresce o numero de posts de nosso blog, então se esse é o seu caso verifique o numero de postagens do seu blog não ultrapassou a quantidade de posts indexados e atualize seu sitemap.