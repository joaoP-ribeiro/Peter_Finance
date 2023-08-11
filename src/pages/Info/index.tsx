import {View, TextInput, Image, ScrollView, Text, Button,  } from "react-native"
import {useState, useEffect } from "react"
import { BsDashLg } from 'react-icons/bs';
import styles from "./style"

interface info_props{
  nome_acao: string;
  valor_acao: number;
}

interface Acao {
  regularMarketChange: number,
  regularMarketChangePercent: number,
  logourl: string;
  longName: string
}

const Info: React.FC<info_props> = ({ nome_acao, valor_acao }) => {
    const[acao_encontrada, set_acao_encontrada]= useState<Acao | null>(null);

    const procurar_acao = async(url:string) =>{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        set_acao_encontrada(dados.results[0])
        console.log(dados.results[0])
    }

    useEffect(() => {
        const url_pesquisa_acao = `https://brapi.dev/api/quote/${(nome_acao)}?range=1d&interval=1d&fundamental=true&dividends=true'`
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
    <View style={styles.container_back}>
       <View style={styles.container}>
        <View style={styles.container_traco}>
            <Text style={styles.traco}><BsDashLg/></Text>
        </View>
        <View style={styles.container_valor_mm}>
          <View style={styles.container_valor_lp}>
            <View style={styles.back}>
            {acao_encontrada && acao_encontrada.regularMarketChange ? (
                    <Text style={estilo(acao_encontrada.regularMarketChangePercent)}>
                      R$: {acao_encontrada.regularMarketChange.toFixed(2)}
                    </Text>
                ) : (
                    <Text style={styles.verde}> R$: 0.00</Text>
                )}
            </View>
          </View>
        </View>
          <View style={styles.container_inf}>
              <View style={styles.container_img}>
                {acao_encontrada && acao_encontrada.logourl ? (
                    <Image
                      source={{ uri: acao_encontrada.logourl }}
                      style={styles.imagem}
                    />
                ) : (
                    <Text></Text>
                )}
              </View>
              <View style={styles.container_nome}>
                  {acao_encontrada && acao_encontrada.longName ? (
                    <Text style={styles.text}>
                      {acao_encontrada.longName}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
              </View>
              <View style={styles.container_valor}>
                <Text style={styles.text_val}>R$: {valor_acao.toFixed(2)}</Text>
              </View>
          </View>
          <View style={styles.container_linha}>
            <View style={styles.linha}>

            </View>
          </View>
       </View>
    </View>
    )
}

export default Info