
//Mahesh React Native 11/10/2020 
//screen 23

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen8({ navigation }) {

    return (
        <View>
            <ImageBackground source={require('../assets/banner2.png')} style={styles.banner}>
                <View style={styles.v1}>
                    <Text style={styles.t3}>
                        Verify OTP
                  </Text>
                    <Text style={styles.enter}>
                        We have sent an OTP to your mobile number
                  </Text>
                    <Text style={styles.t1}>
                        95022222222 <TouchableOpacity>
                            <Text style={styles.t2}>Change</Text></TouchableOpacity>
                    </Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.view7}>
                        <TextInput keyboardType={'phone-pad'}></TextInput>
                    </View>
                    <View style={styles.view7}>
                        <TextInput keyboardType={'phone-pad'}></TextInput>
                    </View>
                    <View style={styles.view7}>
                        <TextInput keyboardType={'phone-pad'}></TextInput>
                    </View>
                    <View style={styles.view7}>
                        <TextInput keyboardType={'phone-pad'}></TextInput>
                    </View>
                    
                </View>
             
                <View style={styles.view2}>
                    <Text style={styles.txt}>Didn't receive the code?</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>
                            Resend OTP
                            </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.view6}>
                    <Text style={styles.txt}>Need help? call</Text>
                    <TouchableOpacity>
                        <Text style={styles.num}>
                            1800-1800-1800
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.v2}>
                    <Image source={require('../assets/Line.png')} ></Image>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.txt5}>By logging in, you agree to our</Text>
                    <TouchableOpacity>
                        <Text style={styles.num2}>
                            Terms & Conditions
                            </Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View >

    );
}

const styles = StyleSheet.create({

    banner: {
        height: ('100%'),
        width: ('100%'),
    },
    v1:{
        margin: 30
    },
    v2:{
        marginLeft: 50 
    },
    t1:{
        color: 'black', marginLeft: 10
    },
    t3:{
        fontSize: 20, fontWeight: 'bold' 
    },
    t2:{
        color: 'green', textDecorationLine: 'underline', top: 3
    },
    txt4: {
        color: 'white', textAlign: 'center', top: 10
    },
    view2: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 80
    },
    view6: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 180
    },
    box:{
        flexDirection:'row', justifyContent:'center'
    },
    view7:{
        height:54, width:54, backgroundColor:'white', borderRadius:5, margin:10
    },
    view3: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 20
    },
    txt: {
        color: '#2B2E2E', fontSize: 16
    },
    txt5: {
        color: '#2B2E2E', fontSize: 15
    },
    txt2: {
        color: 'green', marginLeft: 10, top: 3
    },
    num: {
        color: '#00A50D', marginLeft: 10, fontSize: 18
    },
    num2: {
        color: '#00A50D', marginLeft: 10, fontSize: 15
    },

    login: {
        marginTop: 20, height: 42, width: 293, borderRadius: 10, alignSelf: 'center', backgroundColor: '#1DAD24'
    },
    number: {
        height: 50, left: 10, fontWeight: 'bold'
    },
    view4: {
        flexDirection: 'row', marginTop: 20, marginLeft: 60
    },
    enter: {
        fontSize: 15, margin: 10, marginTop: 40
    },
    enter2: {
        fontSize: 15, marginLeft: 10
    },

});


