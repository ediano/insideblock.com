---
layout: post
title: "Como colocar domínio personalizado no Blogger"
datePublished: "2016-07-21 14:51:00"
tags: [seo, blogger, tutorial]
category: dev
image: /assets/blog/como-colocar-dominio-no-blogspot.jpg
image_source: Pixabay
author: Ediano Silva Santos
comments: true
ads: true
---

Toda vez quando criamos um blog com hospedagem grátis, além de escolhermos um domínio grátis ele é seguido por um subdomínio como no caso do "blogspot.com", isso incomoda muitos blogueiros levando eles a comprarem um domínio personalizado.

Logo depois vem a pergunta se eu adquirir um domínio personalizado, como faço para configurar em meu blog, bom isso é bem simples no caso do "blogspot.com", nos temos aqui um tutorial completo para qualquer domínio de nível superior "www.example.com".

Se por acaso você ainda não adquirir nem um domínio, recomendamos que usem o Google Domains, pois o domínio "<a href="//www.insideblock.com" rel="noopener">insideblock.com</a>" é registrado no próprio, temos também um outro tutorial passo a passo como configurar domínio do Uol Host no Blogger.

OBS: Este tutorial não é valido para o Google Domains, pois o serviço já se integra automaticamente ao Blogger.

Depois de comprar um domínio personalizado siga as instruções.

1. Acesse o seu o *Painel do Blogger > Configurações > Básico. Na seção "Publicação"*, clique no link para adicionar um domínio personalizado.

2. Digite o URL do domínio que você comprou, lembrando que dever iniciar com "www" para funcionar, clique em *Salvar*.

3. Agora verá um erro e dois CNAMEs listados abaixo. Cada CNAME é formado por duas partes: Nome, Marcador ou Hoste Destino, Alvo ou Direcionar para. O primeiro é igual para todos: Nome sendo "www", destino como "ghs.google.com". O segundo CNAME é único é específico para o seu blog e sua conta no Google, é portanto diferente para cada pessoa.

NOTA: Se o seu CNAME não aparecer no painel do Blogger, veja este artigo de <a href="https://www.insideblock.com/blog/como-recuperar-o-cname-do-blogger.html" target="_blank" rel="noopener">Como recuperar o CNAME do Blogger</a>

{:start="4"}
4. Acesse o site do seu serviço de registro de domínio e encontre as configurações "DNS" (*Sistema de Nome de Domínio*) no painel de controle.

5. Agora digite o CNAMEs. Em Nome, Marcador ou Host, basta digitar "www" e listar ghs.google.com como Destino, Alvo ou Direcionar para.

6. Digite o segundo CNAME da mesma forma.

## Configuração Opcional

{:start="7"}
7. Opcional: também é possível digitar registros A, que vincula seu blog sem o www (example.com) para o site real (www.example.com). Se você não seguir esta etapa, uma página de erro será exibida para os visitantes que não digitarem "www".

8. Opcional continuação: Depois de concluir a etapa 6, liste os endereços IP mostrados abaixo na seção "A". Você deve criar quatro registros "A", separados que direcionem para quatro IPs diferentes do Google.

Tipo: **A**

Entrada: **@**

Valor: **216.239.32.21**

Repita o mesmo processo para os IPs abaixo.

**216.239.34.21**

**216.239.36.21**

**216.239.38.21**

Fim da seção opcional.

Antes de passar para etapa final, aguarde cerca de 30 minutos a uma horas, para que as configurações de DNS seja ativada.

{:start="9"}
9. Agora entre no *Painel do Blogger, selecione > Configurações > Básico*, na sessão "*Publicação*", clique no link para adicionar um domínio personalizado.

10. Insira o URL de seu domínio personalizado na caixa de texto exibida como (www.example.com) e clique em Salvar.

11. Agora atualize a página, clique em Editar, e marque a opção "*Redirecionar example.com para www.example.com*", clique novamente em *Salvar*. OBS: É  de total importância que esta opção esteja marcada.

Ponto, seu domínio blogspot.com em breve vai esta funcionando com o domínio personalizado ao qual você acabou de adicionar.

**Nota:** É recomendado que aguarde 24 horas para que as configurações de DNS seja ativado, nos aqui no Inside Block, tivemos que aguardar por 72 Horas, para que o nosso domínio fosse 100% atualizado e ativado no DNS do nosso provedor de registro.