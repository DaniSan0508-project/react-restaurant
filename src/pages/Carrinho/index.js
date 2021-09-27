import './carrinho.css';

import { useContext, useEffect, useState } from "react";
import { Prato } from "../../components/Prato";
import { PratosContext } from '../../contexts/pratos';
export function Carrinho(){ 
  const [pratoSelecionado, setPratoSelecionado] = useState([]);

  const { valorTotal } = useContext(PratosContext)

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
          <div>
            {
              valorTotal.reduce((total,valor)=>{return total + valor})
            }
          </div>
        
        </article>
    </div>
  )
  }