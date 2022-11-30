import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { PlaceProvider } from './src/contexts/PlaceContext';
import { StartProvider } from './src/contexts/StartContext';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { TripScreen } from './src/screens/TripScreen';
import { Colors } from './src/values/colors';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <StartProvider>
      <PlaceProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName='Home'
            activeColor={Colors.primary}
            inactiveColor={Colors.themeContrast}
            barStyle={{
              backgroundColor: Colors.theme,
            }}
            sceneAnimationEnabled={true}
            style={{
              backgroundColor: Colors.theme,
            }}
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
      </PlaceProvider>
    </StartProvider>
  );
}

const styles = StyleSheet.create({});
