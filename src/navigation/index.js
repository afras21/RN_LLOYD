import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen,
    LoginScreen
} from '../screens';

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

        </MainStack.Navigator>
    )
}

export default MainStackNavigation