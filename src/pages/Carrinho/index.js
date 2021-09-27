import './carrinho.css';

import { useEffect, useState } from "react";
import { Prato } from "../../components/Prato";

export function Carrinho(){ 
  const [pratoSelecionado, setPratoSelecionado] = useState([]);
  const [valorTotal, setValorTotal] = useState([0]);


  useEffect(()=>{
    const pratoSelecionado = localStorage.getItem('pratos')
    const valor = localStorage.getItem('valor');

    setValorTotal(JSON.parse(valor) || [0]);
    setPratoSelecionado(JSON.parse(pratoSelecionado) || [])
  },[])


  
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
                <Prato
                  id={prato.id}
                  descricao={prato.descricao}
                  imagem={prato.imagem}
                  valor={prato.valor}
                />
              </>
            )
          })
        }
        <div className="box-total">
                <div className="total">
                  <h3>Total</h3>
                  {
                    
                    valorTotal.reduce((total,valor)=>{return total + valor}).toFixed(2)
                    
                  }
                </div>
              </div>

        </article>
    </div>
  )
  }