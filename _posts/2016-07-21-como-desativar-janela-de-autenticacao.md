---
layout: post
title: Desativar janela de autenticação de proxy no Office
datePublished: "2016-07-21 18:40:00"
tags: [windows, apps, tutorial]
category:
  - misc
image: /como-desativar-janela-de-autenticacao.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

Desde o lançamento do Office 2013, alguma empresas vem enfrentado um problema, ao abrir ou salvar um documento de qualquer aplicação do pacote Office, uma janela com a seguinte mensagem aparece: “Conectando-se com servidor proxy store.office.com. Insira suas credenciais.”, entretanto o Office 2016 também vem apresentando o mesmo problema.

Isso acontece por conta do servidor de proxy, geralmente ele deve esta bloqueando alguma porta ou endereço que se conecta ao OneDrive, um novo recurso que a Microsoft passou a disponibilizar a partir do Office 2013. Com isso seu Office fica tentando se conetar a internet para garantir que seus novos documentos seja enviado automaticamente para a nuvem.

## Primeiro Método
1. Abra o Word ou qualquer outra aplicação do Office e crie um documento em branco.

2. Clique em *Aquivo\Opções\Central de Confiabilidade\Configurações da Central de Confiabilidade*.

3. Agora em “*Opções de Privacidade*” desmarque todas as opções que estiver marcada, feche o Office e tente novamente. Caso este método não funcione tente o próximo.

## Segundo Método
1. Abra o regedit do Windows pressione a tecla Windows+R e digite “*regedit*” sem aspas tecle "Enter".

2. Acesse o caminho.

```
HKEY_CURRENT_USER\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\15.0\Commom\Internet
```

ou

```
HKEY_CURRENT_USER\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Office\16.0\Commom\Internet
```

OBS: Caso você estiver usando o Office 2013 selecione a pasta 15.0, ou se você estiver usando o Office 2016 selecione a pasta 16.0.

{:start="3"}
3. De um clique duplo sobre a chave “*UseOnlineContent*”, com a opção “Hexadecimal” marcada, altere o valor de 1 para 0, reinicie o Windows.

Aviso: Este método é valido individualmente por usuários, caso você tenha mais de um, você terá que executar o método novamente para todos os usuários, para que você controle todos os usuários de uma rede corporativa, execute este método dentro do servidor de “*Active Directory*”, lembrando que é necessário ter a aplicação de controle do Office instalado no servidor.

Todos os métodos descrito acima foi testado e aprovado, caso você tenha alguma duvida de como executar os método procure um técnico de informática ou um profissional de TI.
