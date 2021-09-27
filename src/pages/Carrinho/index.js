import './carrinho.css';

import { useEffect, useState } from "react";
import { Prato } from "../../components/Prato";


export function Carrinho(){ 
  const [pratoSelecionado, setPratoSelecionado] = useState([]);
  const [valorTotal, setValorTotal] = useState([0]);

  useEffect(()=>{
    const prato = localStorage.getItem('pratos')
    const valor = localStorage.getItem('valor');

    console.log(JSON.parse(prato))
    console.log(JSON.parse(valor))
  },[])

  function removePrato(id){
    let filtraPratos = pratoSelecionado.filter((item)=>{
      return (item.id !== id)
    })
    setPratoSelecionado(filtraPratos);
    localStorage.setItem('pratos',JSON.stringify(filtraPratos))
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
                    {
                      valorTotal.reduce((total,valor)=>{return total + valor})
                    }
                  </div>
          </div>
        </article>
    </div>
  )
  }