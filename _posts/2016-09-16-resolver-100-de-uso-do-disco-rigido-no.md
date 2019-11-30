---
layout: post
title: Resolver 100% de uso do disco rigido no Windows
datePublished: "2016-09-16 23:22:00"
tags: [windows, tutorial]
category: misc
image: /assets/media-image/resolver-100-de-uso-do-disco-rigido-no.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Nenhum sistema operacional está livre de bugs, o sistema da Microsoft entretanto vem apresentando um bug que deixexando o disco rígido 100% em uso, ocasionando em lentidão do sistema ao abrir um arquivo ou programa.

Mas o problema nem sempre se trata de um bug no sistema, mas sim um problema de desempenho do próprio hardware, para saber se o problema e o sistema ou o hardware prossiga com as seguintes instruções.

* **Primeiro:** Sistema recém instalado, só assim teremos uma maior garantia que o problema será resolvido, pois a <a href="http://www.insideblock.com/blog/como-formatar-seu-computador-com.html" target="_blank">formatação</a> remove vírus onde o mesmo faz o uso constante do disco rígido, memória e processador.

* **Segundo:** Verifique os aplicativos que fica sendo executado em segundo plano, cheque a quantia da velocidade dos hardware que eles estão consumindo como os antivírus, aplicativos de sincronização em nuvem entre outros.

* **Terceiro:** Desative o armazenamento de arquivos em cache da memoria RAM, o mesmo tem quatro funções, 1. Desativar todos os armazenamento em cache, 2. Deixar apenas aplicativos em cache, 3. Deixar apenas sistema de boot e por último 4. Ativar todos os cache. Para isso abra o "*regedit*" do Windows como administrador e vá para o seguinte caminho.

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\PrefetchParameters
```

Abra o arquivo "*EnablePrefetcher*" e altere o campo "*Dados do valor*" conforme a orientação entre aspas abaixo.

1. "**0**" para desativar tudo

2. "**1**" Ativar apenas aplicativos

2. "**2**" Ativar apenas boot do Windows

4. "**3**" Ativar todos

Recomendamos de deixe o "Dados do valor" com o valor "*2*", apenas para ligar e desligar mais rápido.

**Atenção:** O procedimento a seguir pode levar minutos ou horas para ser concluído, pois o mesmo vai depender do quanto de arquivos tem armazenado no HD e da velocidade dos hardware instalado em seu PC, como memória RAM é processado.

**Quarto** Verifique e recupere setores corrompidos do sistema. Abra-o prompt de comando do Windows (CMD) como Administrador, e digite o seguinte comando para verificar se a setores danificados no sistema.

```
Dism /Online /Cleanup-Image /ScanHealth
```

Ao completar o escâner de 100% digite este segundo comando para recuperar os setores danificados.

```
Dism /Online /Cleanup-Image /RestoreHealth
```

Caso nem dos procedimentos acima resolver o problema, <a href="http://www.insideblock.com/blog/como-formatar-seu-computador-com.html" target="_blank">recomendo que formate o PC</a> caso ainda não tenha feito isso, e novamente faça as verificações desde o inícios após a formatação, durante a instalação de softwares e drives se o disco vai entrar em consumo máximo novamente, caso isso ocorra só temos a levar em consideração que o seu hardware está com problema, ou que o mesmo não tem suporte suficiente para ser usado no sistema operacional atual.