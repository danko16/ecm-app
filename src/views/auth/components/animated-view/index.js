import React from 'react'
import { Animated, View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const AnimatedView = props => {
  const { animatedValue } = props
  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: animatedValue.x,
          },
          {
            translateY: animatedValue.y,
          },
        ],
      }}>
      <View
        style={{ backgroundColor: 'red', height: 2.5, width: width * 0.5 }}
      />
    </Animated.View>
  )
}

export default AnimatedView
