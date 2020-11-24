---
layout: post
title: "Lidando com imagens no Next.js"
description: >-
  Você já entendeu como o componente de ‘image’ do Next.js funciona, bom hoje estou aqui para falar exatamente sobre isso.
datePublished: "2020-11-21 07:00:00"
dateModified: "2020-11-21 07:00:00"
tags: [nextjs, reactjs, dev, typescript, javascript]
categories: [nextjs, dev]
image: /lidando-com-imagens-no-nextjs.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

A partir da versão 10.0 do Next.js, ele vai contar com suporte oficial para lidar diretamente com imagens, esta sem dúvida era uma das funcionalidades mais pedida pela comunidade, agora que ela já está disponível para uso, vamos entender como ela funciona.

Para este artigo, vou considerar que você já tenha um App Web com Next.js v10.0+, rodando em sua máquina, qualquer dúvida você pode seguir a [documentação oficial do Next.js](https://nextjs.org/learn/basics/create-nextjs-app/setup){:target="_blank"}{:rel="nofollow noopener noreferrer"}.

## Como funciona

Se você por um desenvolvedor Next, já deve estar familiarizado com a recomendação da biblioteca para salvar as imagens na pasta `public`, o componente de imagens do Next funciona praticamente da mesma forma, para que ele tenha um bom funcionamento, as imagens ainda deve ser mantida no diretório recomendado.

## Usando componente de imagem

Para facilitar a usabilidade e a otimização de imagens, o Next desenvolveu um componente padrão do React. E este componente pode ser importado de dentro do próprio Next, veja o exemplo.

```tsx
import React from 'react'
import Image from 'next/image'

const Home = () => {
 return (
   <>
     <Image
       src="./"
       alt="My Image"
       width={300}
       height={300}
     />
   </>
 )
}

export default Home
```

Podemos notar aqui em importação do componente é bem simples, e ele é composto por até três propriedades obrigatórias, `src`, `width`, `height`.

No exemplo acima, acabamos de informar ao componente, que ele vai ter uma imagem com largura e altura de 300px, dessa forma, o componente evita que a imagem tenha um tamanho superior a 300px.

Se por algum motivo você não queira que a imagem tenha um tamanho fixo, podemos passar a propriedade `unsized={true}` para o componente, dessa forma a imagem não vai seguir a regra dos valores fixos, e vai passar até o seu tamanho original.

```tsx
<Image
 src="My Image"
 unsized={true}
/>
```

## Imagens de domínios externos

Também é possível otimizar imagens hospedados em sites externos, para que isso seja possível primeiro devemos habilitar o endereço padrão das imagens, crie o arquivo `next.config.js` na raiz do projeto, em seguida adicione as configurações.

```js
module.exports = {
 images: {
   domains: ['i.imgur.com'],
 },
}
```

Note que o domínio não pode conter HTTP ou HTTPS no endereço, exceto em casos em que for usar provedores de nuvem para otimizar as imagens.

Para saber mais sobre provedores de nuvem para otimização de imagens, veja a [documentação oficial](https://nextjs.org/docs/basic-features/image-optimization){:target="_blank"}{:rel="nofollow noopener noreferrer"}.

```tsx
<Image
 src='https://i.imgur.com/aUTOLz2.png'
 alt="My Image"
 width={300}
 height={300}
/>
```

## Resolvendo problemas com importação de imagens

Como citado anteriormente, o próprio Next recomenda que os arquivos de imagens, fiquem salvo na pasta `public`, porém eu não acho que isso seja uma boa prática, e percebo que às vezes os nossos arquivos ficam um pouco desorganizado, para facilitar ainda mais o desenvolvimento, podemos importar imagens de outros diretórios, como ajuda de bibliotecas de terceiros.

### Instalando a biblioteca next-images

Primeiro vamos começar instalando a biblioteca `next-images`.

```bash
yarn add next-images
```

ou

```bash
npm install --save next-images
```

Adicione as configurações da biblioteca no arquivo `next.config.js`.

```js
const withImages = require('next-images')
module.exports = withImages({
 esModule: true
})
```

Caso o seu projeto Next esteja usando TypeScript, acrescente a tipagem da biblioteca no arquivo `next-env.d.ts`.

```ts
/// <reference types="next-images" />
```

### Importando imagens

Depois das configurações realizadas, estamos pronto para importar as imagens, como exemplo, vou usar um pasta chamada `assets` localizada dentro do diretório `src`.

```tsx
import React from 'react'
import Image from 'next/image'

import img from '../assets/img.jpeg'

const Home = () => {
 return (
   <>
     <Image
       src={img}
       alt="My Image"
       width={300}
       height={300}
     />
   </>
 )
}

export default Home
```

### Image background com styled-components

Se você estiver usando o `styled-components` para processar o CSS das páginas, você também terá que fazer uso da biblioteca que instalamos anteriormente `next-images`, pois da mesma forma que um Next não suporta importações de imagens, o styled-components com Next também não.

```ts
import styled from 'styled-components'

import img from '../../assets/img.jpeg'

export const Container = styled.div`
 background: url(${img}) no-repeat;
`
```

Agora que já entendemos como lidar com imagens dentro do Next, podemos colocar o nosso projeto em produção.

## Conclusão

Devs, este foi mais um artigo sobre Next.js, meu pretinho do trazer mais conteúdos como este para dentro do blog, porém gostaria muito de saber sobre a opinião de vocês, do quê achou sobre o artigo, o que eu poderia melhorar e o que vocês esperam encontrar aqui dentro.

Eu vou ficando por aqui, não esqueça de deixar um comentário e compartilhar nas redes sociais com seus amigos.
