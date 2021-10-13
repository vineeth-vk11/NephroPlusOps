
 import React,{Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity,
 } from 'react-native';
 
 const OrderAssigned=({navigation})=>{
   return(
     <View style={{height:'100%',justifyContent:'center',alignContent:'center',backgroundColor:'white'}}>
        <View style={styles.main}>
            <Image
            style={styles.tinyLogo}
            source={require('../components/accept.png')}/>
            <Text  style={styles.subtext} style={{fontWeight:'bold',textAlign:'center'}}>{"Order #1 assigned to Raju (+91 9876543210) and the driver is notified on his app."}</Text>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'
          onPress={()=>{navigation.navigate('OrderDetailsFinal')}}>
          <Text style={styles.label}>{"ASSIGN DRIVER"}</Text>
        </TouchableOpacity>
    </View>
   );
 }
 const styles = StyleSheet.create({
     input:{
        width:Dimensions.get('window').width-100,
        marginLeft:"15%",
        marginRight:"15%",
        color:'black',
        paddingLeft:15,
        marginBottom:'5%',
        borderBottomColor:"#9DC44D",
        borderBottomWidth:1,
     },
     bottom_container:{
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width:Dimensions.get('window').width,
   },
    label:{
      backgroundColor:'#9DC44D',
      fontSize:18,
      paddingTop:10,
      paddingBottom:10,
      textAlign:'center',
      color:'#ffffff'
  },
     text:{
        display:'flex',
        fontSize:24,
        position: 'absolute',
        top: 15,
     },
     subtext:{
        width:Dimensions.get('window').width-100,
        marginLeft:"15%",
        marginRight:"15%",
        color:'black',
        paddingLeft:15,
        marginBottom:'5%',
        textAlign:'center'
     },
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:'5%',
      paddingRight:'5%'
    },
    tinyLogo: {
        display:'flex',
        bottom:'25%'
      }
  });
 
 export default OrderAssigned;
 