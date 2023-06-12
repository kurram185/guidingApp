import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Alert, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {persister, store} from './src/config/store';
import AppContainer from './src/AppContainer';
import {PersistGate} from 'redux-persist/lib/integration/react';
import SplashScreen from 'react-native-splash-screen';
import NotificationController from './src/NotificationController.android';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persister}>
            <NotificationController />
            <AppContainer />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
