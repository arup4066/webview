import React, { useState, useEffect } from 'react';
import {WebView} from 'react-native-webview';

const Webview = () => {
     const initialUrl = 'https://reactnative.dev/';

     const [isKey, setIsKey] = useState(1);
     const [isWebViewUrlChanged, setIsWebViewUrlChanged] = useState(false);
      
     useEffect(() => {
          resetWebViewToInitialUrl = () => {
               setIsKey(isKey+1);
          }
     }, []);
     


     return <WebView 
               key={isKey}
               source={{ uri: initialUrl }} 
          />;
}
export default Webview;