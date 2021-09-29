import './carrinho.css';

import { useEffect, useState } from "react";
import { Prato } from "../../components/Prato";


export function Carrinho(){ 
  const [pratos, setPratos] = useState([]);

  useEffect(()=>{
    const minhaLista = localStorage.getItem('pratos');
    setPratos(JSON.parse(minhaLista) || [])

  },[])




  function deletePrato(id){
    let filtroPratos = pratos.filter((prato)=>{
      return (prato.id !== id)
    })
    setPratos(filtroPratos);
    localStorage.setItem('pratos',JSON.stringify(filtroPratos))
  }


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