import React, { Component } from 'react'
import { Text, View , ActivityIndicator} from 'react-native'
import TokenDubuger from './TokenDubuger';
import Userservice from '../service/user.service';

export default class Loading extends Component {
    componentWillMount(){
        const {navigate} = this.props.navigation;
        Userservice.check()
        .then(user => {
            if(!user) return navigate('Login');
            navigate("Profile",{user});
        })
        .catch(error => {
            navigate('Login');
        })
    }
    render() {
        return (
            <View style={{flex : 1 , backgroundColor : '#7828AD' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text style={{color : 'white' , fontSize : 50}}>Hello Users</Text>
                <ActivityIndicator size="large" color="yellow" style={{ marginTop : 50}}/>
            </View>
        )
    }
}
