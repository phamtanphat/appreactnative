import React, { Component } from 'react'
import { Text, View , TextInput , TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

//Thu viên cua AsynStorage yarn add @react-native-community/async-storage
//import AsyncStorage from '@react-native-community/async-storage';
export default class TokenDubuger extends Component {
    state = {token : ''}
    async componentWillMount(){
        const token = await AsyncStorage.getItem("@token");
        this.setState({token});    
    }
    saveToken = async () => {
        const {token} = this.state; 
        await AsyncStorage.setItem("@token", token);
    }
    render() {
        const {token} = this.state;
        return (
        <View style={{flex : 1 , justifyContent : 'center' , alignItems : 'center' ,  backgroundColor : "#7828AD"}}>
            <Text style={{color : 'yellow' }}> Token : {token}</Text>
            <TextInput
                    underlineColorAndroid="transparent"
                    value={token}
                    onChangeText={text => this.setState({token : text})}
                    style={{backgroundColor : 'white' , height : 50 , padding : 10 , borderRadius : 5 , marginVertical : 20}}
                    placeholder="Input your token"
            />
            <TouchableOpacity 
                    onPress={this.saveToken}
                    style={{backgroundColor : '#DDDDDD' , padding : 20 , borderRadius : 5}}>
                    <Text style={{fontWeight : 'bold' , fontSize : 20 , color : 'red'}}>Save Token</Text>
                </TouchableOpacity>
        </View>
        )
    }
}
