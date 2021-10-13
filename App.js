
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splash from './activities/Splash'
const App = ({navigation}) => {
  return (
      <View style={{width:'100%',height:'100%'}}>
          <Splash/>
      </View>
  );
};

export default App;
