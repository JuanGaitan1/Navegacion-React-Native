import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    colorPrincipal:{
        backgroundColor: '#7fd4d6'
    },
    title:{
       fontSize: 30 
    },
    botonGrande:{
        width:50,
        height:50,
        backgroundColor:"#259399",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50,
        marginLeft:70,
    },
    BotonGrandeTexto:{
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    },
    avatarContainer:{
        alignItems: 'center'

    },
    menuContainer:{
        marginVertical: 50,
        marginHorizontal: 30
    },
    menuBoton:{
        marginVertical: 30,
        
    },
    menuTexto:{
        fontSize:20
    }
})