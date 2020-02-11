import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class DefaultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View></View>
              <View/>
              <View/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
