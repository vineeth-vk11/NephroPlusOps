import * as React from 'react';
import { View, useWindowDimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const DATA = [
  {
    id: '0',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#9DC44D"
  },
  {
    id: '1',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#FF0000"
  },
  {
    id: '2',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#9DC44D"
  },
  {
    id: '3',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#FF0000"
  },
  {
    id: '4',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#9DC44D"
  },
  {
    id: '5',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#9DC44D"
  },
  {
    id: '6',
    title: 'Hemodialysis at Home',
    price: "4500",
    location: " Bloodtube and Dialyser Single use",
    status: "Servicing",
    package: "Silver Package",
    date: "10 am, 12 june 2021",
    borderColor: "#9DC44D"
  },
];

const RenderItem = (props) => (
  <TouchableOpacity style={{ height: 85, borderColor: props.item.borderColor, borderWidth: 1, borderRadius: 5, width: 380, marginTop: 10, alignContent: 'center', justifyContent: 'center', paddingLeft: '3%', paddingRight: '3%' }}
    onPress={() => {props.navigation.navigate('OrderDetails')}}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{props.item.title}</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 'auto' }}>{'\u20B9'}{props.item.price}</Text>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <View style={{ marginRight: 'auto' }}>
        <Text style={{ fontSize: 10, color: '#828282' }}>{props.item.package}</Text>
        <Text style={{ fontSize: 10, color: '#828282', marginTop: 3 }}>location: {props.item.location}</Text>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Text style={{ fontSize: 10, color: '#828282', marginLeft: 'auto' }}>status: {props.item.status}</Text>
        <Text style={{ fontSize: 10, color: '#828282', marginLeft: 'auto', marginTop: 2 }}>{props.item.date}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Tab = createMaterialTopTabNavigator();

export default function AllOrders(props) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
      <TextInput style={{ backgroundColor: '#fff', borderColor: '#9DC44D', borderWidth: 1, width: 380, marginTop: 10, borderRadius: 15, height: 38, paddingLeft: 15 }}
        placeholder="Search an order" />
      <SafeAreaView style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={({item,navigation}) => <RenderItem item={item} navigation={props.navigation}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView >
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  list: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: '100%',
    alignItems: 'center',
    paddingBottom: '1%'
  },
  text: {
    display: 'flex',
    fontSize: 24,
    marginBottom: 'auto',
    textAlign: 'center',
    marginTop: 15,
    borderColor: '#828282',
    borderBottomWidth: 1,
    paddingBottom: 15

  }
});