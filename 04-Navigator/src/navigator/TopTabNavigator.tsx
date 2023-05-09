import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top:paddingTop} = useSafeAreaInsets()

  return (

    <Tab.Navigator
    style={{paddingTop}}
    sceneContainerStyle={{
      backgroundColor:'white'
    }}
    screenOptions={({route}) => ({
      tabBarIndicatorStyle:{
        backgroundColor:'#d1dcfb'
      },
      tabBarStyle:{
        shadowColor:'transparent',
        elevation:0,
      },
      tabBarIcon:({color, focused})=>{
        let iconName: string = '';

        switch (route.name) {

            case 'Chat':
                iconName= 'chatbox-ellipses-outline'
            break;

            case 'Contacto':
                iconName= 'people-outline'
            break;

            case 'Albums':
                iconName= 'albums-outline'
            break;

            default:
                break;
        }
        return(
          <Icon name={iconName} size={20} color= "#7fd4d6" />
        )
    }

    
    })}
    >

      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacto" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />

    </Tab.Navigator>
  );
}