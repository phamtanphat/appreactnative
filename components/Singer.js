import React, { Component } from 'react'
import { Text, View , FlatList , TouchableOpacity , Image } from 'react-native'
import axios from 'axios';

export default class Singer extends Component {
    constructor(props){
        super(props);
        this.state ={singers : []}
    }
    componentWillMount = async() => {
        try {
            const response = await axios.get("https://servertest12.herokuapp.com/singer")
            this.setState({singers : response.data.singers})
            
        } catch (error) {
            alert(error.message)
        }
        
        
    }
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center' , backgroundColor : 'white' , paddingTop : 20}}>
            <View style={{ alignItems : 'center' , padding : 20}}>
                <Text style={{fontSize : 20  }}> Singers Component </Text>
            </View>
            <FlatList
                data={this.state.singers}
                keyExtractor={item => item.id}
                renderItem={param => (
                    <View style={{ marginTop : 20 , marginHorizontal : 10 , padding : 10, flexDirection : 'row' , backgroundColor : 'orange'}}>
                        <View style={{ margin : 5}}  >
                            <Image
                                source={{uri : param.item.avatar}}
                                style={{width : 100 , height : 100}} >
                            </Image>
                            
                        </View>
                        <View style={{ justifyContent : 'space-around' }}>
                        
                            <Text style={{fontWeight : 'bold' , fontSize : 20}}>{param.item.name}</Text> 
                            <Text style={{fontWeight : 'normal' , fontSize : 15}}>{param.item.email}</Text> 
                        </View>
                           
                    </View>
                )}
            >
            </FlatList>
        </View>
        );
    }
}
