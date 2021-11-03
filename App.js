
import React from 'react';
import {
  View,
} from 'react-native';



import MobileInput from './activities/MobileInput';
import OtpInput from './activities/OtpInput';
import Orders from './activities/Orders'
import AllOrders from './activities/AllOrders';
import OrderDetails from './activities/OrderDetails';
import OrderAccepted from './activities/OrderAccepted';
import OrderAssigned from './activities/OrderAssigned';
import AssignDriver from './activities/AssignDriver';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255,255,255)",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="MobileInput" component={MobileInput} />
        <Stack.Screen name="OtpInput" component={OtpInput} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="AllOrders" component={AllOrders} />
        <Stack.Screen name="AssignDriver" component={AssignDriver} />
        <Stack.Screen name="OrderAccepted" component={OrderAccepted} />
        <Stack.Screen name="OrderAssigned" component={OrderAssigned} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
