import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral =() => {
  return (
    <Drawer.Navigator
    drawerContent={ (props) => <MenuInterno {...props}></MenuInterno>}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
        source={{
          uri:"https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
        }}
        style={styles.avatar}

        />
      </View>


      {/* Opciones de Menu */}

      
        <View style={styles.menuContainer}>
            <TouchableOpacity
             style = {styles.menuBoton}
             onPress = { () => navigation.navigate('Tabs')}
             >

              <Text style= {styles.menuTexto}> 
              <Icon name= "compass-outline" size={25} color="#7fd4d6" /> Navegacion
              </Text>

            </TouchableOpacity>
            
            <TouchableOpacity
            style = {styles.menuBoton}
            onPress = { () => navigation.navigate('SettingsScreen')}
            >

              <Text style= {styles.menuTexto}>
              <Icon name= "build-outline" size={25} color="#7fd4d6" /> Ajustes
              </Text>

            </TouchableOpacity>
        </View>

    </DrawerContentScrollView>
  );
}