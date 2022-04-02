import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox } from 'react-native';
import MainStackNavigation from './src/navigation'

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  )
}

export default App
