---
layout: post
title: Como desativar a seleção de texto no Blogger
datePublished: "2016-07-21 14:05:00"
tags: [blogger, segurança]
category: js
image: /static/blog/como-desativar-selecao-de-texto-no.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

A maioria dos blogueiros, procuram sempre uma forma de adquirir mais segurança ao seus blogs, boa parte deles procuram como evitar o plagio (copia do original), entre outros crimes cometidos na internet, unas das formas mais fácil é com a instalação de código de segurança em HTML dentro de seus Templates.

Onde o código tem a função de desativar as seleções de texto do seu blog, e evitando que seus artigos seja selecionados para copia, e publicado em qualquer outro blog.

Se você publica tutoriais entre outros posts em seu blog, onde seus visitantes tenha que copiar algum tipo de código ou texto como neste artigo, não recomendamos que instale este código em seu Template.

Recomendamos que antes de fazer qualquer alteração em seu template que faça o *BACKUP* do próprio.

1. Acesse o Painel do Blogger, escolha o blog que você deseja instalar, selecione a opção "Modelo" e clique em "Editar HTML".

2. Agora procure pelo código abaixo. 

```html
</head>
```

{:start="3"}
3. Adciones o código js acima do código encontrado `(</head>)`.

```html
<script type="text/javascript">
    function disableSelection(target) {
        if (typeof target.onselectstart != "undefined") target.onselectstart = function() {
            return false 
            }
            else if (typeof target.style.MozUserSelect != "undefined") target.style.MozUserSelect = "none"
                else target.onmousedown = function() {
                    return false
                }
        target.style.cursor = "default"
    }

    function click() {
        if (event.button == 2 || event.button == 3) {
            oncontextmenu = "return false";
        }
    }
    document.onmousedown = click document.oncontextmenu = new Function("return false;")
</script>
```

{:start="5"}
5. Procure pelo seguinte código.

```html
</body>
```

{:start="6"}
6. Agora adcione o segundo código js abaixo do código encontrado.

```html
<script type="text/javascript">
    disableSelection(document.body) //disable text selection on entire body of page
</script>
```

O código instalado em seu Template desativa, qualquer tipo de seleção de texto em seu blog, mesmo que eles esteja ou não dentro de seus artigos publicados.