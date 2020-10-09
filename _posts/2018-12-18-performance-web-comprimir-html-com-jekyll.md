---
layout: post
title: 'Performance web: Comprimir HTML com Jekyll'
description: Compile o código fonte de seu site e trabalhe a favor da performance web.
datePublished: '2018-12-18 10:00:00'
tags:
  - performance web
  - html
  - dev
  - css
category:
  - jekyll
image: /performance-web-comprimir-html-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
coauthor: Danielli Carvalho
comments: true
ads: true
---
Olá pessoal, nossos posts começaram a chegar, espero que continuem assim, fiquei quase um ano sem fazer nenhuma publicação. Agora vamos ao que interessa.

Se você chegou a este artigo, com certeza é um amante de Jekyll assim como eu, ou pretende desenvolver algum tipo de projeto com a aplicação do mesmo. São poucos os serviços web preparados para realizar a compilação do código fonte de um site. A compilação pode ser realizada por diversas ferramentas, no presente artigo vamos falar sobre uma aplicação que pode ser facilmente usada em site estaticos com Jekyll.

A soluções é bem simples de aplicar, no entanto para que tudo ocorra como esperado é necessário observar se o repositório do Jekyll está usando à versão anterior a 3.0, se estiver sugiro que seja feito um update.

Primeiro passo dentro de seu arquivo **_config.yml**, adicione as seguintes linhas.

```yml
# Compress HTML
compress_html:
  clippings: all
  comments: all
  endings: []
  profile: false
```

Note que as linhas fazem menção à compressão HTML, todavia depois de pronta a aplicação pode compilar quase todos os tipo linguagem, incluído CSS e JS.

Posteriormente, para parametrizar todas as regras de compilação vamos criar um novo arquivo, dentro do diretório **_layouts**, com o nome **compress.html**, em seguida adicione o código abaixo dentro do novo arquivo.

{% raw %}
```yml
---
# Jekyll layout that compresses HTML
# v3.0.1
# http://jch.penibelst.de/
# © 2014–2015 Anatol Broder
# MIT License
---

{% capture _LINE_FEED %}
{% endcapture %}{% if site.compress_html.ignore.envs contains jekyll.environment %}{{ content }}{% else %}{% capture _content %}{{ content }}{% endcapture %}{% assign _profile = site.compress_html.profile %}{% if site.compress_html.endings == "all" %}{% assign _endings = "html head body li dt dd p rt rp optgroup option colgroup caption thead tbody tfoot tr td th" | split: " " %}{% else %}{% assign _endings = site.compress_html.endings %}{% endif %}{% for _element in _endings %}{% capture _end %}</{{ _element }}>{% endcapture %}{% assign _content = _content | remove: _end %}{% endfor %}{% if _profile and _endings %}{% assign _profile_endings = _content | size | plus: 1 %}{% endif %}{% for _element in site.compress_html.startings %}{% capture _start %}<{{ _element }}>{% endcapture %}{% assign _content = _content | remove: _start %}{% endfor %}{% if _profile and site.compress_html.startings %}{% assign _profile_startings = _content | size | plus: 1 %}{% endif %}{% if site.compress_html.comments == "all" %}{% assign _comments = "<!-- -->" | split: " " %}{% else %}{% assign _comments = site.compress_html.comments %}{% endif %}{% if _comments.size == 2 %}{% capture _comment_befores %}.{{ _content }}{% endcapture %}{% assign _comment_befores = _comment_befores | split: _comments.first %}{% for _comment_before in _comment_befores %}{% if forloop.first %}{% continue %}{% endif %}{% capture _comment_outside %}{% if _carry %}{{ _comments.first }}{% endif %}{{ _comment_before }}{% endcapture %}{% capture _comment %}{% unless _carry %}{{ _comments.first }}{% endunless %}{{ _comment_outside | split: _comments.last | first }}{% if _comment_outside contains _comments.last %}{{ _comments.last }}{% assign _carry = false %}{% else %}{% assign _carry = true %}{% endif %}{% endcapture %}{% assign _content = _content | remove_first: _comment %}{% endfor %}{% if _profile %}{% assign _profile_comments = _content | size | plus: 1 %}{% endif %}{% endif %}{% assign _pre_befores = _content | split: "<pre" %}{% assign _content = "" %}{% for _pre_before in _pre_befores %}{% assign _pres = _pre_before | split: "</pre>" %}{% assign _pres_after = "" %}{% if _pres.size != 0 %}{% if site.compress_html.blanklines %}{% assign _lines = _pres.last | split: _LINE_FEED %}{% assign _lastchar = _pres.last | split: "" | last %}{% assign _outerloop = forloop %}{% capture _pres_after %}{% for _line in _lines %}{% assign _trimmed = _line | split: " " | join: " " %}{% if forloop.last and _lastchar == _LINE_FEED %}{% unless _outerloop.last %}{{ _LINE_FEED }}{% endunless %}{% continue %}{% endif %}{% if _trimmed != empty or forloop.last %}{% unless forloop.first %}{{ _LINE_FEED }}{% endunless %}{{ _line }}{% endif %}{% endfor %}{% endcapture %}{% else %}{% assign _pres_after = _pres.last | split: " " | join: " " %}{% endif %}{% endif %}{% capture _content %}{{ _content }}{% if _pre_before contains "</pre>" %}<pre{{ _pres.first }}</pre>{% endif %}{% unless _pre_before contains "</pre>" and _pres.size == 1 %}{{ _pres_after }}{% endunless %}{% endcapture %}{% endfor %}{% if _profile %}{% assign _profile_collapse = _content | size | plus: 1 %}{% endif %}{% if site.compress_html.clippings == "all" %}{% assign _clippings = "html head title base link meta style body article section nav aside h1 h2 h3 h4 h5 h6 hgroup header footer address p hr blockquote ol ul li dl dt dd figure figcaption main div table caption colgroup col tbody thead tfoot tr td th" | split: " " %}{% else %}{% assign _clippings = site.compress_html.clippings %}{% endif %}{% for _element in _clippings %}{% assign _edges = " <e;<e; </e>;</e>;</e> ;</e>" | replace: "e", _element | split: ";" %}{% assign _content = _content | replace: _edges[0], _edges[1] | replace: _edges[2], _edges[3] | replace: _edges[4], _edges[5] %}{% endfor %}{% if _profile and _clippings %}{% assign _profile_clippings = _content | size | plus: 1 %}{% endif %}{{ _content }}{% if _profile %} <table id="compress_html_profile_{{ site.time | date: "%Y%m%d" }}" class="compress_html_profile"> <thead> <tr> <td>Step <td>Bytes <tbody> <tr> <td>raw <td>{{ content | size }}{% if _profile_endings %} <tr> <td>endings <td>{{ _profile_endings }}{% endif %}{% if _profile_startings %} <tr> <td>startings <td>{{ _profile_startings }}{% endif %}{% if _profile_comments %} <tr> <td>comments <td>{{ _profile_comments }}{% endif %}{% if _profile_collapse %} <tr> <td>collapse <td>{{ _profile_collapse }}{% endif %}{% if _profile_clippings %} <tr> <td>clippings <td>{{ _profile_clippings }}{% endif %} </table>{% endif %}{% endif %}
```
{% endraw %}

Créditos para <a href="http://jch.penibelst.de/" target="_blank" rel="nofollow noopener noreferrer">jch.penibelst.de</a>.

Para concluir a aplicação, ainda dentro do diretório **_layouts**, você deve atribuir o `Front Matter` no arquivo **default.html** para apontar para o nosso arquivo **compress.html**.

```md
---
layout: compress
---
```

Podemos observar que o apontamento feito através do `Front Matter` é bem simples, entretanto, é importante levar em consideração  que todos os arquivo que estiverem atribuídos ao **default.html**, através do `Front Matter`, serão automaticamente compilados, caso existam  arquivos que não estejam atribuídos e você deseja compila-los é só adicionar o `Front Matter` apontando diretamente para **compress.html**.

**Dica:** Para evitar possíveis frustrações, sugiro que sejam feitos testes com o servidor local antes de subir o update para repositório em produção.

Concluindo, espero que tenham gostado do post, como citei as aplicações são simples, caso surjam dúvidas deixe-as nos comentários e não esqueçam de compartilhar nas redes sociais.
