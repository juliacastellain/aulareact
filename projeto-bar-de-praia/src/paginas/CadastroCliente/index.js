import React, { useState, useEffect } from 'react';
import imgCliente from '../../img/client.png';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../services/api';

function CadastroCliente(){

    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    async function handleCadastroCliente(e){
        e.preventDefault();

        const dadosCliente = {
            nome,
            genero,
            cpf,
            telefone
        };

        try{
            const response = await api.post('clientes', dadosCliente);
            alert("Cadastrado com sucesso!");
        } catch (error){
            alert("Erro no cadastro do cliente!")
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
                <h1>Cadastro de Cliente</h1>
                <img id="cliente" src={imgCliente}/>

                <form id="form-cliente" onSubmit={handleCadastroCliente}>
                    <label>Nome Completo:
                    <br></br>
                    <input
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Gênero:
                    <br></br>
                    <select  value={genero} onChange={e => setGenero(e.target.value)}>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Não-Binário</option>
                    </select>
                    </label>
                    <br></br>
                    <br></br>

                    <label>CPF: 
                    <br></br>
                    <input 
                        type="number"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}                    
                    /> 
                    </label>
                    <br></br>

                    <label>Telefone: 
                    <br></br>
                    <input 
                        type="number"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    /> 
                    </label>
                    <br></br>
                    
                    <button className="button" type="submit">Cadastrar</button>
                    <br></br><br></br>
                </form>
    
            </div>
        </div>
)};

export default CadastroCliente;