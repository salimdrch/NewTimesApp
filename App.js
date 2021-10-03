import React, { useEffect } from 'react';
//import { StatusBar } from 'expo-status-bar';
//import Title from './Title';
//import { openDatabase } from 'react-native-sqlite-storage';
import * as SQLite from 'expo-sqlite';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native'
import Liste from './Liste';

// Ouverture de la DB
const db = SQLite.openDatabase(
  {
  name: "dataBase",
  },
  () => {},
  error => {console.log(error)}
);

export default function App() {

  useEffect(() => {
    createDataBase();
  },[]);

  // Création de la DB
  const createDataBase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS"
        + "Article"
        + "(id INTEGER PRIMARY KEY AUTOINCREMENT,tile VARCHAR(50),content VARCHAR(50));"
      )
    })
  }

  return (
      <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>

          <View style={styles.title}>
            <Text style={styles.titleText}>New Times</Text>
          </View>

        </View>
      
        <View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleTexte}>Actualité du jour : </Text>
          </View>
        </View>
        
      </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  // View container principal
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',  
  },

  // View titleContainer
  titleContainer: {
    width: '60%',
    height: '32%',
  },

  // View title
  title:{
      marginTop: '20%',
      borderTopWidth: 4,
      borderBottomWidth: 4,
      borderBottomColor: '#deb887',
      borderTopColor:'#deb887',
  }, 

  titleText:{
      textAlign: 'center',
      fontSize: 50,
  },

  // View subTitleContainer
  subTitleContainer:{
    marginLeft: '-45%',
  //  borderWidth: 3,
    color: 'black',
  },

  subTitleTexte:{
    fontSize: 20,
    color: 'black',
  },
});


