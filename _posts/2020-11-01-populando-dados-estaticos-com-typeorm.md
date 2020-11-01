---
layout: post
title: "Populando dados estáticos nas entidades com Typeorm"
description: >-
  Que tal um pouco de banco de dados, hoje iremos aprender uma forma simples de popular dados estáticos com typeorm migration:run.
datePublished: "2020-11-01 07:00:00"
dateModified: "2020-11-01 07:00:00"
tags: [nodejs, dev, javascript, typescript, typeorm, express]
categories: [nodejs, dev]
image: /populando-dados-estaticos-com-typeorm.jpg
image_source: Inside Block
author: Ediano Silva Santos
comments: true
ads: true
---

O Typeorm e composto de várias funções, que pode nos ajudar a inserir valores padrões, nas tabelas do banco de dados, no momento da execução das migrations.

Geralmente usamos este método, quando precisamos de informações fake para teste ou que dificilmente serão alteradas em produção, como status de um produto, tipo e níveis de usuários, entre vários outros tipos de valores que dificilmente precisamos atualizados com frequência. Neste contexto, irei mostrar apenas a forma de inserir dados iniciais de produção.

**Requisitos:**

1. NodeJS 12x ou superior;
2. Typeorm (TypeScript);
3. Banco SQL (Postgres, MySQL, entre outros);

Imaginando que você já tenha uma ambiente de desenvolvimento em execução, para não deixar o exemplo muito complexo, irei criar apenas uma migration, para inserimos os valores default de produção.

Como exemplo, iremos usar uma tabela que tem os valores dos status de envio de um produto, para iniciarmos vamos criar nossa migration.

```bash
yarn typeorm migration:create -n create_shipping_status

#or

npm run typeorm migration:create -n create_shipping_status
```

A migration inicial tem a seguinte estrutura.

```ts
import {MigrationInterface, QueryRunner} from "typeorm";

export class createShippingStatus1604249549494 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
   }

}
```

Localize o arquivo da migration que você acabou de criar, agora iremos fazer algumas alterações nela, como inserir algumas colunas na tabela e dar um nome a ela.

```ts
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createShippingStatus1604249549494 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(new Table({
       name: 'shipping_status',
       columns: [
         {
           name: 'id',
           type: 'integer',
           unsigned: true,
           isPrimary: true,
           isGenerated: true,
           generationStrategy: 'increment'
         },
         {
           name: 'name',
           type: 'varchar'
         },
         {
           name: 'created_at',
           type: 'timestamp',
           default: 'now()',
         },
         {
           name: 'updated_at',
           type: 'timestamp',
           default: 'now()',
         },
       ]
     }))
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('shipping_status')
   }

}
```

Como pode ver, adicionei algumas coluna **id**, **name**, **created_at**, **updated_at** na tabela `shipping_status` , até este ponto não existe nada de diferente do comum, se executarmos a migration, ela irá criar apenas a tabela vazia no banco de dados, por isso precisamos fazer mais algumas alterações, para que os valores padrões sejam inseridos na execução.

```ts
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createShippingStatus1604249549494 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createTable(new Table({
       name: 'shipping_status',
       columns: [
         {
           name: 'id',
           type: 'integer',
           unsigned: true,
           isPrimary: true,
           isGenerated: true,
           generationStrategy: 'increment'
         },
         {
           name: 'name',
           type: 'varchar'
         },
         {
           name: 'created_at',
           type: 'timestamp',
           default: 'now()',
         },
         {
           name: 'updated_at',
           type: 'timestamp',
           default: 'now()',
         },
       ]
     }))

     await queryRunner
       .manager
       .createQueryBuilder()
       .insert()
       .into('shipping_status')
       .values([
         { name: 'Aguardando pagamento' },
         { name: 'Separando no estoque' },
         { name: 'Aguardando nota' },
         { name: 'Enviado' },
         { name: 'Saiu para entrega' },
         { name: 'Entregue' },
         { name: 'Cancelado' },
       ])
       .execute()
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('shipping_status')
   }

}
```

Como pode ver, no método `up` foi iniciado um segundo `queryRunner`, este método também será executado quando a migration for executada, inserido os valores de `values([...])` na tabela do banco de dados, definida em `.into(...)`.

Note que estou definindo apenas os valores da coluna `name`, as demais colunas para esta tabela será preenchida de forma automática pelo próprio Typeorm (**id**, **created_at**, **updated_at**).

Dessa forma, toda vez que tivermos a necessidade de inserimos valores default na tabelas, podemos usar este métodos, lembrando que este tipo de execução é recomendada para informações que serão usadas em produção.

## Conclusão

Eu espero que todos você tenha entendido a proposta deste método, e como ele pode nos ajudar em ambiente de produção.

Vou ficando por aqui, qualquer dúvida é só deixar nos comentários.
