---
layout: post
title: Resumo de postagem automático com imagem para Blogger
date: "2016-09-17 19:01:00"
tags: [blogger, dicas, otimização]
category: dev
image: /assets/media-image/resumo-de-postagem-automatico-com.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Você já deve ter observado que alguns blogs, mostram somente o resumo das postagens com um botão leia mais ou mais informações, e quando clicamos em um desses botões a postagem abre completamente, hoje vamos lhe ensinar a adicionar este resumo em todos os post automaticamente como imagem de exibição e sem javascript.

Fazer este tipo de alteração no blog, melhora a navegação e a experiência dos leitores, sem contar que ele ficar mais amigável tanto para os motores de busca quanto para os usuários.

Antes de iniciarmos recomendo que faça o backup do template. Abra o *Painel do Blogger\Modelo\Fazer backup/Restaurar\Fazer download do modelo completo*, ao baixar o arquivo .xml na mesma janela clique em “*Fechar*” e em “*Editar HTML*”.

## Primeiro vamos adicionar o HTML
Pressione as teclas “Ctrl+F” e procure pela tag

```html
<data:post.body/>
```
Geralmente é encontrado dois destes, delete o segundo e substitua por um dos código abaixo. Atenção: Temos dois modelo de resumo, escolha uma das opções que melhor funcione no seu Blog.

### Resumo para posts com imagens

```html
<b:if cond="data:blog.pageType != &quot;item&quot;">
    <b:if cond="data:blog.pageType != &quot;static_page&quot;">
        <div class="entry-summary" rel="entry-summary">
            <b:if cond="data:post.thumbnailUrl">
                <b:else/>
                <a expr:href="data:post.url">
                    <img class="post-thumbnail" expr:alt="data:post.title" expr:src="data:post.firstImageUrl" />
                </a>
            </b:if>
            <div class="snippet" rel="text">
                <data:post.snippet/>
            </div>
        </div>
        <div class="jump-link">
            <a expr:href="data:post.url" expr:title="data:post.title">
                <data:post.jumpText/>
            </a>
        </div>
        <b:else/>
        <data:post.body/>
    </b:if>
    <b:else/>
    <data:post.body/>
</b:if>
```

### Resumo para posts sem imagens

```html
<b:if cond="data:blog.pageType != "item"">
    <b:if cond="data:blog.pageType != "static_page"">
        <div>
            <b:if cond="data:post.thumbnailUrl">
                <b:else/>
                <a expr:href="data:post.url">
                    <img class="post-thumbnail" expr:alt="data:post.title" expr:src="data:post.thumbnailUrl" width="72px" height="72px" />
                    <b:else/>
                    <img class="post-thumbnail" alt="no image" src="http://lh4.ggpht.com/_u7a1IFxc4WI/TTjruHJjcfI/AAAAAAAAAk0/i11Oj6i_bHY/no-image.png" width="72px" height="72px" />
                </a>
            </b:if>
            <div class="snippet" rel="text">
                <data:post.snippet/>
            </div>
        </div>
        <div class="jump-link">
            <a expr:href="data:post.url" expr:title="data:post.title">
                <data:post.jumpText/>
            </a>
        </div>
        <b:else/>
        <data:post.body/>
    </b:if>
    <b:else/>
    <data:post.body/>
</b:if>
```

## Segundo, agora vamos adicionar o CSS
Para aplica um pouco de estilo, procure pela seguinte tag

```html
]]></b:skin>
```

Adicione o código abaixo acima da tag encontrada.

```css
.entry-summary {
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
    padding: 5px
}

.entry-summary img.post-thumbnail {
    float: left;
    width: 250px;
    height: auto;
    padding: 0 10px 0 0;
    margin: 10px 0 0 0
}

.entry-summary .snippet {
    font-size: 16px;
    padding: 0;
    margin: 0;
    text-align: justify;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}

@media (max-width:600px) {
    .entry-summary .snippet {
        float: none;
        text-align: center
    }
    .entry-summary img.post-thumbnail {
        width: 100%;
        padding: 0
    }
}
```

Salve o modelo e veja como ficou a página inicial do seu blog, este código deve alterar todos os posts automaticamente, pode ser que alguns templates não aceite este código, o Blogger segue padrões e este é o padrão mais aceito pela plataforma.