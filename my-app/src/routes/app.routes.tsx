import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { Workouts } from '@screens/Workouts';
import { Profile } from '@screens/Profile';
import { ProfileDefinition } from '@screens/Profile_definition';
import { gluestackUIConfig } from '@gluestack-ui/config';


import HomeSvg from "@assets/Logo.png"
import { Platform } from 'react-native';
type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    workouts: undefined;
    profileDefinition: undefined;
  }
  
  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
  
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
export function AppRoutes() {
  const { tokens } = gluestackUIConfig
  const iconSize = tokens.space["6"]

  return (
    <Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.orange500,
        tabBarInactiveTintColor: tokens.colors.coolGray200,
        tabBarStyle:{
            backgroundColor: tokens.colors.coolGray600,
            borderTopWidth: 0,
            height: Platform.OS === "android" ? "auto" : 96,
            paddingBottom: tokens.space["10"],
            paddingTop: tokens.space["6"],
        },
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{ tabBarIcon: ({ color })=> <HomeSvg fill={color} width={iconSize} height={iconSize}/>}}
      />

      <Screen 
        name='workouts'
        component={Workouts}
        options={{ tabBarIcon: ({ color })=> <HomeSvg fill={color} width={iconSize} height={iconSize}/>}}
      />

      <Screen 
        name='profile'
        component={Profile}
        options={{ tabBarIcon: ({ color })=> <HomeSvg fill={color} width={iconSize} height={iconSize}/>}}
      />

      <Screen 
        name='exercise'
        component={Exercise}
        options={{
            tabBarButton: () => null
        }}
      />
      <Screen 
        name='profileDefinition'
        component={ProfileDefinition}
        options={{
            tabBarButton: () => null
        }}
      />
    </Navigator>
  );
}