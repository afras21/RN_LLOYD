import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainStackNavigation from './src/navigation'
import { store, persistor } from './src/store/configStore';
import { NativeBaseProvider, Text, Box } from 'native-base';


const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            <MainStackNavigation />
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
