import './menu.css';
import { useContext } from 'react';
import { PratosContext } from '../../contexts/pratos';
import { Prato } from '../../components/Prato';

export function Menu(){

    //variavel do contexto global
    const { pratos } = useContext(PratosContext)

    return(
        <div className="container">
            <div className="menu">
            <article>
                        {
                        pratos.map((prato)=>{
                            return(
                                    <Prato 
                                    key={prato.id}
                                    id={prato.id} 
                                    imagem={prato.imagem} 
                                    descricao={prato.descricao} 
                                    valor={prato.valor}/>
                            )
                        })
                        }
            </article>
            </div>
        </div>
    )
}