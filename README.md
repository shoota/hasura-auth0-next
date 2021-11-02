## Next.js

Next は CNA で Typescript テンプレートを使用して作成する

```bash
npx create-next-app@latest --ts
```

## Hasura

### Local での確認用の docker

取得元

```bash
curl https://raw.githubusercontent.com/hasura/graphql-engine/stable/install-manifests/docker-compose/docker-compose.yaml -o docker-compose.yml
```

起動

```bash
docker-compose up -d
```

### Heroku 環境

https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku

### graphQL API からの codegen

```bash
yarn codegen
```

## Auth0

TBD

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
