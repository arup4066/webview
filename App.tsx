import React, {useEffect} from 'react';
import {Platform, View, Text, ScrollView, RefreshControl} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {WebView} from 'react-native-webview';

import Webview from './Webview';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android'){
      SplashScreen.hide();
    }
  }, []);
  
  return (
    <Webview />
  );
};

export default App;