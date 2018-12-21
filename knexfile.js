// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'usersTest'
    },
    debug: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
    DATABASE_URL: 'postgres://amzzlpqiqwenog:25b267c9bbfb691b71f955e669ef81a8e02728a60a4b759345461d8dcf8e7bfc@ec2-54-225-150-216.compute-1.amazonaws.com:5432/dcbkfq1btiei6t'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
