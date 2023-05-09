import  React, {useContext}  from "react";
import { Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../theme/appTheme";
 
export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    const {authState} = useContext(AuthContext)

    return(

        <View style={{
            ...styles.globalMargin,
            marginTop:insets.top + 20
        }}>

            <Text style={styles.title}> Ajustes</Text>
            <Text>{JSON.stringify( authState, null , 4)}</Text>

            {
                authState.favoriteIcon && (
                     <Icon
                        name={authState.favoriteIcon}
                        size={150}
                        color="#7fd4d6"
                    />
                )
            }

           
        </View>
    )
}