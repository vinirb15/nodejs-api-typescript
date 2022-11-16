import 'dotenv/config'
interface KnexConfig {
  [key: string]: object
};

export const knexConfig: KnexConfig = {
  development: {
    client: 'postgres',
    connection: {
      host: process.env.dev_access_key_id,
      user: process.env.dev_access_key_user,
      password: process.env.dev_access_secrety_key,
      database: process.env.dev_access_database,
      insecureAuth: true
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },

  production: {
    client: 'postgres',
    connection: {
      host: process.env.prod_access_key_id,
      user: process.env.prod_access_key_user,
      password: process.env.prod_access_secrety_key,
      database: process.env.prod_access_database,
      insecureAuth: true
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
}

export default knexConfig
