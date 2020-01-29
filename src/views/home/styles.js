import { StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  containerShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  container1: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: height * 0.3,
    alignContent: 'center',
    backgroundColor: '#ffff',
  },
  container2: {
    marginTop: 15,
    marginHorizontal: 5,
    padding: 15,
    height: height * 0.25,
    backgroundColor: '#ffff',
  },
  container2Wrapper: {
    height: '100%',
    justifyContent: 'center',
    marginRight: 40,
  },
  container2TopContent: {
    height: 50,
    width: 50,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  container2BottomContent: {
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  container3: {
    marginTop: 15,
    marginHorizontal: 5,
    padding: 15,
    height: height * 0.35,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
  container3TopWrapper: {
    flexDirection: 'row',
    height: height * 0.135,
    marginBottom: 15,
  },
  container3BottomWrapper: {
    width: '100%',
    borderRadius: 5,
    height: height * 0.135,
    backgroundColor: '#c2ccc4',
  },
  container3TopLeftContent: {
    height: '100%',
    marginRight: 20,
    width: width * 0.2,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  container3TopRightContent: {
    height: '100%',
    borderRadius: 5,
    width: width * 0.65,
    backgroundColor: 'grey',
  },
})

export default styles
