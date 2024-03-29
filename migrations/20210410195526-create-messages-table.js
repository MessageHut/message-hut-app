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
  type = dbm.dataType
  seed = seedLink
}

exports.up = async function (db) {
  await db.createTable('messages', {
    columns: {
      id: {
        type: 'bigint',
        unsigned: true,
        primaryKey: true,
        autoIncrement: true,
      },
      content: { type: 'text', notNull: true },
      user_id: {
        type: 'bigint',
        unsigned: true,
        notNull: true,
        foreignKey: {
          name: 'messages_user_id_fk',
          table: 'users',
          rules: {
            onDelete: 'CASCADE',
          },
          mapping: {
            user_id: 'id',
          },
        },
      },
      conversation_id: {
        type: 'bigint',
        unsigned: true,
        notNull: true,
        foreignKey: {
          name: 'messages_conversation_id_fk',
          table: 'conversations',
          rules: {
            onDelete: 'CASCADE',
          },
          mapping: {
            conversation_id: 'id',
          },
        },
      },
      created_at: { type: 'datetime', notNull: true },
      updated_at: { type: 'datetime', notNull: true },
    },
    ifNotExists: true,
  })
}

exports.down = async function (db) {
  await db.dropTable('messages', { ifExists: true })
}

exports._meta = {
  version: 1,
}
