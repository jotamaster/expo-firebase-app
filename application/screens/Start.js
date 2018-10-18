import React, {Component} from 'react';
import {View,Button} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import AppButton from '../components/AppButton';
import {NavigationActions} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

export default class Start extends Component{
    static navigationOptions = {
        title: 'Expo App'
    }

    login(){
        const navigateAction = NavigationActions.navigate({
            routerName:'Login'
        });

        this.props.navigation.dispatch(navigateAction);

        console.log('hola login');

    }
    register(){
        console.log('hola');
    }

    async facebook(){

    }

    render(){
        return(
            <BackgroundImage >
                <View style={{justifyContent:'center', flex:1}}>
                <Button
                    onPress={this.register.bind(this)}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        />
                    <AppButton
                       bgColor="rgba(111, 38,74, 0.7)"
                        title="Entrar"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#fff"

                    />
                    <AppButton
                       bgColor="rgba(111, 38,74, 0.7)"
                        title="Registrarse"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#fff"

                    />
                    <AppButton
                       bgColor="rgba(111, 38,74, 0.7)"
                        title="Entrar con Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#fff"

                    />
                </View>
            </BackgroundImage>
        )
    }


}