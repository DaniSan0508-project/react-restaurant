import './prato.css';

export function Prato({id,imagem,descricao,valor}){
    return(
        <div className="prato" key={id}>
            <img src={imagem} alt={descricao}/>
            <div>
                <strong>{descricao}</strong>
                <strong>{valor}</strong>
            </div>
        </div>
    )
}