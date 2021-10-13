
 import React,{Component,useState} from 'react';
 import {
   StyleSheet,
   Text,
   View,
   Image,
   Dimensions,
   TextInput,
   TouchableOpacity,
   FlatList,
   SafeAreaView,
   Button
 } from 'react-native';
 import DropDownPicker from 'react-native-dropdown-picker';
const AssignDriver=({navigation})=>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);
   return(
     <>
        <View style={{display:'flex',width:'100%',height:'100%',paddingLeft:'4%',paddingRight:20}}>
            <View style={{marginTop:'5%'}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:18,fontWeight:"bold"}}>#Hemodialysis at Home</Text>
                    <Text style={{fontSize:18,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}4500</Text>
                </View>
                <Text style={{fontSize:14,color:'#828282'}}>Rajesh : 000000000</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Address</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'#828282',fontSize:12}}>762-JVN - issued in Minnesota (MN) in year 2012</Text>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:"bold"}}>Enter Driver</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:10,color:'#828282',fontSize:12}}>Enter the mobile number of the driver whom you want to assign the order.</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,width:'100%'}}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={{width:'80%',height:45,borderColor:'#9DC44D'}}
                dropDownContainerStyle={{width:'85%'}}
                placeholder="Name of the driver"
                placeholderStyle={{color:'#757575'}}
              />
              <TouchableOpacity
                underlayColor='#fff'
                style={{marginLeft:'auto',width:'19%',marginBottom:'auto',marginTop:'auto',marginLeft:'auto'}}>
                <Text style={{backgroundColor:'#9DC44D',fontSize:18,paddingTop:10,paddingBottom:10,textAlign:'center',color:'#ffffff',borderRadius:4}}>
                    SEND
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        <TouchableOpacity
          style={styles.bottom_container}
          underlayColor='#fff'
          onPress={()=>{navigation.navigate('OrderAssigned')}}>
          <Text style={styles.label}>ASSIGN DRIVER</Text>
        </TouchableOpacity>
    </>
   );
 }
 const styles = StyleSheet.create({
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
         marginTop:50,
        fontSize:24,
        textAlign:'center'
     },

  });
 
 export default AssignDriver;
 