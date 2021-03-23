import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons' 

export default function({item,pressHandler}){
    return(
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
          <View style={styles.item}>
          <MaterialIcons name="delete" size={18} color="red"/>
<Text >{item.text}</Text>
          </View>


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
        borderRadius:10,
        flexDirection:"row"
    }
})