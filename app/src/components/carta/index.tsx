import {View, TextInput,Text, Image, ScrollView,} from "react-native"
import { ImSearch } from 'react-icons/im';

import styles from "./style"

export default function Carta(stock: string, name: string, logo: string, close: number, change: number ){
    return(
        <View>
            <View>
                <View>
                    <Image
                        source={require(logo)}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
            <Text></Text>
            <View>
                <View></View>
                <View></View>
            </View>
        </View>
    )
}