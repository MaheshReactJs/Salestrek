
//Mahesh React Native 11/10/2020 
//screen 22

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen7({ navigation }) {

    return (
        <View>
            <ImageBackground source={require('../assets/banner2.png')} style={styles.banner}>
                <View style={{ margin: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Login Via OTP
                  </Text>
                    <Text style={styles.enter}>
                        Enter your registered number to receive OTP
                  </Text>
                </View>
                <View style={styles.view4}>
                    <Image source={require('../assets/phone.png')} style={{ top: 16 }}></Image>
                    <TextInput style={styles.number} placeholder={"Enter Your Phone Number"}></TextInput>
                </View>
                <View style={styles.v2}>
                    <Image source={require('../assets/Line.png')} style={{ tintColor: '#2B2E2E' }}></Image>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Screen8')} style={styles.login}>
                    <Text style={styles.txt4}>
                        Generate OTP</Text>
                </TouchableOpacity>

                <View style={styles.view2}>
                    <Text style={styles.txt}>Not have account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>
                            SignUp here
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
    txt4: {
        color: 'white', textAlign: 'center', top: 10
    },
    v2:{
        marginLeft: 50
    },
    view2: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 80
    },
    view6: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 120
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
        color: '#2B2E2E', marginLeft: 10, textDecorationLine: 'underline'
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

});


