
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
import Orders from './activities/Orders'
import AllOrders from './activities/AllOrders';
import OrderDetails from './activities/OrderDetails';
import OrderAccepted from './activities/OrderAccepted';
import Mobile_input from './activities/Mobile_input';
import Otp_input from './activities/Otp_input';
import Splash from './activities/Splash';
import OrderAssigned from './activities/Order_assigned';
import AssignDriver from './activities/AssignDriver';

const App = () => {

  return (
      <View style={{width:'100%',height:'100%'}}>
          {/* <Orders/> */}
          {/* <AllOrders/> */}
          {/* <OrderDetails/> */}
          {/* <OrderAccepted/> */}
          {/* <Splash/> */}
          {/* <Mobile_input/> */}
          {/* <Otp_input/> */}
          {/* <OrderAssigned/> */}
          <AssignDriver/>
      </View>
  );
};

export default App;
