import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {openDatabase} from "react-native-sqlite-storage";
import { StatusBar } from 'expo-status-bar';

const db = openDatabase(
    {
        name: 'dataBase',
        location: 'default',
    },
    ()=>{},
    error=>{console.log(error)}
  );

  const db = openDatabase(
    {
        name: 'dataBase',
        location: 'default',
    },
    ()=>{},
    error=>{console.log(error)}
  );

export default class Title extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.titleText}>New Time</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dcdcdc',
      alignItems: 'center',
      paddingTop: 50,
    },
    top:{
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderBottomColor: '#deb887',
        borderTopColor:'#deb887',
    }, 
    titleText:{
        fontSize: 60,
    },
});