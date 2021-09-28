import './carrinho.css';

import { useEffect, useState } from "react";
import { Prato } from "../../components/Prato";


export function Carrinho(){ 
  const [pratoSelecionado, setPratoSelecionado] = useState([]);
  const [valorTotal, setValorTotal] = useState([]);


  useEffect(()=>{
    
    const prato = JSON.parse(localStorage.getItem('pratos'))
    setPratoSelecionado(prato || [])
  },[pratoSelecionado])




  function removePrato(id){

    let filtraPratos = pratoSelecionado.filter((item)=>{
      return (item.id !== id)
    })
    

    setPratoSelecionado(filtraPratos);
    localStorage.setItem('pratos',JSON.stringify(filtraPratos))
  }

  function somaTotal(){
    const total = [0]
    pratoSelecionado.forEach((prato)=>{
      total.push(parseFloat(prato.valor))
    })
    return total.reduce((total,valor)=>{return total + valor})
  }


  return(

    <div className="menu container">
      <article>
        {
          pratoSelecionado.length === 0 && (
          
          <div>
            <h1>Nenhum prato Selecionado</h1>
          </div>
          )
        }

        {
          pratoSelecionado.map((prato)=>{
            somaTotal()
            return(
              <>
              <div>
                <Prato
                  id={prato.id}
                  descricao={prato.descricao}
                  imagem={prato.imagem}
                  valor={prato.valor}
                />  
                <button onClick={()=>{removePrato(prato.id)}}>Remover</button>
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