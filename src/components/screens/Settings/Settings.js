import React from 'react';
import {  Text, View,Image,  TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';



export default Settings=({navigation})=>{

    return(
        <View style={{flex:1}}>
            <Text>Settings</Text>
            <Button onPress={()=>navigation.navigate('Home')}/>
        </View>
    )
}