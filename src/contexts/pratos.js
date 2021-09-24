import { useState, createContext,useEffect } from "react";
import firebase from "../services/firebaseConnection";

export const PratosContext = createContext({});

export default function PratosProvider({children}){
    const [pratos, setPratos] = useState([]);

    useEffect(()=>{
        async function getPratos(){
            await firebase.firestore().collection('pratos').get()
            .then((items)=>{
               const list = [];
               items.forEach((prato)=>{
                   list.push({
                       id:prato.id,
                       descricao:prato.data().description,
                       imagem:prato.data().imageUrl,
                       valor:prato.data().valor,
                   })
               })
               setPratos(list)
            })
        }
        getPratos();
    },[]);

    return(
        <PratosContext.Provider value={{pratos}}>
            {children}
        </PratosContext.Provider>

    )
}