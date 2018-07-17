module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gmem2'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
}
