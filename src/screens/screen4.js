import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen4({navigation}) {

    return (
        <View>
            <ImageBackground source={require('../assets/banner2.png')} style={styles.banner}>
                <View style={styles.view1}>
                    <Image source={require('../assets/green_icon.png')} />
                </View>
                <View style={styles.name}>
                    <Image source={require('../assets/name_green1.png')} />
                </View>
                <View style={{ marginLeft: 50, top: 10 }}>
                    <Text style={{ color: 'red' }}>Number Not Registered</Text>
                </View>

                <View style={styles.view4}>
                    <Image source={require('../assets/phone.png')} style={{ top: 16 }}></Image>
                    <TextInput style={styles.number} ></TextInput>
                </View>

                <View style={{ marginLeft: 58 }}>
                    <Image source={require('../assets/Line.png')} style={styles.line2}></Image>
                </View>
                <View style={{ marginLeft: 60 }}>
                    <Image source={require('../assets/password.png')}></Image>
                </View>

                <View style={styles.view5}>
                    <Text style={{ color: '#1DAD24' }}>
                        Forgot Password?
                    </Text>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={styles.txt3}>
                            Login Via OTP</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  onPress={() => navigation.navigate('Screen5')} style={styles.login}>
                    <Text style={styles.txt4}>
                        Login</Text>
                </TouchableOpacity>

                <View style={styles.view2}>
                    <Text style={styles.txt}>Not have account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>
                            SignUp here
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <Image source={require('../assets/Line.png')}></Image>
                </View>
                <View style={styles.view3}>
                    <Text style={styles.txt}>By Logging in, you agree to our</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>
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
    login: {
        marginTop: 20, height: 42, width: 293, borderRadius: 10, alignSelf: 'center', backgroundColor: '#1DAD24'
    },
    name: {
        alignSelf: 'center'
    },
    view1: {
        alignSelf: 'center', marginTop: 60, flexDirection: 'row'
    },
    view2: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 80
    },
    view3: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 20
    },
    view4: {
        flexDirection: 'row', marginTop: 20, marginLeft: 60
    },
    view5: { flexDirection: 'row', marginTop: 25, justifyContent: 'space-around' },
    txt: {
        color: '#2B2E2E'
    },
    txt2: {
        color: '#1DAD24', marginLeft: 10, textDecorationLine: 'underline'
    },
    txt3: {
        color: 'white', textAlign: 'center', top: 3
    },
    txt4: {
        color: 'white', textAlign: 'center', top: 10
    },
    number: {
        height: 50, left: 10, fontWeight: 'bold', color: 'red'
    },
    btn1: {
        height: 25, width: 100, borderRadius: 5, backgroundColor: '#2B2E2E'
    },
    line: {
        alignSelf: 'center', marginTop: 120
    },
    line2:{
        width: 285, tintColor: 'red'
    }

});


