
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', 
        function (table) {
        table.increments('id').primary();
        table.string('numeropedido').notNullable();
        table.string('cliente').notNullable();
        table.string('valor').notNullable();
        table.string('formapagamento').notNullable();
        table.string('notafiscal').notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');  
};
