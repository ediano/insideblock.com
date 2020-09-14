---
layout: post
title: "Configurando ESLint e Prettier em projetos ReactJS com TypeScript"
description: >-
  Mais um artigo sobre ReactJS, hoje iremos aprender como podemos configurar o ESLint e o Prettier para padronizar nossos código.
datePublished: "2020-09-07 07:00:00"
dateModified: "2020-09-07 07:00:00"
tags:
  - reactjs
  - dev
  - typescript
category:
  - reactjs
image: /configurando-eslint-e-prettier-em-projetos-reactjs-com-typescript.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Fala dev, este é mais um artigo sobre ReactJS, e hoje nós vamos mostrar, como você pode configurar o ESLint e o Prettier, para montar uma padronização de código, usando ReactJS com TypeScript. Fique atento, as configurações que vamos mostrar aqui, pode mudar muito rápido, portanto recomendamos que consulte as documentações oficiais das tecnologias apresentadas, quando surgir dúvidas que não estiver explicados por aqui.

## Construindo aplicação ReactJS

Para iniciar a configuração, primeiro vamos iniciar um projeto ReactJS com um template TypeScript, este ponto é muito importante, pois vamos aproveitar da própria CLI do React, para configurar o projeto.

```bash
yarn create react-app react-com-eslint --template=typescript

#or

npx create-react-app react-com-eslint --template=typescript
```

Note que estamos criando um projeto com o nome **react-com-eslint**, o comando que vem depois do nome do projecto, informa a CLI que iremos adicionar um template TypeScript. agora já podemos entrar dentro do diretório do projeto, para instalar as dependências do ESLint, entretanto antes de iniciarmos essa parte, precisamos remover a configuração padrão do ESLint que já vem instalado no ReactJS.

Acesse o arquivo `package.json` e remova o trecho de código abaixo, não esqueça de salvar as alterações.

```text
"eslintConfig": {
  "extends": "react-app"
},
```

Depois das Linhas removidas, já estamos pronto para instalar as dependências do ESLint,  abra o terminal na raiz do projeto e execute o seguinte comando.

```bash
yarn add eslint -D

#or

npm install eslint -D
```

Note que estamos usando o **-D** para instalar o ESLint como dependência de desenvolvimento, pois iremos usar ele apenas quando estivermos escrevendo nossos códigos.

## Iniciando o ESLint

Agora que o ESLint já está instalado, vamos iniciar as configurações, ainda na raiz do projeto execute o seguinte comando.

```bash
yarn eslint --init

#or

 npm eslint --init
```

Em seguida você deve selecionar exatamente as mesmas configurações abaixo.

#### How would you like to use ESLint? …

```text
  To check syntax only
  To check syntax and find problems
▸ To check syntax, find problems, and enforce code style
```

#### What type of modules does your project use? …

```text
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

#### Which framework does your project use? …

```text
▸ React
  Vue.js
  None of these
```

#### Does your project use TypeScript? ‣ No / Yes

```text
‣ Yes
```

#### Where does your code run? …

```text
‣ ✔ Browser
✔ Node
```

#### How would you like to define a style for your project? …

```text
▸ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
```

#### Which style guide do you want to follow? …

```text
▸ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
```

#### What format do you want your config file to be in? …

```text
  JavaScript
  YAML
▸ JSON
```

Este ponto é um dos mais importantes, o próprio ESLint vai sugerir a instalação de algumas dependências de configuração, independentemente se você estiver usando yarn ou npm simplesmente aceite a instalação nesta opção.

#### Would you like to install them now with npm? ‣ No / Yes

```text
▸ Yes
```

No caso do yarn, depois de instalar as dependências, será necessário remover o arquivo `package-lock.json`, em seguida execute apenas `yarn`, para que o nosso arquivo `yarn.lock` seja atualizada com as devidas dependências.

## Alterando o arquivo .eslintrc.json

Agora precisamos adicionar algumas alterações no arquivo `.eslintrc.json`, essas alterações serão necessárias para que o ESLint trabalha em conjunto com TypeScript, certifique-se de que esses trecho de códigos tenha exatamente a mesma estrutura ou algo parecido.

```js
"extends": [
  "plugin:react/recommended",
  "airbnb",
  "plugin:@typescript-eslint/recommended",
  "prettier/@typescript-eslint",
  "plugin:prettier/recommended"
],
```

```js
"plugins": [
  "react",
  "react-hooks",
  "@typescript-eslint",
  "prettier"
],
```

```js
"rules": {
  "prettier/prettier": "error",
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/jsx-filename-extension": [ 1, {"extensions": [".tsx"]} ],
  "import/prefer-default-export": "off",
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      "ts": "never",
      "tsx": "never"
    }
  ]
},
"settings": {
  "import/resolver": {
    "typescript": {}
  }
}
```

Observe que apesar de termos adicionar algumas configurações do **Prettier**, ainda não fizemos a instalação das dependências, isso é o que vamos fazer agora.

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier eslint-import-resolver-typescript -D

#or

npm install prettier eslint-config-prettier eslint-plugin-prettier eslint-import-resolver-typescript -D
```

Observe que além do Prettier, estamos adicionando mais uma dependência do typescript `eslint-import-resolver-typescript`, por padrão o ESlint não entende arquivos *.ts* e *.tsx*, por isso se faz necessário adicionar essa dependência que já deixamos configurada no nosso arquivo `.eslintrc.json` na sessão **settings**.

## Corrigindo configuração do Prettier

Por padrão algumas configurações do Prettier, consegue subscrever algumas regras do ESLint, por esse motivo iremos criar um novo arquivo da raiz do nosso projeto chamado `prettier.config.js`, com o arquivo criado adicione as seguintes configurações.

```js
module.exports = {
  singleQuote: true,
  trailingComa: "all",
  allowParens: "avoid"
}
```

Pronto, agora só falta uma coisinha, o ESLint fica ouvindo todos os nossos diretórios e arquivos dentro do projeto, porém alguns arquivos não serão necessário que ele verifique, por isso vamos ignorar alguns deles, ainda na raiz do projeto crie um novo arquivo chamado `.eslintignore`, em seguida adicione as seguintes configurações.

{% raw %}
```js
**/*.js
node_modules
build
```
{% endraw %}

Agora sim, todas as nossas configurações estão concluídas.

## Conclusão

Lembrando que não precisamos decorar todos essas regras, pois isso não faz muito sentido, pensando que essas configurações mudam constantemente de projeto para projeto, neste caso recomendamos que faça anotações, para usar posteriormente como base de novas configurações.

Bom eu vou ficando por aqui, eu espero que todos vocês tenham gostado deste artigo, qualquer dúvida pode deixar nos comentários, e não esqueça de compartilhar nas redes sociais com seus amigos.
