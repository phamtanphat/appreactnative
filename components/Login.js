import React, { Component } from 'react'
import { Text, View , TextInput , TouchableOpacity , StyleSheet , Platform} from 'react-native'
import Userservice from '../service/user.service';
import TokenDubuger from './TokenDubuger';


export default class Login extends Component {
    state={txtEmail : '' , txtPassword : ''}

    signin = async () => {
        try {
            const {txtEmail , txtPassword} = this.state;
            const response = await Userservice.signIn(txtEmail,txtPassword);
            this.props.navigation.navigate("Profile",{user : response.data.user})
        } catch (error) {
           alert(error.message)
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
        <View style={{flex : 1 , backgroundColor : "#7828AD" , alignItems : 'center' , justifyContent : 'center' }}>
            <View  style={{marginTop : Platform.OS === 'ios' ? 50 : 30 }}>
                <Text style={{color : 'white' , fontSize : 40 , color : 'yellow' }}>
                    Login User
                </Text>                
            </View> 
            <View style={{marginTop : 20 , width : 350 , height : 40}}>
                <TextInput
                    underlineColorAndroid="transparent"
                    value={this.state.txtEmail}
                    onChangeText={text => this.setState({txtEmail : text})}
                    style={{backgroundColor : 'white' , height : 50 , padding : 10 , borderRadius : 5}}
                    placeholder="Input your email"
                />
                <TextInput
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    value={this.state.txtPassword}
                    onChangeText={text => this.setState({txtPassword : text})}
                    style={{backgroundColor : 'white' , height : 50 , padding : 10 , marginTop : 50 , borderRadius : 5}}
                    placeholder="Input your password"
                />
            </View>
            <View style={{marginTop : 120}}>
                <TouchableOpacity 
                    onPress={this.signin}
                    style={{backgroundColor : '#DDDDDD' , padding : 20 , borderRadius : 5}}>
                    <Text style={{fontWeight : 'bold' , fontSize : 20 , color : 'red'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <TokenDubuger/>
        </View>
        )
    }
}
