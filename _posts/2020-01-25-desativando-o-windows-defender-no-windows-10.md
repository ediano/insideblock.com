---
layout: post
title: 'Desativando o Windows Defender no Windows 10'
description: >-
  Você não gostou do Windows Defender, veja agora a maneira mais fácil de desativar o próprio antivírus do Windows. (Não recomendado).
datePublished: '2020-01-25 07:00:00'
dateModified: '2020-01-25 07:00:00'
tags:
  - misc
  - windows
  - dicas
  - segurança
category:
  - misc
image: /desativando-o-windows-defender-no-windows-10.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

O antivírus nativo do Windows aos poucos foi ganhando espaço dentro da Microsoft e a confiança de seus usuários, desde o lançamento no Windows 8 o Windows Defender vem sendo cada vez mais melhorado, apesar de seus recursos e segurança cada vez mais precisos, muitos usuários tendem a desativar o recurso do Windows para usar antivírus de terceiros.

O Windows Defender pode ser um pouco insistente em continuar funcionando ao tentar desativá-lo, neste caso iremos usar alguns métodos de desativar, um pouco complexo.

OBS: Os métodos de desativação do Windows Defender, foi aplicado no Windows 10 versão 1909, caso você use uma versão diferente do sistema operacional deste artigo, alguns recursos pode não existe mais ou foi modificado de acordo com atualizações.

## Passo 1 - Gerenciador de Tarefa
Inicie o gerenciador de tarefas, navegue até a guia “**Inicializar**”, clique sobre o Windows Defender e no botão “**Desativar**”.

Este método não desativa o Windows Defender, mas impede que ele se inicie com o Windows no usuário aplicado.

## Passo 2 - Editor de Políticas de Grupos Local
Inicie o “**Editor de políticas de grupos local**”, pressione as teclas “**Windows+R**” digite **gpedit.msc** e tecle Enter.

Em “**Configurações do Computador**” acesse a pasta no seguinte caminho **Componentes do Windows\Modelos Administrativos\Windows Defender Antivírus**.

Abra o arquivo “**Desativar o Windows Defender Antivírus**”, marque a opção “**Habilitado**” clique em OK.

Este método desativar o Windows Defender para todos os usuários, porém em alguns casos ele pode iniciar um processo de auto proteção.

## Passo 3 - Editor de Registro
Pressione as teclas “**Windows+R**” digite regedit e tecle Enter, acesse a pasta no seguinte caminho.

> HKEY_LOCAL_MACHINE\SOFTWARE\Polices\Microsoft\Windows Defender

Agora se não existir crie as chaves com os seguintes valor (Valores DWORD (32 bits)) a seguir sem aspas, “**DisableAntiVirus**” e “**DisableAntiSpyware**” de um clique duplo nas chaves e adicione 1, clique em OK. Reinicie o sistema para aplicar as alterações.

Este método desativar definitiva o Windows Defender, caso você não instale outro software de proteção em seu computador, ele vai ficar totalmente exposto e vulnerável.

## Conclusão
Bom pessoal, por encontato é isso, eu espero que todos você tenha gostado, não esqueça de compartilhar nas redes sociais e deixar um comentário.

OBS: De acordo com algumas pesquisas realizada recentemente por empresas e projetos que analisam vulnerabilidades em diferentes sistemas, o Windows Defender se mostrou um verdadeiro protetor contra ameaças, sendo comparada com um dos melhores antivírus do mercado.
