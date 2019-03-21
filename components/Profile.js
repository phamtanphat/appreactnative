import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Userservice from '../service/user.service';

export default class Profile extends Component {
    logout = async () => {
        await Userservice.logout();
        this.props.navigation.navigate("Login"); 
    }
    render() {
        const { navigation } = this.props;
        const {user} = navigation.state.params;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Profile Component
                </Text>
                <Text>Name: {user.name}</Text>
                <Text>Email: {user.email}</Text>
                <Image style={styles.image} source={{ uri: user.avatar }} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.logout}
                >
                    <Text style={styles.buttonText}>Log out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 20,
        backgroundColor: '#C2B5D4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 50
    },
    buttonContainer: {
        marginTop : 20,
        marginBottom : 20,
        backgroundColor: '#6F5591',
        padding: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#A08FB8',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    image: { width: 100, height: 100 ,marginTop : 20, marginBottom : 20,}
}