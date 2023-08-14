import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import styles from "./style"

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

const Tabela: React.FC<tabela_props> = ({nome_acao}) =>{
    const[valores_acao, set_valores_acao]= useState<Atualizado | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_valores_acao(dados.results[0].historicalDataPrice[0])
        console.log(dados.results[0].historicalDataPrice[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true`
        procurar_acao(url_pesquisa_acao)
    }, [])


    return(
        <View style={styles.container_informacoes}>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Abertura:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>R$: {valores_acao?.open.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Alta:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>R$: {valores_acao?.high.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Baixa:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>R$: {valores_acao?.low.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Fechamento:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>R$: {valores_acao?.close.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Ajuste:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>R$: {valores_acao?.adjustedClose.toFixed(2)}</Text>
                </View>
            </View>
            <View style={styles.container_inf}>
                <View style={styles.inf_titulo}>
                    <Text style={styles.titulo}>Compras:</Text>
                </View>
                <View style={styles.inf_valor}>
                    <Text  style={styles.valor}>{valores_acao?.volume}</Text>
                </View>
            </View>
        </View>
    )


}

export default Tabela