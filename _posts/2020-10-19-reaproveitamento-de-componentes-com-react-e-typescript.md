---
layout: post
title: "Reaproveitamento de componentes com React e TypeScript"
description: >-
  Um dos ponto fortes do React é o reaproveitamento de componentes, uma vez construídos podemos reutilizá-los em vários pontos do projeto.
datePublished: "2020-10-19 07:00:00"
dateModified: "2020-10-19 07:00:00"
tags: [reactjs, dev, javascript, typescript]
categories: [reactjs, dev]
image: /reaproveitamento-de-componentes-com-react-e-typescript.png
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Existem várias formas e padrões de construir componentes React, cada um com um objetivo de solucionar um problema diferente. Entretanto, em alguns casos, criar um novo componente pode não ser a melhor solução para o momento, para entender como funciona todo um fluxo de componentização, vamos partir para o código.

Para este post, vou usar o Create React App com template TypeScript, em seguida vou eliminar alguns arquivos que não irei usar.

```bash
yarn create react-app reuse-of-components-with-react --template typescript

#or

npx create-react-app reuse-of-components-with-react --template typescript

```

## Exemplo 1 - Projeto inicial

Neste primeiro momento, vou criar um elemento HTML simples, um `h1` diretamente no arquivo **app.tsx**.

'./app.tsx'

```tsx
import React from 'react';

const App = () => {
  return (
    <h1>Hello World</h1>
  );
}

export default App;
```

Com este pequeno exemplo, vou fazer uma divisão, para entender melhor o que é componente. Neste cenário o elemento HTML `h1` pode ser considerado um componente, porém da forma que ele está representado, `h1` não é uma componente direto do React.

O elemento `h1` não tem nada demais, ele simplesmente renderiza um **Hello World** no navegador. Mas agora imagine, se fosse um elemento HTML, que poderia se repetir em vários pontos do arquivo **app.tsx**`, neste caso podemos criar uma função de componente, para reaproveitada o código.

## Exemplo 2 - Criando o primeiro componente

'./app.tsx'

```tsx
import React from 'react';

function MyComponentSpan(){
 return <span>Meu componente com o elemento HTML span</span>
}

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponentSpan />
   </>
 );
}

export default App;
```

OBS: Note que adicionei dois símbolos no `return` da função **App**, `<> … </>` ele são chamados de fragment e faz parte de uso padrão do React, geralmente utilizamos para envolver mais de um elemento que esteja no primeiro nível do `return`. Veja os exemplos de uso do fragment.

Não suportando pelo React

```tsx
return (
 <h1>Hello World</h1>

 <MyComponentSpan />
);

```

Suportado pelo React

```tsx
return (
 <>
   <h1>Hello World</h1>

   <MyComponentSpan />
 </>
);
```

Neste exemplo, criei uma função de componente chamado `MyComponentSpan`, note que ela inicia com a primeira letra maiúscula, este detalhe é muito importante para o React, pois dessa forma, ele consegue diferenciar componentes React de elementos HTML.

```tsx
function MyComponentSpan(){
 return <span>Meu componente com o elemento HTML span</span>
}
```

Observe também que para usar o componente `MyComponentSpan`, coloquei ele da mesma forma que um elemento HTML, o nome do mesmo assume a responsabilidades de um tag HTML padrão, entre os sinais de menor e maior `< … />`.

```tsx
<MyComponentSpan />
```

A partir deste ponto, podemos repetir o componente dentro da função **App**, quantas vezes for necessário.

## Exemplo 3 - Repetindo componentes

'./app.tsx'

```tsx
import React from 'react';

function MyComponentSpan(){
 return <span>Meu componente com o elemento HTML span</span>
}

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponentSpan />
     <MyComponentSpan />
     <MyComponentSpan />
   </>
 );
}

export default App;
```

Neste ponto o elemento HTML `h1` será renderizado uma única vez, enquanto o componente `MyComponentSpan` será renderizado 3 vez.

Apesar do componente `MyComponentSpan` pode ser reaproveitado, ele ainda não é o ideal para o nosso propósito, pois ainda estamos setando o valor do componente de forma estática, e para inserir um novo valor, teríamos que alterar o valor atual ou criar um novo componente.

Para lidar com isso, o React permite que passemos propriedades de um componente para o outro, vamos ver como isso fica na prática, fazendo uma pequena alteração no componente `MyComponentSpan`.

## Exemplo 4 - Adicionando propriedade

'./app.tsx'

```tsx
import React from 'react';

interface MyComponentSpanProps {
 title: string;
}

function MyComponentSpan({ title }: MyComponentSpanProps){
 return <span>{title}</span>
}

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponentSpan title="1 - Meu componente com o elemento HTML span" />

     <MyComponentSpan title="2 - Meu componente com o elemento HTML span" />

     <MyComponentSpan title="3 - Meu componente com o elemento HTML span" />
   </>
 );
}

export default App;
```

Como optei por usar TypeScript nos exemplos deste artigo, para receber dados de forma dinâmica através das `props`, primeiro temos que criar uma interface, para receber a tipagem das propriedades.

```tsx
interface MyComponentSpanProps {
 title: string;
}
```

Em seguida devemos informar a função de componente `MyComponentSpan`, que ela vai passar a receber parâmetros, e que o tipo dos parâmetros é igual a interface `MyComponentSpanProps`. Observe que no exemplo estou usando a desestruturação do JavaScript, pegando apenas a propriedade **title** e repassar para dentro do elemento `span`.

```tsx
function MyComponentSpan({ title }: MyComponentSpanProps){
 return <span>{title}</span>
}
```

Depois da estrutura pronta, podemos simplesmente usar o componente, inserindo a propriedade **title**, e passando um valor do tipo string para ele, da mesma forma que utilizamos atributos comuns dos elementos HTML.

```tsx
<MyComponentSpan title="1 - Meu componente com o elemento HTML span" />

<MyComponentSpan title="2 - Meu componente com o elemento HTML span" />

<MyComponentSpan title="3 - Meu componente com o elemento HTML span" />
```

Agora sim, o componente já pode ser utilizado de forma dinâmica, permitindo que o seu valor seja alterado de forma muito fácil, sem precisar construir um novo componente do zero.

Neste exemplo utilizamos apenas uma propriedade que recebe um valor do tipo string, porém um componente pode ter quantas propriedades for necessário, que podem receber números, valores booleanos, ou até mesmo um elemento HTML puro, ou um outro componente React.

Para entrarmos nesse nível, primeiro temos que melhorar a abstração do nosso componente, removendo de dentro do arquivo **app.tsx**, mas em vez de fazer somente isso, vou fazer algumas substituições, trocar o elemento `span` por uma `div` e renomear o componente para `MyComponent`.

Crie uma pasta *components* dentro de *src*;
Em seguida, crie um arquivo chamado `MyComponent.tsx` dentro da pasta *components*.

Agora vamos criar o código inicial do componente `MyComponent`.

## Exemplo 5 - Abstraindo componente

'./components/MyComponent'

```tsx
import React from 'react';

interface Props {
 title: string
}

const MyComponent = ({ title }: Props) => {
 return (
   <div>{title}</div>
 )
};

export default MyComponent;
```

O código inicial do novo componente não é grande coisa, mas vamos chegar lá, agora podemos importar o componente que acabamos de criar para dentro do arquivo **app.tsx**.

'./app.tsx'

```tsx
import React from 'react';

import MyComponent from './components/MyComponent'

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponent title="Meu componente com o elemento HTML" />
   </>
 );
}

export default App;
```

Note que temo algo parecido com o nosso segundo exemplo, exceto pela importação do arquivo externos, e da propriedade `title` que deixei como padrão para ser repassada para `MyComponent`.

Como eu tinha citado anteriormente, podemos passar qualquer valor através das propriedades para um componente, nós só precisamos especificar na interface do componente que irá receber a nova propriedade. Vamos ver como fica.

Para criar um cenaria mais próximo do real possível, vamos instalar o pacote de ícones para React.

```bash
yarn add react-icons

#or

npm i react-icons
```

Agora vamos ao arquivo **app.tsx** e importar alguns icons do pacote que acabamos de instalar, e passar para o nosso componente `MyComponent`, pela propriedade `icon`.

## Exemplo 6 - Passando componentes de ícone

'./app.tsx'

```tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

import MyComponent from './components/MyComponent'

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponent title="LinkedIn" icon={FaLinkedin} />
     <MyComponent title="GitHub" icon={FaGithub} />
     <MyComponent title="Twitter" icon={FaTwitter} />
   </>
 );
}

export default App;
```

Neste cenário se iniciamos nosso app React, ele deve apresentar um erro de compilação, isso porque não estamos esperando a propriedade `icon` no `MyComponent`, para que isso seja possível, vamos fazer algumas alterações nele.

'./components/MyComponent'

```tsx
import React from 'react';
import { IconBaseProps } from 'react-icons'

interface Props {
 title: string;
 icon?: React.ComponentType<IconBaseProps>;
}

const MyComponent = ({ title, icon: Icon }: Props) => {
 return (
   <>
     {title}

     {Icon && <Icon size={32} />}
   </>
 )
};

export default MyComponent;
```

Voltando as tipagens do TypeScript, na interface adicionei uma nova propriedade chamada `icon`, em seguida informei que ela não é obrigatória com o ponto de interrogação, e é do tipo `React.ComponentType<IconBaseProps>`, a tipagem genética `IconBaseProps`, vem do pacote de ícones que foi instalado anteriormente, isso é fundamental, pois, sem esta especificação nós continuaremos recebendo um erro de compilação ao iniciar o app.

Agora informamos a nossa função de componentes `MyComponent` que ela vai receber um novo parâmetro chamado `icon`, porém como este parâmetro também é um componente, e no React ele deve iniciar com primeira letra maiúscula, atribui um apelido a propriedade, em vez de usar `icon`, iremos usar `Icon`, com a primeira letra maiúscula.

```tsx
({ title, icon: Icon }: Props)
```

Para fazer uso da nova propriedade, optei por colocar ela abaixo de `title`, note que não podemos usá-la diretamente dentro do retorno da nossa função, por não se trata de uma propriedade obrigatório, primeiro devemos verificar se ela existe, neste caso estou usando um verificador ternário.

```tsx
{Icon && <Icon size={32} />}
```

Para fechar este artigo, precisamos adicionar mais uma propriedade no componente `MyComponent`, esta opção, também é opcional, porém como estamos mostrando todas as funcionalidade possíveis, vamos a mais uma exemplo.

## Exemplo 7 - Children

'./components/MyComponent'

```tsx
import React, { ReactNode } from 'react';
import { IconBaseProps } from 'react-icons'

interface Props {
 title: string;
 icon?: React.ComponentType<IconBaseProps>;
 children?: ReactNode;
}

const MyComponent = ({ title, icon: Icon, children }: Props) => {
 return (
   <>
     {title}

     {Icon && <Icon size={32} />}

     {children}
   </>
 )
};

export default MyComponent;
```

Nessa nova alteração, adicionamos uma nova propriedade `children` do tipo `ReactNode`, que vem diretamente dos pacotes React, e não é obrigatória, dessa forma o nosso componente também recebe ela como parâmetro e usamos ela em seguida.

Agora podemos voltar ao nosso arquivo **app.tsx** e replicar o componente, mas em vez de usar em *line*, iremos usar como um `div` HTML.

'./app.tsx'

```tsx
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

import MyComponent from './components/MyComponent'

const App = () => {
 return (
   <>
     <h1>Hello World</h1>

     <MyComponent title="LinkedIn" icon={FaLinkedin} />
     <MyComponent title="GitHub" icon={FaGithub} />

     <MyComponent title="Componente que recebe children">
       <h2>Finalizando artigo</h2>

       <MyComponent title="Twitter" icon={FaTwitter} />
     </MyComponent>
   </>
 );
}

export default App;
```

Agora sim, o componente está bem completo, note que usamos o componente `title="Componente que recebe children"` e repassamos para ele, outro componente do mesmo tipo, incluindo uma tag HTML `h2`, isso é perfeitamente suportado pelo React é o que torna ele muito flexível.

## Conclusão

Bom pessoal, este é o meu primeiro artigo detalhando uma das principais funcionalidades do React, quero continuar trazendo mais artigos como este, e seu feedback tem grande valor para nós. Responda nos comentários, oque você achou deste artigo?

Vou ficando por aqui, até mais.
