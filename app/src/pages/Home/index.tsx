import React, {useState, useEffect } from "react"
import {View, TextInput,Text, StyleSheet,} from "react-native"
import { ImSearch } from 'react-icons/im';

import config from "../../config/config";

const busca = config.VITE_API_BUSCA;


export default function Home(){
    const [pesquisa, set_pesquisa] = useState("")

    const pesquisar_acao = (pesquisa_user: string) =>{
        set_pesquisa(pesquisa_user)

    }

    const procurar_acoes = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log(dados)
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&limit=15&search=${pesquisa}`

        procurar_acoes(url_pesquisa_acao)
    }, [pesquisa])


    return(
    <View style={styles.container}>
        <View>
            <View style={styles.container_input}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    onChangeText={procurar_acoes}
                    value={pesquisa}
                />
                <button style={styles.botao}><ImSearch/></button>
            </View>
        </View>
        
      
    </View>
    )
 }

 const styles = StyleSheet.create({
    container: {
      flex:1, 
      backgroundColor: "#1E1E1E"
    
    },

    container_input:{
        flexDirection: "row",
        height: 40,
        borderRadius: 32,
        backgroundColor: "#FF3131",
    },
    input: {
        borderWidth: 0,
        borderColor: 'transparent',
        textAlign: "center",
        width: "90%",
        height: "100%",
        fontSize: 16,
        outlineColor: 'transparent',
        outlineWidth: 0,
    },

    botao:{
        margin: 2,
        height: "100%",
        fontSize: 16,
        width: "10%",
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: 'transparent',
    }
  });
  
