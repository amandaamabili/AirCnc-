import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes(){
    return(
        // BrowserRouter, mais de uma rota é chamada, Switch: deixa somente uma rota ser chamada
        //EXACT só irá chmar a rota se for exatamente o que esta escrito, pois senão ele procura todas as rotas que conterem o caractere
        <BrowserRouter>
        <Switch>
            <Route  path="/"  exact component={Login}/> 
            <Route  path="/dashboard" component={Dashboard}/>
            <Route  path="/new" component={New}/>
        </Switch>
        
        
        </BrowserRouter>
    )
}