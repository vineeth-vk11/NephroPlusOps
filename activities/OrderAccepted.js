
import React, { Component } from 'react';
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
//import RNBounceable from "react-native-bouncy-checkbox";
import { List } from 'react-native-paper';
const OrderAccepted = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <SafeAreaView style={styles.screen}>
            <View style={{ display: 'flex', width: '100%', height: '100%', paddingLeft: '5%', paddingRight: '5%' }}>
                <View style={{ marginTop: '5%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Hemodialysis at Home</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 'auto' }}>{'\u20B9'}4500</Text>
                    </View>
                    <Text style={{ fontSize: 14, color: '#828282' }}>Rajesh : 000000000</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", textAlignVertical: 'center' }}>Status: </Text>
                    <Text style={{ fontSize: 14, color: '#828282', textAlignVertical: 'center' }}> Driver Assigned</Text>
                </View>
                <View style={{ marginTop: '5%' }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Report</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10, color: '#828282' }}>Report1.pdf</Text>
                        <Text style={{ fontSize: 10, color: '#828282', marginLeft: 'auto' }}>Rajesh : 000000000</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Services</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>+2 more</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 12, marginLeft: 'auto' }}>show more</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Address</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12, flex: 1.4, marginTop: 'auto', marginBottom: 'auto' }}>762-JVN - issued in Minnesota (MN) in year 2012</Text>
                        <Text style={{ marginBottom: 'auto', flex: .5, borderRadius: 5, fontSize: 14, color: '#424242', marginLeft: 'auto', backgroundColor: '#9DC44D', padding: 5, color: '#ffffff', textAlign: 'center' }}>
                            Open in maps
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Eligibility</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 3 }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12 }}>Item 1</Text>
                        <Text style={{ textDecorationLine: 'none', color: '#828282', fontSize: 15, marginLeft: 'auto' }}>{'\u20B9'}400</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>Driver Assigned</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10, color: '#828282', fontSize: 12, flex: 1.4, marginTop: 'auto', marginBottom: 'auto' }}>Ramesh     000000000</Text>
                        <Text style={{ marginBottom: 'auto', flex: .5, borderRadius: 5, fontSize: 14, color: '#424242', marginLeft: 'auto', backgroundColor: '#9DC44D', padding: 5, color: '#ffffff', textAlign: 'center' }}>
                            Call driver
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        flex: 1,
    },
    bottom_container: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    label: {
        backgroundColor: '#9DC44D',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        color: '#ffffff',
        width: '100%'
    },
    text: {
        marginTop: 50,
        fontSize: 24,
        textAlign: 'center'
    },

});

export default OrderAccepted;
