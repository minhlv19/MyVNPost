import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from '../screen/splashscreen/SplashScreen';
import DefaultScreen from '../screen/login/default/DefaultScreen';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const Main = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null,
        },

    },
    DefaultScreen:{
        screen:DefaultScreen,
        navigationOptions:{
            header: null
        }
    }
});

export default createAppContainer(Main);
