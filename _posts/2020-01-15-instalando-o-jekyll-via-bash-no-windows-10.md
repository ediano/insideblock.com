---
layout: post
title: 'Instalando o Jekyll via Bash no Windows 10'
description: >-
  Para os apaixonados em desenvolvimento de projetos digitais, o Jekyll pode ser a melhor opção open source.
datePublished: '2020-01-15 07:00:00'
dateModified: '2020-01-15 07:00:00'
tags:
  - bundler
  - ruby
  - bash
  - windows
  - jekyll
category: jekyll
image: /instalando-o-jekyll-via-bash-no-windows-10.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Olá, caros leitores! Este é mais um artigo sobre Jekyll. Já postamos aqui, anteriormente sobre “[Performance web: Comprimir HTML com Jekyll](https://insideblock.com/blog/performance-web-comprimir-html-com-jekyll/){:rel="noopener"}{:target="_blank"} e [Desativar links automáticos do Markdown com Jekyll](https://insideblock.com/blog/desativar-links-automaticos-do-markdown-com-jekyll/){:rel="noopener"}{:target="_blank"}”. A partir de agora, iremos aprender uma pouco mais sobre essa tecnologia incrível. Mas dessa vez iremos partir do início, instalando e configurando o nosso servidor.

Como sistema operacional para rodar o nosso servidor Jekyll, iremos usar o subsistema do Ubuntu no Windows 10. Se você é um usuário iniciante, sem muita experiência com a tecnologia, não se preocupe, iremos fazer o passo a passo completo de todas as instalações para que você não se perca durante o procedimento.

Informativo: Este artigo é voltado para os usuários sem muita experiência, e com isso não iremos fazer o uso de comando via terminal, exceto durante o processo de instalação dos pacotes e das aplicações necessárias.

## Pacotes opcionais
Antes de iniciarmos a instalação do Jekyll, recomendamos que instale os seguintes software.

- Baixe e instale o [“Git”](https://git-scm.com){:rel="nofollow noopener noreferrer"}{:target="_blank"}
- Baixe e instale o [“VS Code”](https://code.visualstudio.com){:rel="nofollow noopener noreferrer"}{:target="_blank"} - [Visual Studio Code: Novo editor de códigos da Microsoft](https://insideblock.com/blog/visual-studio-code-novo-editor-de/){:rel="noopener"}{:target="_blank"}

Ativar o comando Bash no Windows
Para iniciarmos a ativação do comando Bash, certifique se o seu sistema operacional esteja atualizado com a última versão.

Acesse as **Configurações do Windows \ Atualização e Segurança \ Verificar se há atualizações**.

Agora abra o **Painel de Controle do Windows \ Desinstalar um programa \ Ativar ou desativar recursos do Windows**.

Na janela de recursos do Windows ative a opção **“Subsistema de Windows para Linux”**. Clique em OK e aguarde a ativação do pacote do Linux e reinicie o sistema se necessário.

## Instalação dos pacotes Ubuntu
Inicie a Loja de aplicativos do Windows e pesquise por Ubuntu ou acesse [este link](https://www.microsoft.com/pt-br/p/ubuntu/9nblggh4msv6?){:rel="nofollow noopener noreferrer"}{:target="_blank"}, e instale a aplicação do Ubuntu. Feito isso, no menu iniciar pesquise por Bash ou Ubuntu, abra o aplicativo e siga as orientações na tela de comando para ativar um usuário e uma senha, (O usuário ea senha registrado na tela de comando não afetará o usuário do sistema operacional Windows).

Atenção: Em alguns caso esta parte da aplicação pode levar vários minutos, dependendo da velocidade de internet e do seu computador, sem contar que a cada novo comando ou nova configuração pode levar algum tempo para finalizar.

### Sudo Update
Agora que já foi concluído o processo de configuração do Ubuntu, você pode escolher em continuar usando o próprio terminal do Ubuntu ou inicie o “Windows PowerShell” em seguida executar o comando “bash” (não necessário como administrador).

Dentro do terminal execute o seguinte comando, para atualizar o sudo.

```bash
sudo apt-get update -y && sudo apt-get upgrade -y
```

Aguarde a atualização, ao concluir prossiga para o próximo passo.

**OBS:**  A cada novo comando com ‘sudo’, será solicitado a senha registrada anteriormente.

## Instalação do Ruby
Ainda com o terminal aberto digite o comando e tecle Enter, para instalar o Ruby eo Ruby Desenvolvimento.

```bash
sudo apt-get install ruby-full && sudo apt-get install ruby-dev build-essential
```


## Instalação do Bundler e Jekyll
Agora vamos instalar o Bundler e o Jekyll.

```bash
sudo gem install bundler && sudo gem install bundler jekyll
```

Pronto agora todos os pacotes já estão instalados, vamos partir para o próximo passo.

## Criar um novo projeto
Para criar um novo projeto no Jekyll é bem simples, veja o exemplo abaixo.

O próximo comando permite a criação de uma projeto chamado “my_blog”

```bash
jekyll new my_blog
```

Agora acesse o repositório do projeto.

```bash
cd my_blog
```

Depois de criar o projeto, podemos iniciar o mesmo de forma offline com o “Bundler”, execute o próximo comando.

```bash
bundle exec jekyll serve
```

Agora abra o navegador de sua preferência e digite o seguinte endereço **http://localhost:4000**.

## Repositório clonado
Caso você inicie o servidor de um repositório clonado e o mesmo apresente erros, sugerimos que respeita os seguintes comandos de dentro do repositório para instalar as dependências e atualizar os arquivos Gemfile e Gemfile.lock.

```bash
sudo gem install bundler && sudo bundle install
```

```bash
sudo git add Gemfile Gemfile.lock
```

Ao concluir, novamente execute o comando para iniciar o servidor.

```bash
bundle exec jekyll serve
```

Agora acesse o endereço **http://localhost:4000** do seu navegador.

## Conclusão
Bom pessoal, por enquanto foi isso. Não se preocupe com a quantidade de informações que você acabou de ver, nos próximos artigos irei mostrar como funciona a estrutura do Jekyll. Para acelerar o desenvolvimento do nosso projeto, nosso repositório será hospedado no GitHub Pages.

Este foi o primeiro de muitos, em breve mais disponível.
