import React, {Component} from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation'
class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount(){
        setTimeout(() => {
            this.navigateLogin('DefaultScreen')
        }, 3000);
    }
    navigateLogin = (screen) => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: screen })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../asset/image/LogoVNpost.png')}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    image:{
        width:'90%'
    }
})

export default SplashScreen;
