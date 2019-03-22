import React, { Component } from "react";
import { Text, View, FlatList , Image , RefreshControl} from "react-native";
import axios from 'axios';
export default class Singer extends Component {
    state = {
        loading : false,
        singers: []
    };
    componentWillMount(){
        this.getMoreSinger();
    }

    getMoreSinger = async() =>{
        this.setState({loading : true});
        const {data} = await axios.get('https://servertest12.herokuapp.com/singer');
        this.setState({singers : data.singers.concat(this.state.singers)});   
        this.setState({loading : false});
    }
    render() {
        return (
        <View style={{flex : 1 , justifyContent : 'center'}}>
            <View style={{ alignItems : 'center' , padding : 20}}>
                <Text style={{fontSize : 20  }}> Singers Component </Text>
            </View>
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={this.getMoreSinger}   
                    />
                }
                data={this.state.singers}
                keyExtractor={item => item.id}
                renderItem={param => (
                    <View style={{ marginTop : 20 , marginHorizontal : 10 , padding : 10, flexDirection : 'row' , backgroundColor : '#EEE9F6'}}>
                        <View style={{ margin : 5}}  >
                            <Image
                                style={{width : 100 , height : 100}} 
                                source={{uri : param.item.avatar}}>
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
