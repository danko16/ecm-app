import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 30,
    height: 45,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2dc3ed',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
})

export default styles
