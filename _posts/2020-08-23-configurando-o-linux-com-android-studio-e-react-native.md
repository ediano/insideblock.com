---
layout: post
title: "Configurando o Linux com Android Studio e React Native"
description: >- 
  Hoje iremos aprender como podemos configurar uma distro Linux, para rodar qualquer projeto React Native no Android Studio.
datePublished: "2020-08-23 07:00:00"
dateModified: "2020-08-23 07:00:00"
tags:
  - react-native
  - reactjs
  - javascript
  - android
  - dev
  - nodejs
category:
  - react-native
image: /configurando-o-linux-com-android-studio-e-react-native.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Eu tive muitas dificuldade para conseguir emular o primeiro projeto com React Native no Android Studio usando o uma distro Linux, por isso estou aqui, para compartilhar de uma vez por todas como podemos fazer isso da forma mais simples possível.

Vou usar como base a própria documentação do React Native, pois ela é considerada simples, porém existem alguns segredinhos ocultos, meu ambiente de teste é o Ubuntu 2004, estou usando como terminal Oh My ZSH. Este artigo também pode ser válido para outras distros Linux como Debian, Linux Mint, Kubuntu entre outros, considerando que as configurações não mudam muito uma da outra.

## Node.JS

Em primeiro momento você tem que estar com Node.JS instalado em sua máquina, eu recomendo que use a versão LTS, para garantir uma maior estabilidade.

[Node.JS LTS](https://github.com/nodesource/distributions/blob/master/README.md){:target="_blank"}{:rel="nofollow noopener noreferrer"}

Se preferir você também pode fazer o uso do [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable){:target="_blank"}{:rel="nofollow noopener noreferrer"}

## Java SDK

O React Native requer uma instalação do Java SDK, anteriormente além do Java SDK era necessário adicionar uma variável de ambiente no sistema, porém isso não é mais necessário, então vamos partir diretamente para a instalação.

```bash
sudo add-apt-repository ppa:openjdk-r/ppa \
&& sudo apt update \
&& sudo apt install -y openjdk-8-jdk \
&& sudo apt install -y gcc-multilib lib32z1 lib32stdc++6
```

Note que o comando instala a SDK do Java 8, porém *dependendo da data em que você estiver vendo este artigo esta versão pode não ser mais um requisito, por isso recomendo que veja ligeiramente a documentação oficial do [React Native](https://reactnative.dev/docs/environment-setup){:target="_blank"}{:rel="nofollow noopener noreferrer"}*, veja que adicionamos alguns pacotes que muita das vezes é necessária para emular o projeto.

## Android Studio

Caso você esteja utilizando o Ubuntu assim como eu, recomendo que instale o Android Studio a partir da Snap Store, isso porque a instalação é muito simples e já vem automaticamente com algumas dependências instaladas.

```bash
# Pacotes Snap
sudo snap install android-studio --classic
```

Mas caso seu sistema não tenha suporte aos pacotes Snap, você pode ativar com o seguinte comando.

```bash
sudo apt install snapd \
&& sudo snap install snap-store
```

## Variáveis de Ambiente

Este ponto é um dos mais importantes é aqui que acontece em o pulo do gato, de acordo com a própria documentação do React Native, é necessário que adicionamos algumas variáveis de ambiente no nosso sistema, para que isso funcione de forma correta você primeiro precisa entender que tipo de terminal está usando atualmente.

No meu caso estou usando o Oh My ZSH, por este motivo, o meu arquivo de configuração do termina é o `~/.zshrc`, como esta opção é relativa não dá para saber exatamente qual terminal você pode estar, caso você não tenha certeza você pode tentar o `~/.bashrc` ou `~/.bash_profile`.

Então agora o que temos que fazer é abrir este arquivo de configuração em qualquer editor de texto, no meu caso estou usando o VS Code como padrão, então em meu termina eu executo o seguinte comando.

```bash
code ~/.zshrc
```

 Agora copie todas as variáveis de ambiente abaixo e cole no arquivo que irá abrir no editor, recomendo que adicione essas variáveis no final do arquivo.

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## Configurando o Android Studio

Se você conseguiu chegar até aqui sem nenhum problema podemos iniciar a configuração do Android Studio.

1. Abra o Android Studio no seu sistema, seleção a opção **Do not import settings**, em seguida **Next**.
2. Opção que perguntar o tipo de instalação clique em **Next**.
3. Será pergunta qual tema você prefere usar, escolha o de sua preferência e clique em **Next**.
4. Agora chegou uma das partes mais importantes, é onde você deve selecionar a SDK para instalar, selecione todas as opções possíveis nessa tela e clique em **Next**.

> Note: **Android SDK Location** deve ser um caminho parecido com, `/Home/username/Android/Sdk`, mesmo caminha da variável de ambiente **ANDROID_HOME**.

Quando a instalação do SDK finalizar clique em **Finish**, em seguida será aberta uma janela do Android Studio, com algumas opções, clique em **Configure > AVD Manager**, caso esta opção não esteja visível, tente redimensionar a janela do Android Studio.

A escolha do AVD é muito importante, no momento de criação deste artigo, o React Native tem suporte ao **Android 10 (Q)** e **Android SDK Platform 29**. Como citado anteriormente *dependendo da data em que você estiver vendo este artigo esta versão pode não ser mais um requisito, por isso recomendo que veja a documentação oficial do [React Native](https://reactnative.dev/docs/environment-setup){:target="_blank"}{:rel="nofollow noopener noreferrer"}*.

Ao finalizar o download do AVG, boa noite estúdio já está pronto para executar o primeiro projeto em React Native., vamos fazer um teste.

## Testando as configurações

Ainda de acordo com documentação do React Native, caso você tenha uma versão global instalada da mesma é recomendado que desinstale, pois ela pode apresentar algumas problemas de permissões, para garantir que o teste seja bem sucedido, reinicie seu sistema pelo menos uma vez.

Depois de ter reiniciado o sistema, abra o terminal e execute o seguinte comando.

```bash
npx react-native init nome-do-projeto
```

Depois de ter finalizado todo o processo de download abra a pasta do projeto.

```bash
cd nome-do-projeto/
```

Em seguida execute o comando.

```bash
# NPM
npm start

#or Yarn
yarn start
```

Abra um segundo terminal no mesmo projeto e execute o comando.

```bash
#NPM
npm run android

#or Yarn
yarn android
```

Considerando que seja a primeira vez que esteja iniciando projeto, este processo será bem lento, pois o React Native irá realizando algumas configurações e baixar algumas dependências de projeto.

## Conclusão

Bom eu espero que todos vocês tenham curtido este artigo, e que tenha entendido de fato o que é necessário para executar um projeto React Native em uma distro linux.

Caso surja alguma dúvida ou tenha algum problema, por favor não exite em deixar nos comentários, pois dessa forma eu posso lhe ajudar.

Eu vou ficar no pretinho, não esqueça de compartilhar esse artigo nas redes sociais com seus amigos.
