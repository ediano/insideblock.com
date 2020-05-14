---
layout: post
title: Configurar domínio do Uol Host no Blogger sem www
datePublished: "2016-07-21 10:03:00"
tags: [seo, blogger, tutorial]
category: dev
image: /configurar-dominio-do-uol-host-no.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Este tutorial e para todos os iniciantes com sites e blogs, que querem registrar um domínio do Uol Host no Blogger/Blogspot.

Ao configurar o primeiro domínio personalizado no Blogger ele por padrão mostra a seguinte mensagem "Não foi possível confirmar sua autoridade para este domínio. Erro 12."

Não se preocupe pois isso e normal no Blogger, o erro 12 informa a você que sua "autoridade" não foi confirmada nas configurações CNAME do DNS no seu provedor de registro.

Caso você já sabe como fazer as configurações, mas que registrar um domínio com e sem a entrada www no Blogger, siga as instruções abaixo.

1. Entre no painel do Uol Host faça login, navegue até a página de exibição do(S) domínio(s) registrador.

2. Selecione o domínio que deseja configura, e escolha a opção "*Gerenciar Zona DNS (ex: mudar www)*".

3. Selecione novamente o domínio e em seguida escolha a opção "*Gerenciar DNS*".

Esta parte é a mais importante, siga as instruções atentamente abaixo.

Caso você já tenha adicionado algum subdomínio, recomendo que faça o BACKUP deles, logo em seguida apague todos os domínios e subdomínios que você já adicional ou que venha padrão do Uol Host.

**Agora vamos começar do zero com a entrada www**.

Para isso precisamos do CNAME que o Blogger lhe informou na hora de configurar o seu domínio, casa você não saiba ou que tenha pedido o mesmo siga os passos seguintes  para você recuperar o CNAME, se você já tem o mesmo em mãos pule esta parte para o paragrafo (5.).

{:start="4"}
4. Entre com sua conta do Blogger no Google para Webmasters, clique em "*ADICIONAR UM SITE*", coloque o seu domínio personalizado como (www.exemplo.com ou exemplo.com), clique em "Continuar".

5. Clique sobre a roda dentada no canto superior direito da tela, e selecione "*Detalhes da confirmação*".

6. Agora clique no link "*Verificar usando um método diferente*", e selecione "*Provedor de nome de domínio*".

7. Escolha o provedor de domínio "*UOLHost.com.br*", clique no link "*Adicionar um registro CNAME*".

Observe que agora ele abril suas informações de configurações CNAME para o domínio selecionado.

```
Marcador/Host CNAME: é a entrada do seu CNAME.
Destino/Alvo CNAME: é o valor do CNAME.
```

{:start="8"}
8. Agora que você já tem as informações do CNAME para configurar o seu domino, volte ao Uol Host para configurar o domino em seu Blogger.

9. Para configurar o seu domínio de forma correta temos que adicionar 2 CNAME.

1º Primeiro CNAME, é o padrão do Google.

```
Tipo: CNAME
Entrada: www
Valor: ghs.google.com
```

Clique em Criar e aguarde a confirmação.

Agora vamos precisar das informações do CNAME, que fomos buscar no Google para Webmarters.

2º Segundo CNAME, é o código único de identificação do seu domínio.

```
Tipo: CNAME
Entrada: coloque as informações da linha "Marcador/Host CNAME:".
Valor: Coloque as informações da linha "Destino/Alvo CNAME:".
```

Clique novamente em Criar e aguarde a confirmação.

Bom seu domínio já esta configurado com a entrada www. Para que ele funcione também sem a entrada www, siga as instruções abaixo.

{:start="10"}
10. Agora vamos criar o apontamento sem o www, para isso selecione no lugar de CNAME  para o tipo "A", e informe os seguintes IPs no total de 4. Nas seguinte forma.

```
Tipo: A
Entrada: @
Valor: 216.239.32.21
```

Clique em Criar e repita o mesmo processo para os IPs abaixo.

```
216.239.34.21
216.239.36.21
216.239.38.21
```

Se você fez todas as configurações conforme o descrito, recomendo que aguarde de 24 a 36 Horas para que as configurações de DNS, sem a entrada www seja ativada.

{:start="11"}
11. Antes de passar para etapa final, aguarde cerca de 30 minutos a uma horas, para que as configurações de DNS seja ativada.

12. Agora entre no *Painel do Blogger, selecione\Configurações\Básico*, Na área "Publicação", clique no link para adicionar um domínio personalizado.

13. Insira o URL de seu domínio personalizado na caixa de texto exibida como (www.exemplo.com) e clique em Salvar.

14. Agora atualize a página, clique em Editar, e marque a opção "Redirecionar exemplo.com para www.exemplo.com", clique novamente em Salvar. *OBS: É  de total importância que esta opção esteja marcada*.

Ponto, seu domínio blogspot.com em breve vai esta funcionando com o domínio personalizado ao qual você acabou de adicionar.

Nota: É recomentado que aguarde 24 horas para que as configurações de DNS seja ativado, nos aqui no Inside Block, tivemos que aguardar por 72 Horas, para que o nosso domino fosse 100% atualizado e ativado no DNS do nosso provedor de registro.