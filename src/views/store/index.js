import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Store = props => {
  return (
    <View>
      <Text>Store</Text>
      <TouchableOpacity
        style={{
          width: 125,
          height: 60,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
        }}
        onPress={() => {}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
          }}>
          Test Auth Guard
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Store
