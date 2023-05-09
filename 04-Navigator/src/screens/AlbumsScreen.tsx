import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'


export const AlbumsScreen = () =>{


    const {logout, authState: {isLoggedIn}} = useContext (AuthContext);

    return(
        <View style= {styles.globalMargin}>
            <Text style={styles.title}> albums </Text>
            {
                isLoggedIn && (
                    <Button
                    title='Deslogear'
                    onPress={logout}
                    />
                    )
            }
        </View>
    )
}