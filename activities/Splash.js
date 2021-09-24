
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
   Dimensions
 } from 'react-native';

 const Splash=()=>{
   return(
    <View style={styles.main}>
        <Image
          style={styles.tinyLogo}
          source={require('../components/splash.png')}
        />
    </View>
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
 