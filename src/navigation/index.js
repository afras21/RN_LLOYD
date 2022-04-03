import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SplashScreen,
    LoginScreen,
    HomeScreen
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
            {/* TODO: HomeScreen will be moved to Bottom Tab  */}
            <MainStack.Screen
                options={{ headerShown: false }}
                name='HomeScreen'
                component={HomeScreen}
            />

        </MainStack.Navigator>
    )
}

export default MainStackNavigation