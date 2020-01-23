---
layout: post
title: 'Como liberar espaço no HD após atualizar o Windows'
description: >-
  Sei que você deve estar desesperado agora, não se preocupe, vamos te ajudar a ganhar mais espaço no HD.
datePublished: '2020-01-24 07:00:00'
dateModified: '2020-01-24 07:00:00'
tags:
  - misc
  - windows
category:
  - misc
image: /assets/blog/como-liberar-espaco-no-hd-apos-atualizar-o-windows.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Você sabia que após cada atualização do Windows arquivos temporário da versão anterior ainda continua no HD por alguns dias, isso pode ser bom em um certo ponto de vista, porém também pode ser muito ruim para quem usa HD com pouco espaço, como no caso dos SSDs.

Estes arquivos temporários permite que você possa restaurar o Windows caso se arrependa do update, mas se você estiver em apuros com pouco espaço, você pode excluir esses arquivos sem causar danos ao sistema operacional ou em seus arquivos.

Alerta: Após a exclusão do arquivos temporário do update, você não vai poder restaurar o Windows para uma versão anterior, caso não goste ou se arrependa da nova versão do sistema operacional.

## Windows.old e WindowsUpdate
É muito comum que após uma atualização do Windows, que um nova pasta esteja disponível na raiz do disco local C: com os nomes Windows.old ou WindowsUpdate, se você verificar essas pastas, vai notar que elas têm as mesmas estruturas de pastas do sistema anterior ao update.

Geralmente essas pastas não carrega informações dos usuários, como documentos, vídeos, imagens e etc, mas pode conter informações de aplicativos, configurações do sistema entre outros.

## Limpeza de disco
A forma mais segura de liberar espaço no HD é executado a limpeza de disco do próprio sistema, sem o uso de aplicativos de terceiros.

Abra o **Painel de Controle\Sistema e Segurança**, na seção “**Ferramentas Administrativas**” clique em “**Liberar espaço em disco**”.

Agora selecione todos os itens da lista; caso a opção “**Limpar arquivos do sistema**” esteja disponível clique nela, em seguida selecione novamente todos os itens.

Clique em OK, agora é só deixar a ferramenta concluir a limpeza.

OBS: Arquivos temporário de atualização do Windows é excluído automaticamente pelo próprio sistema após 27 dias.

Em alguns caso que geralmente acontece no Windows 7 é preciso reiniciar o computador, para que a ferramenta continue com a limpeza do disco, caso a limpeza continue depois de reiniciar o sistema, a ferramenta vai exibir uma mensagem na tela ou pode ficar escura por alguns minutos.

# Esvaziando pastas do sistema
Se mesmo depois de executar a limpeza de disco e você não ficar satisfeito com o resultado, você pode tentar outro método para remover os arquivos temporários.

1. **Arquivo de atualização:** Acesse a pasta “**C:\Windows\SoftwareDistribution\Download**” e exclua todos os arquivos e pastas dentro dela; esta pasta é usada pelo sistema para salvar os arquivos temporários do Windows Update.

2. **Arquivos temporário do usuário:** Pressione a tecla “**Ctrl+R**” e digite “**%temp%**”, sem aspas, agora exclua tudo que tiver dentro da pasta; esta pasta é usada para salvar arquivos temporário do usuário.

3. **Arquivos temporário do sistema:** Novamente pressione as tecla “**Ctrl+R**” e digite “**temp**”, sem aspas e sem os símbolos de porcentagem, exclua tudo que tiver dentro da pasta; esta pasta é usada para salvar arquivos temporário do sistema, incluído arquivos temporários de aplicativos e de alguns usuários.

## Sensor de armazenamento
Também é possível ativar um recurso nativo do sistema para executar a limpeza automática de acordo com os dias agendados, porém este recurso está disponível a partir do Windows 10.

Abra as **Configurações\Sistema\Armazenamento**, na seção “**Sensor de armazenamento**” ative os recurso, só isso já é o suficiente para o sistema iniciar a limpeza automaticamente, entretanto, se você quiser personalizar o recurso siga para o próximo passo.

Ainda em “**Armazenamento**”, selecione “**Alterar o modo de liberar espaço automaticamente**”, pronto agora é só escolher as configurações de acordo com suas preferências.

Todos os métodos usado aqui são seguros, nenhum deles coloca em risco ao arquivos de documentos dos usuários.

## Conclusão
Bom pessoal por hoje é isso, eu espero que todos vocês tenham entendido, caso alguém tiver alguma dúvida é só deixar nos comentários, e não esqueçam de compartilhar nas redes sociais.