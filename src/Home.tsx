import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Information from './Information';
import { data } from './data';

const Home = () => {
    const navigation = useNavigation<any>(); 
    const navigateToDetail = () => {
            navigation.navigate("Detail")
        ;};
    
    
  return (
    <View>
        
        {data.users.map((item, index) => (
			<TouchableOpacity key={index} onPress = { ()=>{
                navigation.navigate("Detail", item)}
            }>
                <Information
                    {...item}
                    
                />
            </TouchableOpacity>
			))}
       
        
    </View>
    );
  
}

export default Home

const styles = StyleSheet.create({})