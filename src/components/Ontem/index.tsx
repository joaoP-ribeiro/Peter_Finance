import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import { BiHistory } from 'react-icons/bi';
import styles from "./style"
import Linha from "../Linha/index"

interface tabela_props{
    nome_acao: string
}

interface Ontem_inf {
    regularMarketPreviousClose: number,
    priceEarnings: number,
    regularMarketChange: number,
    regularMarketChangePercent: number,
    regularMarketPrice: number,
    earningsPerShare: number
}

const Ontem: React.FC<tabela_props> = ({nome_acao}) =>{
    const[ontem_acao, set_ontem_acao]= useState<Ontem_inf | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_ontem_acao(dados.results[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true`
        procurar_acao(url_pesquisa_acao)
    }, [])

    return(
        <View style={styles.container_tabela}>
            <View style={styles.container_informacoes}>
                <Linha titulo="Fechamento Anterior:" sifra="R$: " valor={ontem_acao?.regularMarketPreviousClose.toFixed(2)}/>
                <Linha titulo="Valor Atual:" sifra="R$: " valor={ontem_acao?.regularMarketPrice.toFixed(2)}/>
                <Linha titulo="Variação do Valor:" sifra="R$: " valor={ontem_acao?.regularMarketChange.toFixed(2)}/>
                <Linha titulo="Porcentagem Variação:" sifra="%: " valor={ontem_acao?.regularMarketChangePercent.toFixed(2)}/>
                <Linha titulo="Lucro Por Ação:" sifra="R$: " valor={ontem_acao?.earningsPerShare.toFixed(2)}/>
                <Linha titulo="P/E:" sifra="R$: " valor={ontem_acao?.priceEarnings.toFixed(2)}/>
            </View>
            <View style={styles.logo}><BiHistory/></View>
        </View>
    )
}
export default Ontem