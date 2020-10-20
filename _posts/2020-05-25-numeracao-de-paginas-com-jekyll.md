---
layout: post
title: 'Numeração de páginas com Jekyll'
description: >-
  Neste artigo iremos aprender como adicionar numeração de páginas em sites construídos com Jekyll.
datePublished: '2020-05-25 07:00:00'
dateModified: '2020-05-25 07:00:00'
tags: [jekyll, seo, dev, html]
categories: [jekyll, dev]
image: /numeracao-de-paginas-com-jekyll.png
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Bom, eu já postei alguns artigos aqui antes sobre [Jekyll](https://insideblock.com/jekyll){:rel="noopener"}{:target="_blank"}, desta vez iremos fazer uma melhoria na página home, para facilitar ainda mais a navegação dos usuários para encontrar postagens mais rapidamente.

Este processo requer quatro passos simples que consiste na alteração de 3 arquivos **Gemfile, config.yml e index.html/index.md** e a criação de uma arquivos `pagination.html` caso não exista. Então, vamos ao que nos interessa.

## Passo 1 (Gemfile)
Para começarmos, temos de adicionar o plugin `jekyll-paginate-v2` dentro do arquivo **Gemfile**, caso exista outro plugin de paginação sugiro remover o mesmo para evitar possíveis conflitos de compilação do Jekyll.

```ruby
group :jekyll_plugins do
 gem "jekyll-paginate-v2" #New plugin paginate
 gem "jekyll-sitemap"
 gem "jekyll-admin"
end
```

Em seguida deve executar o seguir comando para instalar e atualizar as dependências do novos plugin.

```bash
bundle install
```

## Passo 2 (config.yml)
Ao finalizar o passo 1, a aplicação Jekyll estará preparada para receber as configurações em nosso arquivo *config.yml*, adicione os seguinte código dentro do arquivos em qualquer posição.

```yml
# Outros códigos de configurações…

pagination:
 enabled: true # Habilita a paginação
 per_page: 12 # Quantidade de postagens por página
 permalink: '/blog/page/:num/' # URL que será exibido ao navegar entre as página
 sort_reverse: true # Habilita a opção de voltar à página anterior
 sort_field: 'date' # Filtra a paginação de acordo com a data de publicação das postagens
 title: 'Página :num' # Nome de exibição que será carregado no <title> do blog
 trail:
   before: 2 # Exibe o número de postagens a esquerda
   after: 2 # Exibe o número de postagens a direita

# Outros códigos de configurações…
```

Note que descrevemos cada linha com um breve comentários, com cada uma de suas funcionalidade.

Caso o servidor Jekyll esteja em execução, sugerimos que pare o mesmo e inicie novamente, pois a cada alteração realizada no arquivos **config.yml** o servidor deve ser reiniciado.

## Passo 3 (index.html/index.md)
Agora já podemos trabalhar no nosso arquivos `index`, aqui são dois passos simples, acompanhe a seguir.

Front Matter: Adiciona o seguinte código dentro da estrutura *Front Matter* do arquivo **index**.

```yml
---
layout: home
pagination:
 enabled: true
---
```

Include: Ainda dentro do arquivo **index** adicionar a seguinte linha, esta linha deve ser adicionado você deseja que a numeração de página seja exibida.

{% raw %}
```liquid
{% include pagination.html %}
```
{% endraw %}

## Passo 4 (pagination.html)
Agora dentro do diretório `includes` crie uma arquivo chamado `pagination.html`, em seguida adicione o código abaixo dentro do arquivo que acabou de criar.

{% raw %}
```html
<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
<ul class="pagination">
   {% if paginator.previous_page %}
   <li>
       <a class="previous" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">⇠</a>
   </li>
   {% endif %}

   {% if paginator.page_trail %}
   {% for trail in paginator.page_trail %}
       <li {% if page.url == trail.path %}class="selected"{% endif %}>
           <a href="{{ trail.path | prepend: site.baseurl }}" title="{{ trail.title }}">{{ trail.num }}</a>
       </li>
   {% endfor %}
   {% endif %}

   {% if paginator.next_page %}
   <li>
       <a class="next" href="{{ paginator.next_page_path | prepend: site.baseurl }}">⇢</a>
   </li>
   {% endif %}
</ul>

<span class="page_number">Página: {{ paginator.page }} de {{ paginator.total_pages }}</span>
{% endif %}
```
{% endraw %}

Agora pronto, seu blog já deve funcionar com uma nova paginação, a única coisa que você precisa fazer agora é adicionar um pouco de CSS para estilizar a exibição, optamos por não liberar um modelo de CSS aqui por questões de gosto pessoal.

## Conclusão
Bom, eu espero que todos vocês tenham entendido e curtido o que acabamos de realizar aqui. Caso você deseja ter acesso ao CSS para estilizar a paginação, ou caso tenha alguma dúvida é só deixar nos comentários.

Não esqueça de compartilhar nas redes sociais com seus amigos.
