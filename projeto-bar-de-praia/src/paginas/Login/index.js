import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../services/api';

function Login(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        const dadosLogin = {
            usuario,
            senha
        };

        try{
            const response = await api.get('usuarios', dadosLogin);
        } catch (error){
            alert("Usuário ou senha inválido!")
        }
    }

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

            <div id="cliente-container">
                <h1>Login</h1>

                <form id="form-cliente" onSubmit={handleLogin}>
                    <label>Usuário: 
                    <br></br>
                    <input
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Senha
                    <br></br>
                    <input 
                        type="number"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}                    
                    /> 
                    </label>
                    <br></br>
                    
                    <button className="button" type="submit">Logar</button>
                    <br></br><br></br>
                </form>
    
            </div>
        </div>
)};

export default Login;