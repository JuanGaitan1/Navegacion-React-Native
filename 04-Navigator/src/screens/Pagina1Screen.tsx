
import React from "react";
import { Text, View , Button, TouchableOpacity} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { styles } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Props) =>{

return(
    <View style= {styles.globalMargin}>

        <Text style= {{...styles.title, margin:20}}> Pagina1Screen </Text>
        
        <View >

            <Button
            title="ir pagina 2"
            onPress={() => navigation.navigate('Pagina2Screen')}
            />
            
        </View>

<Text style={{margin:20 , marginLeft:100}}> Navegar con argumentos</Text>

        <View style= {{flexDirection: 'row', justifyContent: 'space-between'}}>


            <TouchableOpacity 
                style={styles.botonGrande}
                onPress={()=> navigation.navigate ('PersonaScreen', {
                    id : 1,
                    Nombre: 'Pedro'
                })}
            >
                <Text style={styles.BotonGrandeTexto}>
                    <Icon name="body-outline" size={20} color= "#aa5435" />
                </Text>
            </TouchableOpacity>


            <TouchableOpacity
            style={styles.botonGrande}
                onPress={()=> navigation.navigate ('PersonaScreen', {
                    id : 2,
                    Nombre: 'Maria'
                })}>

                <Text style={styles.BotonGrandeTexto} >
                    <Icon name="woman-outline" size={20} color= "#e5016b" />
                </Text>
            </TouchableOpacity>

        </View>
    </View>
)
}