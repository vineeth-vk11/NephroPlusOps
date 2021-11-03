
import React from 'react';
import {
  View,
  Button
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
        initialRouteName="MobileInput"
        // screenOptions={{ headerShown: false, gestureEnabled: false }}   options={{headerTitleAlign:'center',headerShown:false}}
        screenOptions={{headerTitleAlign:'center'}}
      >
        <Stack.Screen name="MobileInput" component={MobileInput} options={{headerShown:false,title:"Mobile Input",}}/>
        <Stack.Screen name="OtpInput" component={OtpInput} options={{headerShown:false, title:"Otp Input",}}/>
        <Stack.Screen name="Orders" component={Orders} 
         options={({ navigation }) => ({
          title:"Orders",
          headerRight: () => (
            <Button
              onPress={()=>{navigation.navigate('AllOrders')}}
              title="AO"
              color="#000"
            />
          ),
          headerBackVisible:false
        })}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails} options={{title:"Order Details",}}/>
        <Stack.Screen name="AllOrders" component={AllOrders}
        options={({ navigation }) => ({
          title:"All Orders",
          headerRight: () => (
            <Button
              onPress={()=>{navigation.navigate('AllOrders')}}
              title="AO"
              color="#000"
            />
          ),
          headerBackVisible:false
        })}/>
        <Stack.Screen name="AssignDriver" component={AssignDriver} options={{title:"Assign Driver"}}/>
        <Stack.Screen name="OrderAccepted" component={OrderAccepted} options={{title:"Order Accepted",}}/>
        <Stack.Screen name="OrderAssigned" component={OrderAssigned} options={{title:"Order Assigned",headerBackVisible:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
