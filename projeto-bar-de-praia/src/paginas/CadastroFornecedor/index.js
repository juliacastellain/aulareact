import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgFornecedor from '../../img/supplier.png';
import './style.css';
import api from '../services/api';

function CadastroFornecedor(){

    const [codfornecedor, setcodfornecedor] = useState('');
    const [nomefantasia, setNomefantasia] = useState('');
    const [cnpj, setCnpj] = useState('');

    async function handleCadastroFornecedor(e){
        e.preventDefault();

        const dadosFornecedor = {
            codfornecedor,
            nomefantasia,
            cnpj
        };

        try{
            const response = await api.post('fornecedores', dadosFornecedor);
            alert("Cadastrado com sucesso!");
        } catch (error){
            alert("Erro no cadastro do fornecedor!")
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

            <div id="fornecedor-container">
                <h1>Cadastro de Fornecedor</h1>
                <img src={imgFornecedor}/>

                <form id="form-fornecedor" onSubmit={handleCadastroFornecedor}>
                    <label>Código do Fornecedor: 
                    <br></br>
                    <input
                        value={codfornecedor}
                        onChange={e => setcodfornecedor(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Nome Fantasia: 
                    <br></br>
                    <input 
                        value={nomefantasia}
                        onChange={e => setNomefantasia(e.target.value)}                    
                    /> 
                    </label>
                    <br></br>

                    <label>CNPJ:  
                    <br></br>
                    <input 
                        type="number"
                        value={cnpj}
                        onChange={e => setCnpj(e.target.value)}
                    /> 
                    </label>
                    <br></br>
                    
                    <button className="button" type="submit">Cadastrar</button>
                    <br></br><br></br>
                </form>
    
            </div>
        </div>
)};

export default CadastroFornecedor;