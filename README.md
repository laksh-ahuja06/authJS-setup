# AuthJS Setup

Implemenation of authentication using Auth.js with GitHub OAuth provider which is integrated Auth.js with Prisma and SQLite using the Prisma Adapter.
I've also added secure session, user, account, and authentication data persistence.

## Configuration of authJS

### AuthJS Installation:
npm install next-auth@beta
npx auth secret (to create a secret in our .env file)

### Prisma installation: 
npm install prisma @prisma/client @prisma/adapter-better-sqlite3 dotenv @auth/prisma-adapter
npm install -D @types/better-sqlite3
npx prisma init --datasource-provider sqlite --output ../generated/prisma

create DB structure : npx prisma migrate dev --name init

Generate prisma client: npx prisma generate

Prisma Studio: npx prisma studio --url="file:///(<b>Your file directory</b>dev.db"
