import './menu.css';
import { useState, useContext } from 'react';
import { PratosContext } from '../../contexts/pratos';
import { Prato } from '../../components/Prato';

export function Menu(){

    //variavel do contexto global
    const { pratos } = useContext(PratosContext)

    return(
        <div className="menu container">
           <article>
                    {
                     pratos.map((prato)=>{
                         return(
                            <Prato id={prato.id} 
                            imagem={prato.imagem} 
                            descricao={prato.descricao} 
                            valor={prato.valor}/> 
                        )
                     })
                    }
           </article>
        </div>
    )
}