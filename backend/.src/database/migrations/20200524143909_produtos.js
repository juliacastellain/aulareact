
exports.up = function(knex) {
    return knex.schema.createTable('produtos', 
        function (table) {
        table.increments('id').primary();
        table.string('codproduto').notNullable();
        table.string('descricao').notNullable();
        table.string('categoria').notNullable();
        table.string('precounitario').notNullable();
        table.string('fornecedor').notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');  
};
