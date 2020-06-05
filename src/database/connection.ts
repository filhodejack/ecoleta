import knex from 'knex'
import path from 'path'

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
  pool: {
    // About the foreign keys not being enforced, I found an `olde` issue and 
    // this post helped https://github.com/knex/knex/issues/453#issuecomment-54160324
    afterCreate: (conn: any, done: Function) =>
      conn.run('PRAGMA foreign_keys = ON;', done)
  }
})

export default connection