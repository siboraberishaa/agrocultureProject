import React, { useEffect, useRef, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Text, Platform,  View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import HomeScreenTr from '../screens/HomeScreenTr';
import Notifications from '../screens/Notifications';
import LoginScreen from '../screens/LoginScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: true,
  tabBarStyle: {
    position: "absolute",
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  headerStyle: {
    height: 70,
    borderBottomColor: '#000',
  },
  headerTintColor: '#000', // Change to your desired header text color
  headerTitleStyle: {
    fontWeight: 'bold', // Customize the title font style

  }
}

const CustomHeader = () => (
  <View style={styles.headerContainer}>
    <Image source={require('../assets/images/Motat_logo2b.png')} style={styles.logo} />
  </View>
);

const App = () => {

  const TabNavigator = () => (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreenTr} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewComp}> 
              <AntDesign name="home" size={20} color={focused ? "#408080" : "#CBCBD4"} />
              <Text style={{ fontSize: 10, color: focused ? "#408080" : "#CBCBD4" }}>Ana sayfa</Text>
            </View>
          ),
          headerTitle: () => <CustomHeader />,
        }}
      />
      <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewComp}> 
              <Ionicons name="notifications-outline" size={20} color={focused ? "#408080" : "#CBCBD4"} />
              <Text style={{ fontSize: 10, color: focused ? "#408080" : "#CBCBD4" }}>Bildirimler</Text>
            </View>
          ),
          headerTitle: () => <CustomHeader />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={''} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.viewComp}> 
              <AntDesign name="user" size={20} color={focused ? "#408080" : "#CBCBD4"} />
              <Text style={{ fontSize: 10, color: focused ? "#408080" : "#CBCBD4" }}>Profil</Text>
            </View>
          ),
          headerTitle: () => <CustomHeader />,
        }}
      />
    </Tab.Navigator>
  );


  
  return (
    <>
      <NavigationContainer independent={true}>
      
        <>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
     </>
     
      
      </NavigationContainer>
    </>
  );
};

export default () => {

  return (
          <App />
  );
};



const styles = StyleSheet.create({
  text: {
    fontSize: 10, 
    color: "#16247d"
  },
  viewComp: {
    alignItems: "center", 
    justifyContent: "center"
  },
  designNav: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#408080",
    borderWidth: 2,
    backgroundColor: '#fff',
    width: Platform.OS == "ios" ? 50 : 60,
    height: Platform.OS == "ios" ? 50 : 60,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
  },
  logo: {
    width: 300, 
    height: '100%',
    resizeMode: 'contain',
  },

})