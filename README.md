# Next.js

Next は CNA で Typescript テンプレートを使用して作成する

```bash
npx create-next-app@latest --ts
```

# Hasura

## Local 環境の docker

取得

```bash
curl https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml -o docker-compose.yml
```

起動

```bash
docker-compose up -d
```

## Heroku 環境

https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku

## Hasura DB への migration 実行

1. Local 環境で hasura console を実行する
   1.1 `yarn hasura:local`
1. GUI で DB 操作を実行
   1.1 記録された migrations を確認
1. 特定環境に migration を実行
   1.1 `hasura migrate apply --project hasura --envfile env/.[env name].env --database-name default` で DDL/DML を実行
   1.1 `hasura metadata apply --project hasura --envfile env/.[env name].env` で Hasura メタデータを同期

## graphQL API からの codegen

```bash
yarn codegen
```

## Auth0

TBD

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
