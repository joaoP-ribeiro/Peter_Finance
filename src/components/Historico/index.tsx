import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import styles from "./style"
import Linha from "../Linha/index"

interface tabela_props{
    nome_acao: string
}

interface Historico_inf {
    adjustedClose: number,
    close: number,
    high: number,
    low: number,
    open: number,
    volume: number
}

const Historico: React.FC<tabela_props> = ({nome_acao}) =>{
    const[historico_acao, set_historico_acao]= useState<Historico_inf | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_historico_acao(dados.results[0].historicalDataPrice[0])
        console.log(dados.results[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true`
        procurar_acao(url_pesquisa_acao)
    }, [])

    return(
        <View style={styles.container_tabela}>
            <View style={styles.container_informacoes}>
                
            </View>
        </View>
    )
}
export default Historico