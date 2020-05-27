
exports.up = function(knex) {
    return knex.schema.createTable('fornecedores', 
        function (table) {
        table.increments('id').primary();
        table.string('codfornecedor').notNullable();
        table.string('nomefantasia').notNullable();
        table.string('cnpj').notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('fornecedores');  
};
