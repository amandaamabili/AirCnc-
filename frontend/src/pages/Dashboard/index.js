import React, {useEffect, useState}from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

//loadspots ira carregar os spots
export default function Dashboard(){
    const [ spots, setSpots]=useState([]);//esta vindo do back, por querer que venha array coloco a lista vazia []

    useEffect(()=>{
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {user_id}
            });
                setSpots(response.data);
        }
        loadSpots();

    },[]);// toda vez que o usuario muda o filtro faz uma nova busc na api, array vazio busca somente uma vez
    return (
<>
<ul className="spot-list">
        {spots.map(spot => (
        <li key={spot._id}>
            <header style= {{backgroundImage:`url(${spot.thumbnail_url})`}}></header>
        <strong>{spot.company}</strong>
<span>{spot.price ? `R$ ${spot.price}/dia` : `Gratuito`}</span>
        </li>
        
        ))}

</ul>
<Link to= "/new">
    <button className="btn">Cadastrar novo spot</button>
</Link>
</>//listagem dos spots
//header para todos ficarem do mesmo tamanho
    ) 
}