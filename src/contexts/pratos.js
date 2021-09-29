import { useState, createContext,useEffect } from "react";
import firebase from "../services/firebaseConnection";

export const PratosContext = createContext({});

export default function PratosProvider({children}){
    const [pratos, setPratos] = useState([]);
    const [pratoSelecionado, setPratoSelecionado] = useState([]);

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
                    console.log(prato.id)
                })
               setPratos(list)
            })
        }
        getPratos();
    },[]);

    function deletePrato(id){
        let filtroPratos = pratoSelecionado.filter((prato)=>{
          return (prato.id !== id)
        })
        setPratoSelecionado(filtroPratos);
      }
    


    async function getOne(id){
        await firebase.firestore().collection('pratos')
        .doc(id)
        .get()
        .then((item)=>{
            const data = {
                id:item.id+Math.round(Math.random()*1000),
                descricao:item.data().description,
                imagem:item.data().imageUrl,
                valor:item.data().valor,
            }
            setPratoSelecionado([...pratoSelecionado, data])
            alert('prato selecionado')
        })
    }

    return(
        <PratosContext.Provider value={{pratos, getOne, pratoSelecionado, deletePrato}}>
            {children}
        </PratosContext.Provider>

    )
}