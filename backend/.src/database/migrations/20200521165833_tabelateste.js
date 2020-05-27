
exports.up = function(knex) {
  return knex.schema.createTable('tabelateste',
  function (table){
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('idade').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('tabelateste');  
};
