import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen,
    OnBoardingScreen
} from '../screens';

const MainStack = createStackNavigator();


function MainStackNavigation() {
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
                name='OnBoardingScreen'
                component={OnBoardingScreen}
            />

        </MainStack.Navigator>
    )
}

export default MainStackNavigation