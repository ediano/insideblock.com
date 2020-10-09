---
layout: post
title: Quebre a senha de qualquer computador Windows
datePublished: "2016-07-21 13:37:00"
tags: [windows, segurança]
category:
  - misc
image: /quebre-senha-de-qualquer-computador/quebre-senha-de-qualquer-computador.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Você já esqueceu a senha do seu computador alguma vez? Pois bem se sua resposta foi “sim”, este tutorial pode ser bem útil caso você não queira gastar dinheiro levando seu computador à uma assistência técnica para recuperar a senha ou fazer o backup e depois formatar. Pensando nisso nos aqui do Inside Block resolvemos te ajudar, para que você evite ter gastos desnecessários e garantir que outros pessoas não tenha acesso a seus arquivos pessoais.

Este tutorial é valido para todas as versões do Windows a parti do "Windows 7, 8, 8.1, 10, Server 2008 e Server 2012".

## Requisitos
* Ter noções básicas de formatação de computadores com o Windows
* Um DVD ou Pen Drive Bootável com qualquer versão do Windows a parti do Windows 7
* Ter um computador “Desktop” - Opcional, (Caso você não tenha o DVD ou Pen Drive Botável).

Este tutorial foi criado com um DVD do Windows 7, caso você esteja usando um DVD do Windows 8, Windows 10 ou Windows Server as duas primeiras tela pode mudar ate que a tela de “Opções de Recuperação do Sistema e Carregar Drivers” seja exibida.

Você pode usar qualquer DVD ou Pen Driver Bootavel do Windows, em qualquer outra versão instalado no seu computador.

1. Caso seu computador esteja ligado reinicie e insira o DVD ou conecte o Pen Drive e inicie o Boot de formatação (não formate-o).

2. Ao carregar a primeira tela do Boot, clique em “*Avançar*” e em seguida “*Reparar o seu computador*”, aguarde a tela de recuperação carregar é em seguida clique em “*Carregar Drivers*”.

<figure class="image">
<img alt="Carregamento de drivers" src="/assets/blog/quebre-senha-de-qualquer-computador/carregar-drivers.jpg">
<figcaption>Carregamento de drivers. (Imagem: Inside Block)</figcaption>
</figure>

{:start="3"}
3. No canto esquerdo da tela clique em “*Computador*”, selecione a unidade do disco rígido onde seu sistema operacional esta instalado, navegue ate a pasta *Windows\System32*.

4. Procure pelo arquivo “*CMD*” copie e cole com as teclas de atalho “CTRL+C e CTRL+V”.

5. Procure pelo arquivo “*SETHC*” e renomeie ele para “*SETHC2*”.

<figure class="image">
<img alt="Arquivo Sethc" src="/assets/blog/quebre-senha-de-qualquer-computador/arquivo-sethc.jpg">
<figcaption>Arquivo Sethc. (Imagem: Inside Block)</figcaption>
</figure>

{:start="6"}
6. Agora vá ate o final da tela no arquivo “CMD” que você criou um copia e renomeie para “SETHC”.

<figure class="image">
<img alt="Arquivo CMD para Sethc" src="/assets/blog/quebre-senha-de-qualquer-computador/arquivo-cmd-sethc.jpg">
<figcaption>Arquivo CMD para Sethc. (Imagem: Inside Block)</figcaption>
</figure>

{:start="7"}
7. Feche todas as janelas, reinicie o computador e deixe iniciar normalmente, na tela de logon pressione a tecla “*SHIFT*” cinco vezes ou mais, ate que janela do “*CMD*” do Windows seja executada.

8. Dentro da tela do “*CMD*” digite os seguintes comando para ativar o usuário Administrador e tecle Enter.

```
net user administrador /active:yes
```

{:start="9"}
9. Reinicie novamente o PC. Quando o Windows iniciar o usuário Administrador vai esta ativo, clique no usuário Administrador e deixe fazer logon.

Caso o usuário Administrador tenha uma senha prossiga com os seguintes comandos.

{:start="10"}
10. Eecute o “*CMD*” novamente pressionando a tecla “*SHIFT*” cinco vezes ou mais, e digite os seguintes comando para altera a senha.

```
net user administrador [domain]
```

Tecle Enter e em seguida digite este outro comando.

```
net user administrador 123456
```

Novamente tecle Enter. Os números “123456” significa que você alterou a senha do Administrador para "123456".

Agora didite a senha "123456" do usuário Administrador, abra o *Painel de Controle\Contas de Usuário e Segurança Família\Contas e Usuário\Gerencia outra conta*, clique no usuário que você deseja remover a senha e em “*Remover a senha*” na próxima tela clique novamente em “*Remover Senha*”.

Caso você não tenha um DVD ou um Pen Drive, você pode remover o HD (disco rígido) de seu computador, colocar em outro computador “Desktop” e renomear os arquivos necessários, para que o “CMD” funcione na tela de logon.
