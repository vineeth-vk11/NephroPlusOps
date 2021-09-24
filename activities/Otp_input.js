
 import React,{Component} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity
 } from 'react-native';
 const Otp_input=()=>{
   return(
     <View style={styles.mainContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../components/icon.png')}/>
        <View style={styles.main}>
          <Text style={styles.text}>Enter OTP</Text>
          <View style={{flexDirection:'row'}}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
            />
        </View> 
          <Text style={styles.subtext}>Did'nt received an OTP? Resend</Text>  
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'>
          <Text style={styles.label}>NEXT</Text>
        </TouchableOpacity>
    </View> 
   );
 }
 const styles = StyleSheet.create({
    mainContainer:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
     input:{
        backgroundColor:'#cbcbcb',
        width:'13%',
        borderRadius:5,
        marginLeft:1,
        marginRight:10,
        textAlign:'center'
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
        marginBottom:'17%',
        fontSize:24,
        fontWeight:'bold'
     },
     subtext:{
        display:'flex',
        marginBottom:'17%',
        fontSize:12
     },
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    tinyLogo: {
        display:'flex',
        top:"25%"
      }
  });
 
 export default Otp_input;
 