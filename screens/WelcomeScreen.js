import React,{Component} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import db from'../config.js'
import firebase from 'firebase'

export default class WelcomeScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("login successful")
        })
        .catch((error)=>{
            var errorCode=error.errorCode
            var errorMessage= error.Message
            return Alert.alert(errorMessage)
        })
    }

    userSignUp=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("Sign up successful")
        })
        .catch((error)=>{
            var errorCode=error.errorCode
            var errorMessage= error.message
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Text style={styles.title}>BARTER APP</Text>
                </View>
<View style={styles.buttonContainer}>
    <TextInput
    style={styles.loginBox}
    placeholder="barter@gmail.com"
    placeholderTextColor="#7e3ba5"
    keyboardType="email-address"
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
    }} />
    <TextInput
    style={styles.loginBox}
    secureTextEntry={true}
    placeholder="password"
    placeholderTextColor="#7e3ba5"
    onChangeText={()=>{
        this.setState({
            password:text
        })
    }}/>

    <TouchableOpacity 
    style={[styles.button,{marginBottom:20,marginTop:20}]}
    onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}} >
        <Text style={styles.buttonText}>LOGIN</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={[styles.button,{marginBottom:20,marginTop:20}]}
        onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}>
            <Text style={styles.buttonText}>SIGN UP</Text>
    </TouchableOpacity>

</View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e7b8f2'
    },
    profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:60,
        fontWeight:'200',
        paddingBottom:'30',
        color:'#442c8c',
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:25,
        backgroundColor:"#ea5d8f",
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8,
        },
        shadowOpacity:0.30,
        shadowRadius:9.2,
        elevation:60
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'400',
        fontSize:25
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ea5d8f',
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
    }
})