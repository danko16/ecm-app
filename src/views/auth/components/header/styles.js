import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  header: {
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.5,
  },
})

export default styles
