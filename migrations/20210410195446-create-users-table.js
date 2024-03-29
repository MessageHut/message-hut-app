'use strict'

let dbm
let type
let seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type = dbm.dataType
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  seed = seedLink
}

exports.up = async function (db) {
  await db.createTable('users', {
    columns: {
      id: {
        type: 'bigint',
        unsigned: true,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: { type: 'string', length: 50, notNull: true },
      lastname: { type: 'string', length: 50, notNull: true },
      email: { type: 'string', length: 50, unique: true, notNull: true },
      created_at: { type: 'datetime', notNull: true },
      updated_at: { type: 'datetime', notNull: true },
    },
    ifNotExists: true,
  })
}

exports.down = async function (db) {
  await db.dropTable('users', { ifExists: true })
}

exports._meta = {
  version: 1,
}
