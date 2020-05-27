import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgProduto from '../../img/product.png';
import './style.css';
import api from '../services/api';

function CadastroProduto(){

    const [codproduto, setcodproduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precounitario, setprecounitario] = useState('');
    const [fornecedor, setFornecedor] = useState('');

    async function handleCadastroProduto(e){
        e.preventDefault();

        const dadosProduto = {
            codproduto,
            descricao,
            categoria,
            precounitario,
            fornecedor
        };

        try{
            const response = await api.post('produtos', dadosProduto);
            alert("Cadastrado com sucesso!");
        } catch (error){
            alert("Erro no cadastro do Produto!")
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

            <div id="Produto-container">
                <h1>Cadastro de Produto</h1>
                <img src={imgProduto}/>

                <form id="form-Produto" onSubmit={handleCadastroProduto}>
                    <label>Código do Produto:
                    <br></br>
                    <input
                        value={codproduto}
                        onChange={e => setcodproduto(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Descrição do Produto:
                    <br></br>
                    <input
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Categoria:
                    <br></br>
                    <select  value={categoria} onChange={e => setCategoria(e.target.value)}>
                        <option>Comida</option>
                        <option>Bebida</option>
                        <option>Condimento</option>
                    </select>
                    </label>
                    <br></br>
                    <br></br>

                    <label>Preço Unitário: 
                    <br></br>
                    <input 
                        value={precounitario}
                        onChange={e => setprecounitario(e.target.value)}                    
                    /> 
                    </label>
                    <br></br>

                    <label>Fornecedor: 
                    <br></br>
                    <input 
                        value={fornecedor}
                        onChange={e => setFornecedor(e.target.value)}
                    /> 
                    </label>
                    <br></br>
                    
                    <button className="button" type="submit">Cadastrar</button>
                    <br></br><br></br>
                </form>
    
            </div>
        </div>
)};

export default CadastroProduto;