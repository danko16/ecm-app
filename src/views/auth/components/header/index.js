import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'

const mapStateToProps = state => ({
  position: state.header.position,
})

const Header = props => {
  const { navigation, title, targetIndex, position } = props
  let isActive = true
  if (targetIndex === 1 && position !== '1') {
    isActive = false
  }
  if (targetIndex === 1 && position === '1') {
    isActive = true
  }
  if (targetIndex === -1 && position !== '0') {
    isActive = false
  }
  if (targetIndex === -1 && position === '0') {
    isActive = true
  }

  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => {
        navigation.setParams({
          targetIndex,
        })
      }}>
      <Text style={{ fontSize: 16, color: isActive ? 'red' : 'grey' }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
export default connect(mapStateToProps)(Header)
