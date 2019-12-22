---
layout: post
title: Como recuperar o CNAME do Blogger
datePublished: "2016-09-27 15:01:00"
tags: [blogger, seo, tutorial]
category: dev
image: /assets/blog/como-recuperar-o-cname-do-blogger.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Ao adicionar um <a href="https://www.insideblock.com/blog/como-colocar-dominio-no-blogspot.html" target="_blank" rel="noopener">domínio personalizado no Blogger</a> pela primeira vez é gerado um CNAME, entretanto caso o usuário escolha mudar de domínio ou removeu o mesmo e tente adicionar novamente, o Blogger não mostrar na segunda vez as informações de apontamento de DNS que deve ser adicionada ao serviço de registro.

Porém é possível fazer a recuperação dos apontamentos de DNS com a ajuda do Google Webmaster. Acesse o página do <a href="https://www.google.com/webmasters/tools/home?hl=pt-BR" target="_blank" rel="nofollow noopener noreferrer">Webmaster</a>, faça login com uma conta do Google, caso não tenha crie uma.

## Adicionar propriedade
Na primeira página após fazer o login, o Google Webmaster vai exibir todos os sites listados, caso o seu site não esteja listado no mesmo clique em “*Adicione uma propriedade*”, digite o endereço do domínio registrado do tipo “www.example.com”, confirme em *Adicionar*.

## Detalhes da verificação
Após adicionar o site clique sobre o mesmo, clique na “*Roda dentada*” localizada no canto superior direito da tela, selecione “*Detalhes da verificação*”.

## Métodos de verificação
Agora clique no link “*Verificar usando um método diferente*”, selecione a opção “*Provedor de nome de domínio*”, selecione o provedor que você contratou da lista, caso o mesmo não esteja listado selecione outros.

## Recuperando o CNAME
Siga o caminho *Problemas? Adicionar um registro TXT\Adicionar um registro CNAME*, veja que as informações de apontamento de DNS estão visíveis, copie os endereço do CNAME gerado pelo Google Webmaster e adicione ao serviço de registro contratado.

```
Marcador/Host CNAME: xxxxxxxxxxxxx.example.com
Destino/Alvo CNAME: gv-xxxxxxxxxxxxxxxx.dv.googlehosted.com
```

Ao adicionar as informações CNAME no provedor de registro clique em “*Verificar*”, caso esteja tudo certo a seguinte mensagem tem que ser apresentada “Parabéns, você confirmou a propriedade de example.com”, clique em “*Continuar*”.

Para evitar que você execute todos esses passos, recomendamos que faça uma cópia de seus registro e salve em um local seguro, caso altere o endereço do seu blog atual, você terá que executar todos os passo novamente.