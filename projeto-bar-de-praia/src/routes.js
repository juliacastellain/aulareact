import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CadastroCliente from './paginas/CadastroCliente';
import CadastroProduto from './paginas/CadastroProduto';
import CadastroPedido from './paginas/CadastroPedido';
import CadastroFornecedor from './paginas/CadastroFornecedor';
import Clientes from './paginas/Clientes';
import Login from './paginas/Login';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login}/>
            <Route path="/CadastroCliente" exact={true} component={CadastroCliente}/>
            <Route path="/CadastroProduto" exact={true} component={CadastroProduto}/>
            <Route path="/CadastroPedido" exact={true} component={CadastroPedido}/>
            <Route path="/CadastroFornecedor" exact={true} component={CadastroFornecedor}/>
            <Route path="/Clientes" exact={true} component={Clientes}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;