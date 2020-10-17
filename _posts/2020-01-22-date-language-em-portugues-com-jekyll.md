---
layout: post
title: 'Date language em português com Jekyll'
description: >-
  Melhore o visual do seu blog construído com o Jekyll, deixe ele com o idioma de sua preferência.
datePublished: '2020-01-22 09:00:00'
dateModified: '2020-01-22 09:00:00'
tags: [jekyll, dev, seo]
categories: [jekyll, dev]
image: /date-language-em-portugues-com-jekyll.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Fala pessoal, a nossa postagem de hoje vai ser bem rápida, ~~eu não sei até o momento de publicação deste post se eu vou ter lançado o curso de Jekyll~~, mas eu já tenho uma novidade para todos você.

Vocês devem ter notado que Jekyll por padrão segue a língua inglesa em muitas de suas aplicações, como no caso da exibição da data de publicação dos artigos, você também devem ter notado o Inside Block, exibe a data dos posts em português, mas como isso é possível?

Este método é muito simples, dentro do diretório **_include** crie um novo arquivo **data.html**, adicione o código a seguir dentro deste arquivo.

{% raw %}
```liquid
{% assign months = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro" | split: "," %}
{% assign month_number = include.date | date: "%-m" | minus: 1 %}
{{ include.date | date: "%-d" }} de {{ months[month_number] }} de {{ include.date | date: "%Y" }}
```
{% endraw %}

No nosso primeiro código, foi adicionado os 12 meses do ano do mesmo modo que se escreve em nosso idioma, observe que a menção do include dentro do arquivo faz referência a variável data dos artigos.

Agora que já fizemos a tradução, podemos aplicar o código para exibir a data em algum lugar. Se você estiver usando a lista de paginação do Jekyll em sua home, então você pode usar este código para exibir a data.

{% raw %}
```html
<time datetime="{{ post.date | date_to_xmlschema }}">
   {% include date.html date=post.date %}
</time>
```
{% endraw %}

Note que aqui usamos o formato de data  `date_to_xmlschema`, e o `include` está chamando o nosso arquivo data.html, você pode modificar o formato da data desde que esteja dentro das especificações da [documentação do jekyll](https://jekyllrb.com/docs/templates/){:rel="nofollow noopener noreferrer"}{:target="_blank"}, você também pode renomear o arquivo data.html, porém você também deve especificar o novo nome na chamada do include.

Caso você também prefira exibir a data dentro de uma página, como no caso do modo de leitura das postagens, você pode usar este outro código.

{% raw %}
```html
<time datetime="{{ page.date | date_to_xmlschema }}">
   {% include date.html date=page.date %}
</time>
```
{% endraw %}

Veja, que aqui modificamos apenas o tipo da entrada da variável de `post` para `page`, deste modo a data é exibida no formato especificado ao abrir uma postagem.

## Conclusão
Bom pessoal, este efeito é mais visual, é para deixar o nosso blog um pouco mais bonito para os leitores, em relação a técnicas de SEO ela não faz diferença, isso porque os dados estruturais usado por SEO é do tipo BlogPosting.

Por enquanto é isso, não esqueça de comentar e compartilhar nas redes sociais.
