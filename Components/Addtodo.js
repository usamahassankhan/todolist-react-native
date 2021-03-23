import React, { useState } from "react";
import {  Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Addtodo({submitHandler}){
    const [text,setText]=useState();       
    const changehander=(val)=>{
        setText(val)
    }
    return(
        <View style={styles.cont}>

      
        <TextInput
        style={styles.input}
        placeholder="enter your wish"
        onChangeText={(val)=>changehander(val)}/>
<Button onPress={()=>submitHandler(text)} title  ="add todo " color="coral"/>
        </View>
    )

}
const styles=StyleSheet.create({
    cont:{
        padding:10
    },
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"red",
    }
})