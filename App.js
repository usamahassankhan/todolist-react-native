import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import Addtodo from "./Components/Addtodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
    

  ]);
  const pressHandler=(key)=>{
setTodos((prev)=>{
  return prev.filter((todo)=>todo.key !==key)
})
  }
  const submitHandler=(text)=>{
    setTodos((prev)=>{
      return [
        ...prev,
        {text:text,key:Math.random().toString}
      ]
    })
      }
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Addtodo submitHandler={submitHandler}/>
      </View>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler}  />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
