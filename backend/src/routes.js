const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('../.src/database/connection');

routes.post('/clientes/', async (request, response) => {
    const { nome, genero, cpf, telefone} = request.body;
    await connection('clientes').insert(
        {
            nome,
            genero,
            cpf,
            telefone
        }
    )
    return response.send('');
});

routes.get('/clientes/', async (request, response) => {
    const listaClientes = await connection('clientes').select('*');
    console.log(listaClientes.length);
    return response.json(listaClientes);
});

routes.delete('/clientes/:id', async (request, response) => {
    const {id} = request.params;
    await connection('clientes').where('id', id).delete();
    return response.status(204).send();
});


routes.post('/produtos/', async (request, response) => {
    const { codproduto, descricao, categoria, precounitario, fornecedor} = request.body;
    await connection('produtos').insert(
        {
            codproduto, 
            descricao, 
            categoria, 
            precounitario, 
            fornecedor
        }
    )
    return response.send('');
});

routes.get('/produtos/', async (request, response) => {
    const listaprodutos = await connection('produtos').select('*');
    console.log(listaprodutos.length);
    return response.json(listaprodutos);
});

routes.delete('/produtos/', async (request, response) => {
    const {id} = request.param;

    await connection('produtos').where('id', id).delete();

    return response.status(204).send();
});

routes.post('/pedidos/', async (request, response) => {
    const { numeropedido, cliente, valor, formapagamento, notafiscal} = request.body;
    await connection('pedidos').insert(
        {
            numeropedido, 
            cliente, 
            valor, 
            formapagamento, 
            notafiscal
        }
    )
    return response.send('');
});

routes.get('/pedidos/', async (request, response) => {
    const listapedidos = await connection('pedidos').select('*');
    console.log(listapedidos.length);
    return response.json(listapedidos);
});

routes.delete('/pedidos/', async (request, response) => {
    const {id} = request.param;

    await connection('pedidos').where('id', id).delete();

    return response.status(204).send();
});

routes.post('/fornecedores/', async (request, response) => {
    const { codfornecedor, nomefantasia, cnpj} = request.body;
    await connection('fornecedores').insert(
        {
            codfornecedor, 
            nomefantasia,
            cnpj
        }
    )
    return response.send('');
});

routes.get('/fornecedores/', async (request, response) => {
    const listafornecedores = await connection('fornecedores').select('*');
    console.log(listafornecedores.length);
    return response.json(listafornecedores);
});

routes.delete('/fornecedores/', async (request, response) => {
    const {id} = request.param;

    await connection('fornecedores').where('id', id).delete();

    return response.status(204).send();
});

module.exports = routes;