
import  React  from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Tab1Screen } from "../screens/Tab1Screen";
import {TopTabNavigator} from "../navigator/TopTabNavigator"
import { StackNavigator } from "./StackNavigator";

import { Platform, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndrioid/>

}




const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndrioid() {
    
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
        backgroundColor: '#7fd4d6'
    }}

    screenOptions={({route})=> ({
        tabBarActiveTintColor:'#034984',
        tabBarLabelStyle:{
            fontSize:10
        },
        tabBarIcon:({color, focused})=>{
            let iconName: string = '';

            switch (route.name) {

                case 'Tab1Screen':
                    iconName= 'airplane-outline'
                break;

                case 'TopTabNavigator':
                    iconName= 'basketball-outline'
                break;

                case 'StackNavigator':
                    iconName= 'bonfire-outline'
                break;

                default:
                    break;
            }
            return(
                <Icon name={iconName} size={20} color="#034984" />
            )
        }
    })}>

       <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS =() => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
        backgroundColor:'white',
    }}
    screenOptions={({route})=> ({
        tabBarActiveTintColor:'6853FF',
        tabBarLabelStyle:{
            fontSize:15
        },
        tabBarIcon:({color, focused, size})=>{
            let iconName: string = '';

            switch (route.name) {

                case 'Tab1Screen':
                    iconName= 'airplane-outline'
                break;

                case 'TopTabNavigator':
                    iconName= 'basketball-outline'
                break;

                case 'StackNavigator':
                    iconName= 'bonfire-outline'
                break;

                default:
                    break;
            }
            return(
                <Icon name={iconName} size={20} color="#900" />
            )
        }
    })}>




                                                        {/* tabBarIcon:(props) => <Text style={{color:props.color}} >T1</Text>}} */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}