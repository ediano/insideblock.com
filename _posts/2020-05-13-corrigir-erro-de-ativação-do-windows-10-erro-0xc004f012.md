---
layout: post
title: 'Corrigir erro de ativação do Windows 10 (erro: 0xc004f012)'
description: >-
  Corrigindo erro de ativação do Windows, após perder o vínculo com uma licença digital.
datePublished: '2020-05-13 07:00:00'
dateModified: '2020-05-13 07:00:00'
tags:
  - misc
  - dicas
  - windows
category:
  - misc
image: /corrigir-erro-de-ativação-do-windows-10-erro-0xc004f012.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Por alguns motivos aleatórios o Windows 10, acaba que perdendo a licença digital vinculada a uma conta Microsoft, isso ocorre geralmente depois de uma atualização mau sucedida, ou por desligamentos forçados do sistema operacional, entre outros motivos, felizmente este é um erro temporários e pode ser facilmente corrigido com alguns comandos e tarefas simples, sem a necessidade de formatar o computador.

OBS: Este métodos e válido apenas para correção do erro: **0xc004f012**.

Para iniciar a correção o usuário do computador precisa ter privilégios de administrador.

1. Acesse a pasta do Windows no seguinte caminho.

```
C:\Windows\System32\spp\store\2.0
```

Dentro da pasta _2.0_, renomeie o arquivo “**tokens.bat**” para “**tokens.old**”.

{:start="2"}
2. Inicie prompt de comando (CMD) como administrador e execute os seguintes comandos.

```
net start sppsvc

cscript.exe slmgr.vbs /rilc
```

Ao finalizar feche o prompt de comando.

{:start="3"}
3. Agora acesse as **Configurações** do Windows, “**Atualização e Segurança / Ativação**” em seguida clique em “_Solucionar um problema_”.

OBS: O Windows precisar estar conectado a internet para realizar a verificação.

Ao finalizar a verificação o Windows já é para esta ativo.

Conclusão
Este foi um post bem rápido, eu espero que todos vocês tenha compreendido o passo a passo, qualquer duvida deixe nos comentários, não esqueça de compartilhar nas redes sociais com seus amigos.