import './carrinho.css';

import { useEffect, useState } from "react";
import { Prato } from "../../components/Prato";
export function Carrinho(){ 
  const [pratoSelecionado, setPratoSelecionado] = useState([{id:1}]);
  
  
  useEffect(()=>{
    const pratoSelecionado = localStorage.getItem('pratos')
    setPratoSelecionado(JSON.parse(pratoSelecionado) || [])
  },[])
  return(

    <div className="menu container">
      <article>
        {
          pratoSelecionado.length === 0 && <h1>Nenhum prato Selecionado</h1>
        }

        {
          pratoSelecionado.map((prato)=>{
            return(
              <Prato
                id={prato.id}
                descricao={prato.descricao}
                imagem={prato.imagem}
                valor={prato.valor}
              />
            )
          })
        }
        </article>
    </div>
  )

}