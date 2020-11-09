import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen1() {

    return (
        <View>
            <ImageBackground source={require('../images/banner.png')} style={styles.banner}>
                <View style={styles.view1}>
                    <Image source={require('../images/logo1.png')} />
                </View>
                <View style={styles.view1}>
                    <Image source={require('../images/name.png')} />
                </View>
                <View style={styles.view1}>
                    <Image source={require('../images/manage.png')} />
                    <Image source={require('../images/dot.png')} style={styles.dot} />
                    <Image source={require('../images/monitor.png')} />
                    <Image source={require('../images/dot.png')} style={styles.dot} />
                    <Image source={require('../images/grow.png')} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn_text}>Get Started</Text>
                </TouchableOpacity>
                <View style={styles.view2}>
                    <Text style={styles.txt}>Already have account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt2}>
                            Login here
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
    txt: {
        color: 'white'
    },
    txt2: {
        color: 'white', marginLeft: 10, textDecorationLine: 'underline'
    },
    button: {
        height: 42, width: 293, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', top: 293
    },
    btn_text: {
        fontSize: 15, textAlign: 'center', top: 10
    },
    view1: {
        alignSelf: 'center', top: 168, flexDirection: 'row'
    },
    view2: {
        flexDirection: 'row', alignSelf: 'center', marginTop: 340
    },
    dot: {
        margin: 5, height: ('35%'), width: ('1.5%')
    }

});


