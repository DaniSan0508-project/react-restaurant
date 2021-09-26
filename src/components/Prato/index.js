import './prato.css';
import { useContext } from 'react';
import { PratosContext } from '../../contexts/pratos';


export function Prato({id,imagem,descricao,valor}){

    const {getOne} = useContext(PratosContext);

    return(
        <button onClick={()=>getOne(id)} type="button" className="prato" key={id}>
            <img src={imagem} alt={descricao}/>
            <div>
                <strong>{descricao}</strong>
                <strong>{valor}</strong>
            </div>
        </button>
    )
}