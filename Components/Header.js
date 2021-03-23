
import React, { useState } from "react";
import {  StyleSheet, Text, View } from "react-native";

export default function Header(){
return(
    <View style={styles.header}>
        <Text style={styles.title}>My TODO</Text>
    </View>
)
}
const styles=StyleSheet.create({
header:{
height:80,
paddingTop:38,
// width:100,

backgroundColor:"coral"

},
title:{
    textAlign:"center",
    fontSize:30,
    fontWeight:'bold',
},
})