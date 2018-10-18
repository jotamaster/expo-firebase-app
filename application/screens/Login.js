import React, {Component} from 'react';
import View from 'react-native';
import BackgraundImage from "./../components/BackgroundImage";
import AppButton from "../components/AppButton";
import t from "tcomb-form-native";
import FormValidation from "../utils/valitation";
import {Card} from "react-native-elements";
const  Form = t.form.Form;
import * as firebase from 'firebase';
import Toast from 'react-native-simple-toast';

export default class Login extends Component{
    constructor(){
        super();
         
        this.user = t.struct({
            email: FormValidation.email,
            password: FormValidation.password,
        });

        this.options ={
            fields:{
                email:{
                    help: 'Introduce tu email',
                    error:'Email incorrecto',
                    autoCapitalize:'none'
                },
                password:{
                    help:'Introduce  tu clave',
                    error:'Clave Incorrecte',
                    password:true,
                    secureTextEntry: true,
                }
            }
        };
    }

    login(){

    }
    render(){
        return(
            <BackgraundImage source={require('../../assets/images/bgstart.jpg')}>
                <View>
                    <Card wrapperStyle={{paddingLeft:10}} title="Iniciar sesión">
                        <Form 
                            ref="form"
                            type={this.user}
                            options={this.options}
                        />
                        <AppButton
                            bgColor="rgba(111, 38,74, 0.7)"
                            title="Entrar"
                            action={this.login.bind(this)}
                            iconName="sign-in"
                            iconSize={30}
                            iconColor="#fff"
                        />
                    </Card>
                </View>
            </BackgraundImage>
        )
    }
}
