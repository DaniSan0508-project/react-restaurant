import './carrinho.css';

import { useContext, useEffect, useState } from "react";
import { Prato } from "../../components/Prato";
import { PratosContext } from '../../contexts/pratos';


export function Carrinho(){ 
  const { pratoSelecionado, deletePrato } = useContext(PratosContext)
  const [pratos, setPratos] = useState([]);

  useEffect(()=>{
    setPratos(pratoSelecionado)
  },[pratoSelecionado])


  function somaTotal(){
    const total = [0]
    pratos.forEach((prato)=>{
      total.push(parseFloat(prato.valor))
    })
    return total.reduce((total,valor)=>{return total + valor})
  }


  return(

    <div className="menu container">
      <article>
        {
          pratoSelecionado.length === 0 && <h1>Nenhum prato Selecionado</h1>
        }

        {
          pratos.map((prato)=>{
      
            somaTotal(prato)
            return(
              <>
              <div key={prato.id}>
                <Prato  
                  id={prato.id}
                  descricao={prato.descricao}
                  imagem={prato.imagem}
                  valor={prato.valor}
                />  
                <button onClick={()=>{deletePrato(prato.id)}}>Remover</button>
              </div>
              </>
            )
          })
        }
          <div className="box-total">
                  <div className="total">
                    <h3>Total</h3>
                  {somaTotal().toFixed(2)}
                  </div>
          </div>
        </article>
    </div>
  )
  }