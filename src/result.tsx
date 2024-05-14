import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    index: number
}
const Results = (props: Props) => {
  return (
    <View style={styles.resultsMain}>
      <Text style={{fontSize:45}} >{props.index}</Text>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
    resultsMain: {
        borderRadius:0,
        backgroundColor:'white'
    }
})