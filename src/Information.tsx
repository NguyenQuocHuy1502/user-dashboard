import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { data } from './data'

type Props = typeof data.users[0]

const Information = (props: Props) => {
  return (
    <View style={styles.container}>
        <View>
        <Image source={{ uri: props.image }} style={styles.image} />
        </View>
        <View style={styles.in4}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{props.firstName} {props.lastName}</Text>
          <Text style={{marginTop:10}}>{props.email}</Text>
          <Text>{props.company.name}</Text>
          <Text>{props.company.department}</Text>
        </View>
    </View>
  )
}

export default Information
const styles = StyleSheet.create({
  in4: {
    flexDirection: 'column',
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius:100,
  },
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'flex-start',
    padding:20,
    margin:20
  }
})