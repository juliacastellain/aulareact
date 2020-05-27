import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';
import './style.css'; 

function Clientes(){

    const [clientes, setClientes] = useState([]);

    async function handleDeleteUsuario(id){
        try {
            await api.delete(`clientes/${id}`,{});
            setClientes(clientes.filter(cliente => cliente.id !== id));
        } catch (error){
            alert('Erro ao deletar usuario!');
        }
    }

    useEffect(() => {
        api.get('clientes',{}).then(response => {
            setClientes(response.data)
        });
    }, []);

    return(
        
    <div> 
        <nav>
                <ul id="menu">
                    <li><Link to="/">Home</Link></li>
                    <li>Cadastros
                        <ul>
                        <Link to="/CadastroCliente"><li>Clientes</li></Link>
                        <Link to="/CadastroProduto"><li>Produtos</li></Link>
                        <Link to="/CadastroPedido"><li>Pedidos</li></Link>
                        <Link to="/CadastroFornecedor"><li>Fornecedores</li></Link>
                        </ul>
                    </li>
                </ul>
            </nav>        
        
        <h1>Total de Clientes: {clientes.length}</h1>
    <ul  id="listaclientes">
        {
            clientes.map(cliente => (
                <li>
                    <p>Cliente: {cliente.id}</p>
                    <p>Nome: {cliente.nome}</p>
                <button className="button" onClick={() => handleDeleteUsuario(cliente.id)}>Excluir</button>
                </li>
            ))
        }
    </ul>    
    </div>
    );
};

export default Clientes;