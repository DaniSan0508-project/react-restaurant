import './prato.css';

export function Prato({id,imagem,descricao,valor}){
    return(
        <a onClick={()=>{alert('teste')}} type="button" className="prato" key={id}>
            <img src={imagem} alt={descricao}/>
            <div>
                <strong>{descricao}</strong>
                <strong>{valor}</strong>
            </div>
        </a>
    )
}