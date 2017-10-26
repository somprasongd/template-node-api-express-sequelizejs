module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  database: 'testdb',
  username: 'postgres',
  password: 'postgres',
  options: {
    // host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    }
  }
}
