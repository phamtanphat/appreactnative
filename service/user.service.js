import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


export default class Userservice{
    static async signIn(email,password){
        const URL = "https://serveruseronline.herokuapp.com/user/signin";
        const response = await axios.post(URL , {email , password});
        if(response.data.user){
            await AsyncStorage.setItem("@token",response.data.user.token);     
        }
        return response;
    }    
    static wait(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => resolve() , 1000);
        });   
    }
    static async check(){
        try {
            const token = await AsyncStorage.getItem("@token");
            if(!token){
                await Userservice.wait();
                throw new Error("No token")
            }
            const URL = "https://serveruseronline.herokuapp.com/user/check";
            const response = await axios.post(URL , {token});
            if(!response.data.success) throw new Error ("No token");
            return response.data.user;
        } catch (error) { 
            alert(error.message);
        }
    }
    static async logout(){
        await AsyncStorage.removeItem("@token");
    }
} 