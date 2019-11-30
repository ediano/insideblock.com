---
layout: post
title: Heading tags aprenda a otimizar melhor o Blogger
datePublished: "2016-09-28 23:15:00"
tags: [blogger, seo, otimização]
category: dev
image: /assets/media-image/heading-tags-aprenda-otimizar-melhor-o/heading-tags-aprenda-otimizar-melhor-o.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

As Heading tags ou tags de cabeçalho, são usadas para diferenciar o título ou subtítulo do restante do conteúdo de uma página. Elas são responsáveis por informar aos motores de buscas, qual parte de um conteúdo é mais importante.

As tags de cabeçalhos são classificadas de 1 a 6, quanto menor o número dela mais importante ela vai ser (H1), e quanto maior o valor menos importante (H6).

Os buscadores usa as heading tags para otimizar os assuntos mais importantes, se você pular alguma dessa marcações o buscador não vai entender o título do assunto e vai buscar a próxima heading tag.

## Como devemos usar
A tag H1 pode ser adiciona apenas uma vez por página, e como o seu blog tem um nome seria muito interessante guarda a tag H1 para destacar o cabeçalho do mesmo.A tag H2 e as demais pode ser repetida várias vezes em um página, mas reserve a H2 para título de post e páginas, se tiver um gadget na lateral do blog use ela para destacar o título do gadget também. A H3 pode ser usada para destacar subtítulos dentro do conteúdo, porém se quiser usar à H2 não tem problema. Para as demais tags, de H4 à H6 elas podem ser usada para destacar títulos de comentários, ou em marcação simples entre outros.

<figure class="image">
<img alt="Heading Tags H1 a H6" src="/assets/media-image/heading-tags-aprenda-otimizar-melhor-o/heading.jpg">
<figcaption>Heading Tags H1 a H6. (Imagem: Inside Block)</figcaption>
</figure>

## Aviso de tags de títulos e tags de conteúdos
Como as tags H1 a H6 são usadas para destacar títulos e subtítulos, jamais use elas para destacar o conteúdo completo, para conteúdos use a tag *<p>* ou não use nada deixe o texto livre, isso faz toda a diferença para que os buscadores otimize melhor seus artigos.

## Como usar as Heading tags no Blogger
Alguns templates do Blogger, essas estruturas estão desorganizadas, por isso é importe que você faça as marcações necessárias dentro do texto que você está escrevendo.

Através do próprio “*Editor de postagens*” do Blogger, você pode indicar um texto como sendo o de maior importância, dentro do “Editor” tem um botão geralmente ele está marcado como “*Normal*”, clique no mesmo e escolha entre as opções.

```html
<h2> Título - H2 </h2>
<h3> Subtítulo - H3 </h3>
<h4> Título secundário - H4 </h4>
```

**Normal** - Não marca nada, este é para o restante do conteúdo

Todas os texto que você marcar com essas tags serão, otimizados pelos buscadores com as classificações de importância.

## Personalizar Heading tags com CSS
Os templates do Blogger tem a tag H2 marcada para os títulos do Widget e data das postagens, se você marca um texto dentro do conteúdo como “Título” pode ser que o mesmo fique com o estilo do Widget e da data do post, por isso fizemos um CSS para que você aplique um estilo diferenciado dentro do conteúdo.

1. Acesse o *Painel do Blogger\Modelo\Editar HTML*

2. Procure pela seguinte tag `]]></b:skin>`

3. Adicione o código abaixo acima da tag encontrada

```css
/*----estilos heading tag h2-------*/
.post-body h2 {
    color: #4285f4;/* edite cor da fonte */
    font-size: 22px;/* edite tamanho da fonte */
    display: block;/* edite um título por linha ou delete */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);/* edite borda abaixo do título */
}

/*----estilos heading tag h3-------*/
.post-body h3 {
    color: #9e9e9e;/* edite cor da fonte */
    font-size: 19px;/* edite tamanho da fonte */
    display: block;/* edite um título por linha ou delete */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);/* edite borda abaixo do título */
}

/*----estilos heading tag h4-------*/
.post-body h4 {
    color: #455a64;/* edite cor da fonte */
    font-size: 16px;/* edite tamanho da fonte */
    display: block;/* edite um título por linha ou delete */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);/* edite borda abaixo do título */
}
```

Existem várias técnicas para melhorar a otimização do blog para os motores de busca, uma delas é <a href="http://www.insideblock.com/blog/como-verificar-e-indexar-todas-as.html" target="_blank">indexar as páginas do blog para o Google</a>, espero que este tutoria ajude suas páginas tanto para facilitar a leitura dos clientes leitores quanto para o as metas de SEO.