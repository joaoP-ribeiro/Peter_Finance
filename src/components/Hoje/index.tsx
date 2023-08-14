import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import styles from "./style"
import Linha from "../Linha/index"

interface tabela_props{
    nome_acao: string
}

interface Atualizado {
    adjustedClose: number,
    close: number,
    high: number,
    low: number,
    open: number,
    volume: number
}

const Hoje: React.FC<tabela_props> = ({nome_acao}) =>{
    const[valores_acao, set_valores_acao]= useState<Atualizado | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_valores_acao(dados.results[0].historicalDataPrice[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true`
        procurar_acao(url_pesquisa_acao)
    }, [])


    return(
        <View style={styles.container_tabela}>
            <View style={styles.container_informacoes}>
                <Linha titulo="Abertura:" sifra="R$: " valor={valores_acao?.open.toFixed(2)}/>
                <Linha titulo="Alta:" sifra="R$: " valor={valores_acao?.high.toFixed(2)}/>
                <Linha titulo="Baixa:" sifra="R$: " valor={valores_acao?.low.toFixed(2)}/>
                <Linha titulo="Fechamento:" sifra="R$: " valor={valores_acao?.close.toFixed(2)}/>
                <Linha titulo="Ajuste:" sifra="R$: " valor={valores_acao?.adjustedClose.toFixed(2)}/>
                <Linha titulo="Compras:" sifra="" valor={valores_acao?.volume}/>
            </View>
        </View>
    )


}

export default Hoje