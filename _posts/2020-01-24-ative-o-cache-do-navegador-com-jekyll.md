---
layout: post
title: 'Ative o cache do navegador com Jekyll'
description: >-
  Melhore um performance do seu site, permita que os navegadores faça cache e que os usuário consumir menos dados.
datePublished: '2020-01-24 07:00:00'
dateModified: '2020-01-24 07:00:00'
tags: [jekyll, dev, performance web]
categories: [jekyll, dev]
image: /ative-o-cache-do-navegador-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Olá pessoal, você sabia que é possível deixar os usuário navegar em seu site mesmo sem internet, bom isso é totalmente possível com qualquer website, porém hoje vamos mostrar como fazer isso com o Jekyll.

Para que você não se iluda totalmente, para que um usuário navegue em seu site sem internet, é preciso que ele tenha acessado pelo menos uma vez antes (com internet).

A primeira coisa que temos que fazer é criar o serviço de inicialização do cache, instale o código .js entre as tags `<head>` e `</head>` do seu blog.

```html
<script type="text/javascript">
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/offline.js").then(function(registration) {
      console.info("Service Worker registration successful with scope: ", registration.scope);
  }).catch(function(err) {
      console.error("Service Worker registration failed: ", err);
  });
}
</script>
```

Note que o nosso serviço está chamando um arquivo `/offline.js`, agora você deve criar um novo arquivo com o mesmo nome dentro do diretório raiz, em seguida adicione o código JS a seguir e salve a modificação.

{% raw %}
```js
---
layout: null
---

const staticCache = 'cache-website-{{ site.time | date: "%Y-%m-%d-%H-%M" }}';

var filesCache = [
 {% for pg in site.pages_to_cache %}
   '{{ pg }}',
 {% endfor %}
 {% for pt in site.posts limit: 10%}
   '{{ pt.url }}',
 {% endfor %}
 {% for asset in site.files_to_cache %}
   '{{ asset }}',
 {% endfor %}
];

// Cache on install
this.addEventListener("install", event => {
 this.skipWaiting();

 event.waitUntil(
   caches.open(staticCache)
     .then(cache => {
       return cache.addAll(filesCache);
   })
 )
});

// Clear cache on activate
this.addEventListener('activate', event => {
 event.waitUntil(
   caches.keys().then(caches => {
     return Promise.all(
       caches
         .filter(cache => (cache.startsWith('cache-website-')))
         .filter(cache => (cache !== staticCache))
         .map(cache => caches.delete(cache))
     );
   })
 );
});
```
{% endraw %}

Este novo arquivo está iniciando um novo evento chamado `cache-website-{{ mais-data-atual }}`, em seguida ele está criando cache de todas as páginas, os 10 posts mais atuais e alguns arquivos de asset.

Note que dentro desse mesmo arquivo temos dois eventos, um para instalar o cache e outro para limpar. Nesta situação a limpeza do cache é executado quando o site for acessado novamente depois de 24 horas, logo depois da limpeza o serviço inicializado e reinstala o cache atualizado.

Página de aviso (sem acesso a internet)
Além do usuário conseguir navegar entre alguns posts e outros, também é possível criar um arquivo de aviso para alertá-lo que ele está sem internet, ou caso o blog fique fora do ar por alguns instantes.

Inclua as linha a seguir dentro no arquivo “**_config.yml**”.

{% raw %}
```yml
pages_to_cache:
 - /offline/index.html
```
{% endraw %}

Em seguida crie uma arquivo chamado “**offline.html**” dentro do diretório **_layouts** e inclua o exemplo “liquid” a seguir dentro da mesma.

{% raw %}
```yml
---
layout: default
title: Page Offline
permalink: /offline/index.html
sitemap: false
---

Opa, parece que você está sem internet.<br/>
Tente atualizar a página em alguns instantes.

{{ content }}
```
{% endraw %}

Pronto, agora é só personalizar a mensagem de aviso de acordo com o seu gosto, e tudo já vai está funcionando

## Conclusão
Bom pessoal, o nosso artigo de hoje foi bem curtinho, eu espero que todos você tenha curtido, lembrando que o Google aprova este tipo de comportamento de website, sem conta que seus usuário agora vão ficar mais feliz por usar mesmo dados ao acessar novamente seu blog.
