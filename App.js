/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * author: Lutherking Dotse
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors as ThemeColors} from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowDown,
  faInbox,
  faComment,
  faGlobe,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import PostDetails from './src/screens/PostDetails';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      headerShown={false}
      screenOptions={{
        tabBarActiveTintColor: ThemeColors.primary,
        tabBarInactiveTintColor: ThemeColors.grey,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontFamily: 'Nunito-Regular',
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 18,
          marginBottom: Platform.OS === 'ios' ? 0 : 31,
        },
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHome} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="WorldScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faGlobe} color={color} />
          ),

          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="CommentScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faComment} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="InboxScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faInbox} color={color} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={BottomTabNavigation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HomeScreen"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PostDetailsScreen"
            component={PostDetails}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
