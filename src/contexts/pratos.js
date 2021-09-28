import { useState, createContext,useEffect } from "react";
import firebase from "../services/firebaseConnection";

export const PratosContext = createContext({});

export default function PratosProvider({children}){
    const [pratos, setPratos] = useState([]);
    const [selecaoPratos, setSelecaoPratos] = useState([]);
    const [valorTotal, setValorTotal] = useState([0]);

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


    async function getOne(id){
        await firebase.firestore().collection('pratos')
        .doc(id)
        .get()
        .then((item)=>{
            const data = {
                id:item.id,
                descricao:item.data().description,
                imagem:item.data().imageUrl,
                valor:item.data().valor,
            }
            setSelecaoPratos([...selecaoPratos, data])
            localStorage.setItem('pratos',JSON.stringify(selecaoPratos))
        })
    }

    return(
        <PratosContext.Provider value={{pratos, getOne, selecaoPratos}}>
            {children}
        </PratosContext.Provider>

    )
}