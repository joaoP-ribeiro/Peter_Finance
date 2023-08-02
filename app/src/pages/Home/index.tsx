import React, {useState, useEffect } from "react"
import {View, TextInput, Image, ScrollView,} from "react-native"
import { ImSearch } from 'react-icons/im';
import Carta from "../../components/carta/index"

import styles from "./style"


export default function Home(){
    const [pesquisa, set_pesquisa] = useState("")

    const pesquisar_acao = (pesquisa_user: string) =>{
        set_pesquisa(pesquisa_user)

    }

    const procurar_acoes = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log(dados.stocks.length)
        console.log(dados.stocks)
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&limit=20&search=${pesquisa}`

        procurar_acoes(url_pesquisa_acao)
    }, [pesquisa])


    return(
    <View style={styles.container}>
        <Image
            source={require("../../../assets/logo.png")}
            style={styles.image}
        />
        <View style={styles.container2}>
            <View style={styles.container_input}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquise sua ação!"
                    onChangeText={pesquisar_acao}
                    value={pesquisa}
                    maxLength={20}
                />
                <button style={styles.botao}><ImSearch/></button>
            </View>
        </View>
        <View style={styles.linha}/>
        <ScrollView style={styles.container_acoes}>
            <Carta
        </ScrollView>
    </View>
    )
 }

 