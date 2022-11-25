import styled from '@emotion/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { PlaceItem } from './src/components/PlaceItem';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TripScreen } from './src/screens/TripScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor='#002FF7'
        inactiveColor='#fff'
        barStyle={{
          backgroundColor: '#111111',
        }}
        sceneAnimationEnabled={true}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: 'home',
            title: '',
          }}
        />
        <Tab.Screen
          name="Trips"
          component={TripScreen}
          options={{
            tabBarIcon: 'bag-suitcase',
            title: '',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: 'cards-heart',
            title: '',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: 'account',
            title: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
