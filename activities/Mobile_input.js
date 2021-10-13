
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
   TextInput,
   Button,
   TouchableOpacity
 } from 'react-native';
 const Mobile_input=({navigation })=>{
   return(
    <View style={{backgroundColor:'white', width:Dimensions.get('window').width,justifyContent:'center',alignItems:'center',height:Dimensions.get('window').height}}>
      <Image
          style={styles.tinyLogo}
          source={require('../components/icon.png')}
        />
      <View style={styles.main}>
        <Text style={styles.text}>SignIn</Text>
        <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
        placeholder="mobile number"
        placeholderTextColor="#7C7C7C"/>   
      </View>
      <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'
          onPress={()=>{navigation.navigate('Otp_input')}}>
          <Text style={styles.label}>NEXT</Text>
      </TouchableOpacity>
  </View>
   );
 }
 const styles = StyleSheet.create({
     input:{
        borderColor:"#9DC44D",
        borderWidth:1,
        width:'90%',
        marginLeft:50,
        marginRight:50,
        paddingStart:20
     },
     bottom_container:{
      alignSelf: 'flex-end',
      marginTop:'auto',
      width:Dimensions.get('window').width,
      height:100,
      marginBottom:'5%'
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
    main:{
      backgroundColor:'white',
      width:Dimensions.get('window').width,
      display:'flex',
      alignItems:'center',
      flex:1,
      marginTop:'10%'
    },
    tinyLogo: {
        display:'flex',
        marginTop:'20%'
      }
  });
 
 export default Mobile_input;
 