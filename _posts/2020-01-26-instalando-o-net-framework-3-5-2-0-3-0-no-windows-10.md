---
layout: post
title: 'Instalando o .NET Framework 3.5 (inclui .NET 2.0 e 3.0) no Windows 10'
description: >-
  A instalação do .NET Framework 3.5, sempre foi um pouco chata de fazer nos sistema operacionais mais atuais, mas hoje você vai ficar por dentro de como fazer este procedimento de forma simples e clara.
datePublished: '2020-01-26 07:00:00'
dateModified: '2020-01-26 07:00:00'
tags:
  - misc
  - windows
  - dicas
category:
  - misc
image: /assets/blog/instalando-o-net-framework-3-5-2-0-3-0-no-windows-10.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Mesmo uma sistema tão avançado como o Windows 10, nem sempre vem como todos os recursos ativos ao finalizar a formatação, muitas das vezes é necessário instalar alguns pacotes de compatibilidade da própria Microsoft, para que software mais antigos funcione corretamente.

Um desses pacotes em especial é o .NET Framework 3.5. Apesar de vários artigos na internet ensinam como fazer este procedimento, nem sempre é simples de executá-lo, entretanto neste artigo iremos mostrar alguns métodos que podem te ajudar em várias cenários diferentes no mundo da informática.

## Online: Com o Windows Update
Este método de instalação é o mais conhecido e usado, pois traz uma certa facilidade na hora de executar o mesmo, entretanto o computador precisa esta conectado a internet para fazer a instalação do recurso.

Abra o “**Painel de Controle**” do Windows e acesse o seguinte caminho “**Programas\Programas e Recursos**” em seguida clique em “**Ativar ou desativar recursos do Windows**” localizado no canto da tela esquerdo.

Marque a opção “**.NET Framework 3.5 (inclui .NET 2.0 e 3.0**”, clique em OK, em seguida escolha “**Baixar arquivo do Windows Update**”.

**OBS:** Este tipo de instalação pode não funcionar se o computador estiver dentro de uma rede corporativa, controlado por servidor de Active Directory, ou por algum sistema de firewall que impeça as atualizações do Windows Update.

## Offline: Com CD/DVD ou ISO do Windows
Outro método muito usado que funciona muito bem, é usando o próprio CD/DVD ou ISO de instalação do Windows 10, dentro da imagem do Windows existe recursos próprios que pode ser instalados através do comando DISM, a vantagem em usar este método é que o computador não precisa esta ligado na internet.

Inicie o “**Prompt de comando do windows como Administrador”, em seguida digite ou cole a seguinte linha de códigos.

> DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:?:\sources\sxs 

Substitua o ponto de “**?**”, pela letra da unidade do CD/DVD ou ISO de reproduzida do Windows, pressione “Enter” e aguarde a instalação.

**OBS:** Se o CD/DVD ou ISO tiver suporte para o arquitetura “x32 e x64”, você terá que especificar o caminho da mesmo.

**x32:** DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:?:\32\sources\sxs

**x64:** DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:?:\64\sources\sxs

## Método alternativo: Baixar pasta SXS
Caso você não tenha um CD/DVD ou ISO de instalação do Windows, ou de alguma forma não têm acesso direto a internet, você pode optar por baixar apenas os arquivos da pasta SXS. para consumir menos dados.

Download SXS x32x64: [SourceForge](https://sourceforge.net/projects/insideblock/files/Windows/Windows%2010/NET%20Framework/sxs.NETFramework.2.0.3.0.3.5.win10.zip.zip/download){:rel="nofollow noopener noreferrer"}{:target="_blank"}

Em seguida a instalação pode ser feira pelo “**Prompt de comando do windows iniciado como administrador**”.

> DISM /Online /Enable-Feature /FeatureName:NetFx3 /All /LimitAccess /Source:C:\Users\NomedoUsuário\Desktop\sxs

**OBS:** Você deve especificar exatamente onde a pasta SXS foi salva em seu computador, exemplo: C:\Users\NomedoUsuário\Desktop\sxs.

## Conclusão
Bom, por enquanto hoje foi isso, eu espero que todos você tenha entendido como usar cada uma dos métodos usado aqui. Qualquer dúvidas é só deixar nos comentários, se você gostou compartilhe nas redes sociais com seus amigos.
