import { StyleSheet, Text, View, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'



const Detail = () => {
    const navigation = useNavigation<any>(); 
    const route = useRoute<any>(); 
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: route.params.image }} style={styles.anh}/>
      </View>
      <View>
        <Text>{route.params.firstName} {route.params.lastName}</Text>
        <Text>{route.params.address.address} ,{route.params.address.city} , {route.params.address.state}</Text>
        <Text>{route.params.age}</Text>
      </View>
      <View>
        <Text>Card</Text>
        <Text>{route.params.bank.cardNumber}</Text>
        <Text>{route.params.bank.cardType}</Text>
        <Text>{route.params.bank.cardExpire}</Text>
      </View>
      <View>
        <Text>Company</Text>
        <Text>{route.params.company.name}</Text>
        <Text>{route.params.company.address.address}</Text>
        <Text>{route.params.company.department}</Text>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  anh:{

  },
  container:{
    flexDirection: 'column',
    alignItems: 'center',
  }
})