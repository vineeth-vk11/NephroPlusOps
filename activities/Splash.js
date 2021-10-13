
 import React,{Component} from 'react';
 import {
     BackHandler,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   Dimensions,
   Button
 } from 'react-native';
 import Orders from './Orders'
 import AllOrders from './AllOrders';
 import OrderDetails from './OrderDetails';
 import OrderAccepted from './OrderAccepted';
 import Mobile_input from './Mobile_input';
 import Otp_input from './Otp_input';
 import OrderAssigned from './Order_assigned';
 import AssignDriver from './AssignDriver';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
 const Splash=(props)=>{
   return(
    <Stack.Navigator>
      <Stack.Screen
        name="MobileInput"
        component={Mobile_input}
        options={{ title: 'MobileInput' }}/>
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{ title: 'OrderDetails' }}/>
      <Stack.Screen
        name="Otp_input"
        component={Otp_input}
        options={{ title: 'OTP Input' }}/> 
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={()=>{navigation.navigate('All Orders')}}
              title="Info"
              color="#fff"
            />
          ),
        })}/>
      <Stack.Screen
        name="All Orders"
        component={AllOrders}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button
              onPress={()=>{navigation.navigate('Orders')}}
              title="Info"
              color="#fff"
            />
          ),
        })}/>
        <Stack.Screen
          name="OrderDetailsFinal"
          component={OrderAccepted}
          options={{ title: 'OrderDetails' }}/>
        <Stack.Screen
          name="OrderAssigned"
          component={OrderAssigned}
          options={{ title: 'OrderAssigned' }}/>
        <Stack.Screen
          name="AssignDriver"
          component={AssignDriver}
          options={{ title: 'AssignDriver' }}/>
    </Stack.Navigator>
    // <View style={styles.main}>
    //     <Image
    //       style={styles.tinyLogo}
    //       source={require('../components/splash.png')}
    //     />
    // </View>
   );
 }
 const styles = StyleSheet.create({
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        alignContent:'center',
        alignItems:'center'
      }
  });
 
 export default Splash;
 