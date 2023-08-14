import {useState, useEffect } from "react"
import {View, TextInput, Image, ScrollView, Text } from "react-native"
import { ImSearch } from 'react-icons/im';
import Carta from "../../components/Carta/index"

import styles from "./style"



export default function Home(){
    const [pesquisa, set_pesquisa] = useState("")
    const[acoes_encontradas, set_acoes_encontradas]= useState([])

    const pesquisar_acao = (pesquisa_user: string) =>{
        set_pesquisa(pesquisa_user)

    }

    const procurar_acoes = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_acoes_encontradas(dados.stocks)
        
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/list?sortBy=close&sortOrder=desc&limit=10&search=${pesquisa}`

        procurar_acoes(url_pesquisa_acao)
    }, [pesquisa])


    return(
    <View style={styles.container}>
        <View style={styles.container2}>
            <View style={styles.container3}>
                <Text style={styles.text}>PETER FINANCE</Text>
                <View style={styles.container_input}>
                <button style={styles.botao}><ImSearch/></button>
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquise sua ação!"
                        onChangeText={pesquisar_acao}
                        value={pesquisa}
                        maxLength={20}
                    />
                
                </View>
            </View>
        </View>
        <ScrollView style={styles.container_acoes}>
                {acoes_encontradas.length > 0 && acoes_encontradas.map((stocks) => <Carta key={stocks} acao={stocks}/>)}
        </ScrollView>
        
    </View>
    )
 }

 