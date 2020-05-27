import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgPedido from '../../img/order.png';
import './style.css';
import api from '../services/api';

function CadastroPedido(){

    const [numeropedido, setnumeropedido] = useState('');
    const [cliente, setCliente] = useState('');
    const [valor, setValor] = useState('');
    const [formapagamento, setformapagamento] = useState('');
    const [notafiscal, setNotafiscal] = useState('');

    async function handleCadastroPedido(e){
        e.preventDefault();

        const dadosPedido = {
            numeropedido,
            cliente,
            valor,
            formapagamento,
            notafiscal
        };

        try{
            const response = await api.post('pedidos', dadosPedido);
            alert("Cadastrado com sucesso!");
        } catch (error){
            alert("Erro no cadastro do pedido!")
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

            <div id="pedido-container">
                <h1>Cadastro de Pedido</h1>
                <img src={imgPedido}/>

                <form id="form-pedido" onSubmit={handleCadastroPedido}>
                    <label>Número do Pedido: 
                    <br></br>
                    <input
                        type="number"
                        value={numeropedido}
                        onChange={e => setnumeropedido(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Cliente:
                    <br></br>
                    <input
                        value={cliente}
                        onChange={e => setCliente(e.target.value)}
                    />
                    </label>
                    <br></br>

                    <label>Valor Total: 
                    <br></br>
                    <input 
                        value={valor}
                        onChange={e => setValor(e.target.value)}                    
                    /> 
                    </label>
                    <br></br>

                    <label>Forma de Pagamento
                    <br></br>
                    <select  value={formapagamento} onChange={e => setformapagamento(e.target.value)}>
                        <option>Crédito</option>
                        <option>Débito</option>
                    </select>
                    </label>
                    <br></br>
                    <br></br>


                    <label>Nº Nota Fiscal:
                    <br></br>
                    <input 
                        type="number"
                        value={notafiscal}
                        onChange={e => setNotafiscal(e.target.value)}
                    /> 
                    </label>
                    <br></br>
                    
                    <button className="button" type="submit">Cadastrar</button>
                    <br></br><br></br>
                </form>
    
            </div>
        </div>
)};

export default CadastroPedido;