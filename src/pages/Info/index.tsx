import {View, TextInput, Image, ScrollView, Text, Button } from "react-native"
import { useNavigation } from '@react-navigation/native';
import styles from "./style"

type Inf_acao = {
    logourl: string, 
    symbol: string,
    longName: string
}

type InfoProps = {
    route: {
      params: {
        inf_acao: Inf_acao;
      };
    };
  };

//

const Info: React.FC<InfoProps> = ({ route }) => {
    const { navigate } = useNavigation();
    const { inf_acao } = route.params;

    return(
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Text style={styles.text}>PETER FINANCE</Text>
        </View>
      </View>


      <View style={styles.container_p}>
        <View style={styles.container4}>
          <View style={styles.container_nomes}>
            <View style={styles.container_nomes_img}>
              <Image
                    source={{uri: inf_acao.logourl}}
                    style={styles.imagem}
              />
            </View>
            <View style={styles.container_nomes_inf}>
              <View style={styles.container_nomes_symbol}>
                  <Text style={styles.symbol}>{inf_acao.symbol}</Text>
              </View>
              <View style={styles.container_nomes_shortName}>
                  <Text style={styles.shortName}>{inf_acao.longName}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container5}>   
          <View style={styles.cor}></View>
        </View>
      </View>
        
    </View>
    )
}


export default Info