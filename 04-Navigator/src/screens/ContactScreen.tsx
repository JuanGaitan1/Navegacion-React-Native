import React, {useContext} from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'


export const ContactScreen = () =>{

    const {signIn, authState} = useContext(AuthContext)

    return(
        <View style= {styles.globalMargin}>
            <Text style= { styles.title}>
               { 
               !authState.isLoggedIn ? <Button title='SignIn' onPress={signIn}/> : <Text>Logeado</Text> 
               }
               
                   
            </Text>
        </View>
    )
}