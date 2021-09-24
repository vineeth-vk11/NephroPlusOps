import * as React from 'react';
import { View, useWindowDimensions,FlatList,SafeAreaView,StyleSheet,Text,TextInput } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const DATA = [
    {
      id: '0',
      title: 'Hemodialysis at Home',
      price:"4500",
      location:" Bloodtube and Dialyser Single use",
      status:"Servicing",
      package:"Silver Package",
      date:"10 am, 12 june 2021"
    },
    {
       id: '1',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
    {
       id: '2',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
    {
       id: '3',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
    {
       id: '4',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
    {
       id: '5',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
    {
       id: '6',
       title: 'Hemodialysis at Home',
       price:"4500",
       location:" Bloodtube and Dialyser Single use",
       status:"Servicing",
       package:"Silver Package",
       date:"10 am, 12 june 2021"
    },
  ];
 
  const renderItem = ({ item }) => (
    <View style={{height:85,borderColor:'#9DC44D',borderWidth:1,borderRadius:5,width:380,marginTop:10,alignContent:'center',justifyContent:'center',paddingLeft:'3%',paddingRight:'3%'}}>
      <View style={{flexDirection:'row'}}>
         <Text style={{fontSize:14,fontWeight:"bold"}}>{item.title}</Text>
         <Text style={{fontSize:14,fontWeight:"bold",marginLeft:'auto'}}>{'\u20B9'}{item.price}</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:5}}>
          <View style={{marginRight:'auto'}}>
            <Text style={{fontSize:10,color:'#828282'}}>{item.package}</Text>
            <Text style={{fontSize:10,color:'#828282',marginTop:3}}>location: {item.location}</Text>
          </View>
          <View style={{marginLeft:'auto'}}>
            <Text style={{fontSize:10,color:'#828282',marginLeft:'auto'}}>status: {item.status}</Text>
            <Text style={{fontSize:10,color:'#828282',marginLeft:'auto',marginTop:2}}>{item.date}</Text>
          </View>
      </View>
    </View>
  );

const New = () => (
  <View style={{ flex: 1,alignItems:'center',backgroundColor:'#fff'}}>
        <TextInput style={{backgroundColor:'#fff',borderColor:'#9DC44D',borderWidth:1,width:380,marginTop:10,borderRadius:15,height:38,paddingLeft:15}} 
                placeholder="Search an order"/>
        <SafeAreaView  style={styles.list}>
            <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={item => item.id}
               />
        </SafeAreaView >
  </View>
);
const Tab = createMaterialTopTabNavigator();

const Approved = () => (
    <View style={{ flex: 1,alignItems:'center',backgroundColor:'#fff'}}>
        <TextInput style={{backgroundColor:'#fff',borderColor:'#9DC44D',borderWidth:1,width:380,marginTop:10,borderRadius:15,height:38,paddingLeft:15}} 
                placeholder="Search an order"/>
        <SafeAreaView  style={styles.list}>
            <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={item => item.id}
               />
        </SafeAreaView >
    </View>
);

const Rejected = () => (
    <View style={{ flex: 1,alignItems:'center',backgroundColor:'#fff'}}>
        <TextInput style={{backgroundColor:'#fff',borderColor:'#9DC44D',borderWidth:1,width:380,marginTop:10,borderRadius:15,height:38,paddingLeft:15}} 
                placeholder="Search an order"/>
        <SafeAreaView  style={styles.list}>
            <FlatList
               data={DATA}
               renderItem={renderItem}
               keyExtractor={item => item.id}
               />
        </SafeAreaView >
    </View>
  );
export default function Orders() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {width:'100%',fontWeight:'bold'},
          tabBarStyle: { backgroundColor: 'white'},
          tabBarIndicatorStyle:{backgroundColor:'black'},
        }}>
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Approved" component={Approved} />
        <Tab.Screen name="Rejected" component={Rejected} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    main:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff"
    },
    list:{
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ffffff",
      width:'100%',
      alignItems:'center',
      paddingBottom:'1%'
    },
     text:{
        display:'flex',
        fontSize:24,
        marginBottom:'auto',
        textAlign:'center',
        marginTop:15,
        borderColor:'#828282',
        borderBottomWidth:1,
        paddingBottom:15
      
     }
  });