exports.up = function(knex) {
  return knex.schema.createTable('coffee', (table) => {
    table.increments();
    table.string('name');
    table.string('roaster');
    table.integer('aroma')
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('coffee');
};
