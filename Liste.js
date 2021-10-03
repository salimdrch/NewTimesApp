import React from "react";
import { Alert } from "react-native";
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { getArticles } from "./service/news";

export default class Liste extends React.Component{

    constructor(propos){
        super(propos);
        this.state = {
            isLodind: true,
            data: null
        }
    }

    componentDidMount(){
        getArticles().then(data => {
            this.setState({
                isLodind: false,
                data: data
            });
        }, error =>{
            Alert.alert('Error');
        })
    }

    render(){
        console.log(this.state.data)
        return {

        };
    }
}