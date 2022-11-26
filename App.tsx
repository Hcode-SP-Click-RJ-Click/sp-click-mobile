import styled from '@emotion/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Place } from './src/components/Place';
import { PlaceItem } from './src/components/PlaceItem';
import ArrowLeftIcon from './src/icons/ArrowLeftIcon';
import FavoriteOutlineIcon from './src/icons/FavoriteOutlineIcon';
import ShareIcon from './src/icons/ShareIcon';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TripScreen } from './src/screens/TripScreen';
import { Colors } from './src/values/colors';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Place />
      <Tab.Navigator
        activeColor={Colors.primary}
        inactiveColor={Colors.themeContrast}
        barStyle={{
          backgroundColor: Colors.theme,
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
