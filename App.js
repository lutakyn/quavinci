/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * author: Lutherking Dotse
 */

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
          tabBarLabel: 'Homes',
          // tabBarIcon: ({color, size}) => (
          //   <VFIcon name={Images.ic_Notification} />
          // ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="WorldScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'World',
          // tabBarIcon: ({color, size}) => <VFIcon name={Images.ic_mobile} />,
          headerShown: true,
        }}
      />
      <BottomTab.Screen
        name="JobScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Job',
          // tabBarIcon: ({color, size}) => <VFIcon name={Images.ic_settings} />,
          headerShown: true,
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
            options={{headerShown: true}}
            name="Home"
            component={BottomTabNavigation}
          />
          <Stack.Screen
            options={{headerShown: true}}
            name="HomeScreen"
            component={HomeScreen}
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
