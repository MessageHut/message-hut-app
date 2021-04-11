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
  await db.createTable('messages', {
    columns: {
      id: { type: 'bigint', unsigned: true, primaryKey: true, autoIncrement: true },
      content: { type: 'text', notNull: true },
      created_at: { type: 'datetime', notNull: true },
      updated_at: { type: 'datetime', notNull: true }
    },
    ifNotExists: true
  })
};

exports.down = async function(db) {
  await db.dropTable('messages', { ifExists: true })
};

exports._meta = {
  "version": 1
};
