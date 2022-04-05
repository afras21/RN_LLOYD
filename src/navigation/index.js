import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen,
    LoginScreen,
    HomeScreen
} from '../screens';
import BottomTab from './BottomTabNavigationStack';
import Drawer from './DrawerNavigationStack';

const MainStack = createStackNavigator();


const MainStackNavigation = () => {
    return (
        <MainStack.Navigator
            initialRouteName={'SplashScreen'}
        >
            <MainStack.Screen
                options={{ headerShown: false }}
                name='SplashScreen'
                component={SplashScreen}
            />
            <MainStack.Screen
                options={{ headerShown: false }}
                name='LoginScreen'
                component={LoginScreen}
            />
            {/* TODO: HomeScreen will be moved to Bottom Tab  */}
            <MainStack.Screen
                options={{ headerShown: false }}
                name='BottomTab'
                component={BottomTab}
            />
            {/* <MainStack.Screen
                options={{ headerShown: false }}
                name='Drawer'
                component={Drawer}
            /> */}

        </MainStack.Navigator>
    )
}

export default MainStackNavigation