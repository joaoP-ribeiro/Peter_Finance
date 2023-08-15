import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import { FaBirthdayCake } from 'react-icons/fa';
import styles from "./style"
import Linha from "../Linha/index"

interface tabela_props{
    nome_acao: string
}

interface Ano_inf {
    fiftyTwoWeekHigh: number,
    fiftyTwoWeekHighChange: number,
    fiftyTwoWeekHighChangePercent: number,
    fiftyTwoWeekLowChange: number,
    fiftyTwoWeekLow: number,
}

const Ano: React.FC<tabela_props> = ({nome_acao}) =>{
    const[ano_acao, set_ano_acao]= useState<Ano_inf | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_ano_acao(dados.results[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true`
        procurar_acao(url_pesquisa_acao)
    }, [])


    return(
        <View style={styles.container_tabela}>
            <View style={styles.container_informacoes}>
                <Linha titulo="Alta Ano:" sifra="R$: " valor={ano_acao?.fiftyTwoWeekHigh.toFixed(2)}/>
                <Linha titulo="Alta Para Atual:" sifra="R$: " valor={ano_acao?.fiftyTwoWeekHighChange.toFixed(2)}/>
                <Linha titulo="Porcentagem Variação:" sifra="% " valor={ano_acao?.fiftyTwoWeekHighChangePercent.toFixed(2)}/>
                <Linha titulo="Baixa Ano:" sifra="R$: " valor={ano_acao?.fiftyTwoWeekLow.toFixed(2)}/>
                <Linha titulo="Baixa Para Atual:" sifra="R$: " valor={ano_acao?.fiftyTwoWeekLowChange.toFixed(2)}/>
            </View>
            <View style={styles.logo}><FaBirthdayCake/></View>
        </View>
    )


}

export default Ano