import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Animated} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'

const HomeStack = createStackNavigator()
const DetailsStack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      inactiveColor = "black"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor : "rgb(80,160,230)",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={30}  />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor : "rgb(228,40,100)",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor : "rgb(165,187,194)",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor : "rgb(150,90,250)",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({navigation})=> {
    return (
        <HomeStack.Navigator screenOptions = {{
          headerStyle : {
            backgroundColor : "rgb(80,160,230)"
          },
          headerTintColor : "white",
          headerTitleStyle : {
            fontWeight : "bold",
          }
        }}>
          <HomeStack.Screen name = "Home" component = {HomeScreen} options = {{
            headerLeft : ()=> (
              <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
                backgroundColor = "rgb(80,160,230)"
              />
            )
          }}/>
        </HomeStack.Navigator>
    )
  }
  
  const DetailsStackScreen = ({navigation})=> {
    return (
      <DetailsStack.Navigator screenOptions = {{
        headerStyle : {
          backgroundColor : "rgb(228,40,100)"
        },
        headerTintColor : "white",
        headerTitleStyle : {
          fontWeight : "bold",
        }
      }}>
        <DetailsStack.Screen name = "Details" component = {DetailsScreen} options = {{
            headerLeft : ()=> (
              <Icon.Button name = "ios-menu" size = {28} onPress = {()=>navigation.openDrawer()} 
                backgroundColor = "rgb(228,40,100)"
              />
            )
          }} />
      </DetailsStack.Navigator>
    )
  }

  export default MyTabs