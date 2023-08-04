import {View, TextInput, Image, ScrollView, Text, Button } from "react-native"
import { useNavigation } from '@react-navigation/native';
import styles from "./style"

type Inf_acao = {
    logourl: string
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
      <View style={styles.container_inf_nome}>
          <Image
            source={{ uri: inf_acao.logourl }}
            style={styles.imagem}
          />
        <View>
          {/* Outros elementos aqui */}
        </View>
      </View>
      <Button
        title="voltar"
        onPress={() => {
          navigate("Home");
        }}
      />
    </View>
    )
}


export default Info