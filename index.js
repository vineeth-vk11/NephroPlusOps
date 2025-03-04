/**
 * @format
 */
import React,{Node} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function Main() {
    return (
      <PaperProvider>
         <NavigationContainer>
          <App/>
        </NavigationContainer>
      </PaperProvider>
    );
  }
  

AppRegistry.registerComponent(appName, () => Main);

