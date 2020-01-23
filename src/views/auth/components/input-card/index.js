import React from 'react'
import { TextInput } from 'react-native'
import CardView from 'react-native-cardview'

import styles from './style'

const InputCard = props => {
  const {
    setIsFocus,
    isFocus,
    placeholder,
    mode,
    setInput,
    onChangeText,
    customStyles,
  } = props
  return (
    <CardView
      style={[styles.inputContainer, customStyles]}
      cardElevation={2.5}
      cardMaxElevation={2.5}
      cornerRadius={4}>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: isFocus ? '#6d6de8' : '#8cdedd',
          borderBottomWidth: isFocus ? 2 : 1.5,
          borderRadius: 4,
        }}
        onFocus={e => {
          setIsFocus(prevState => ({
            ...prevState,
            [setInput]: true,
          }))
        }}
        onEndEditing={e => {
          setIsFocus(prevState => ({
            ...prevState,
            [setInput]: false,
          }))
        }}
        onChangeText={
          onChangeText
            ? text => {
                onChangeText(text, mode, setInput)
              }
            : null
        }
      />
    </CardView>
  )
}

export default InputCard
