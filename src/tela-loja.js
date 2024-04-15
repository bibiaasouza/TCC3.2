import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import './App.css';
import Loja from './loja.jpg';
import Navbar from './Navbar';

function Coco(){
    return(
        <div class="loja">
        <img src={Loja} class='./loja.jpg' alt="..." height={350} width={390}></img>
        <div class="nome">
        <p>Coco & Lola</p>
        </div>
        </div>
    )
}

export default Coco;