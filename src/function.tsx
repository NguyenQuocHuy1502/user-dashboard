import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    index: string
}
const Functions = (props: Props) => {
  return (
    <TouchableOpacity>
        <View style={styles.main}>
            <Text style={{fontSize: 30, color:'white'}}>{props.index}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Functions

const styles = StyleSheet.create({
    main: {
        borderWidth:1,
        borderRadius:999,
        backgroundColor: 'orange',
        color:'white',
        height:90,
        width:90,
        alignItems: 'center',
        justifyContent: 'center'
    }
})