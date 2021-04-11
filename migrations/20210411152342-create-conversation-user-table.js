'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  await db.createTable('conversation_user', {
    columns: {
      id: { type: 'bigint', unsigned: true, primaryKey: true, autoIncrement: true },
      user_id: { 
        type: 'bigint', 
        unsigned: true, 
        notNull: true,
        foreignKey: {
          name: 'conversation_user_user_id_fk',
          table: 'users',
          rules: {
            onDelete: 'CASCADE'
          },
          mapping: {
            user_id: 'id'
          }
        }
      },
      conversation_id: { 
        type: 'bigint', 
        unsigned: true, 
        notNull: true,
        foreignKey: {
          name: 'conversation_user_conversation_id_fk',
          table: 'conversations',
          rules: {
            onDelete: 'CASCADE'
          },
          mapping: {
            conversation_id: 'id'
          }
        }
      },
      created_at: { type: 'datetime', notNull: true }
    },
    ifNotExists: true
  })
};

exports.down = async function(db) {
  await db.dropTable('conversation_user', { ifExists: true })
};

exports._meta = {
  "version": 1
};
