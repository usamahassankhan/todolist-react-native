import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function({item,pressHandler}){
    return(
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
<Text style={styles.item}>{item.text}</Text>

      </TouchableOpacity>  
    )
}
const styles=StyleSheet.create({
    item:{ 
        padding:18,
        marginTop:16,
        borderColor:"#bbb",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10
    }
})