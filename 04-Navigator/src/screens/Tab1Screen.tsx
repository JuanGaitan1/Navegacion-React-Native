import React, { useEffect } from "react";
import { TouchableIcon } from "../components/TouchableIcon";


import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";



export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1 Screen');
    }, [])

    return(
        <View style={styles.globalMargin}>

            <Text style={ styles.title}> Iconos </Text>
            
            <Text>
            <TouchableIcon iconName='bandage-outline'  />
            <TouchableIcon iconName='american-football-outline'  />
            <TouchableIcon iconName='bar-chart-outline'  />
            <TouchableIcon iconName='barbell-outline'  />
            <TouchableIcon iconName='boat-outline'  />
            </Text>
            
        </View>
    )
}