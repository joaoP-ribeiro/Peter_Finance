import {View, TextInput,Text, Image, ScrollView, TouchableOpacity} from "react-native"
import { BiSolidUpArrow } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import {useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native';

import styles from "./style"

type Acao = {
    stock: string,
    name: string,
    close: number,
    change: number,
    logo: string
}

type Inf_acao = {
    logourl: string
}


export default function Carta({ acao }: { acao: Acao }) {
    const navigation = useNavigation();
    const[acao_encontrada, set_acao_encontrada]= useState<Inf_acao | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_acao_encontrada(dados.results[0])
        console.log(dados.results[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${acao.stock}?range=1d&interval=1d&fundamental=true&dividends=true'`
        procurar_acao(url_pesquisa_acao)
    }, [])

    function estilo(valor: number) {
        if (valor < 0) {
          return styles.vermelho;
        } else {
          return styles.verde;
        }
      }

    return(

        <TouchableOpacity
            onPress={() => navigation.navigate("Info", {inf_acao : acao_encontrada})}
        >
            <View style={styles.container}>
                <View style={styles.container_div}>
                    <View style={styles.container_img}>
                        <Image
                            source={{uri: acao.logo}}
                            style={styles.imagem}
                        />
                    </View>
                    <View style={styles.container_text}>
                        <View style={styles.nomes}>
                            <View style={styles.sockt}>
                                <Text style={styles.text}>{acao.stock}</Text>
                            </View>
                            <View style={styles.nome}>
                                <Text style={styles.text2}>{acao.name}</Text>
                            </View>
                        </View>
                        <View style={styles.valores}>
                            <View>
                                <Text style={styles.preco}>R$: {acao.close.toFixed(2)}</Text>
                            </View>
                            <View style={styles.precos}>
                                <Text style={estilo(acao.change)}>{ acao.change < 0 ? <BiSolidDownArrow/>:<BiSolidUpArrow/>}</Text>
                                <Text style={estilo(acao.change)}>{ acao.change.toFixed(2)}</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View>
                    
                </View>
                
            </View>
        </TouchableOpacity>

        
    )
}