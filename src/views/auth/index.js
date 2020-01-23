import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  AppRegistry,
  Animated,
  //KeyboardAwareScrollView,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Swiper from 'react-native-swiper'
import Toast from 'react-native-simple-toast'

import { AnimatedView, InputCard, Header } from './components'
import { meActions } from '../../redux/reducers/me'
import { headerActions } from '../../redux/reducers/header'
import styles from './styles'

const mapStateToProps = state => ({
  error: state.me.message,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      customSet: meActions.customSet,
      loginRequest: meActions.loginRequest,
      registerRequest: meActions.registerRequest,
      headerPosition: headerActions.customSet,
    },
    dispatch,
  )

const AuthScreen = props => {
  const {
    navigation,
    loginRequest,
    customSet,
    //registerRequest,
    headerPosition,
    error,
  } = props

  let swiper = useRef()

  const [isFocusLogin, setIsFocusLogin] = useState({
    email_phone: false,
    password: false,
  })
  const [isFocusRegister, setIsFocusRegister] = useState({
    email: false,
    password: false,
  })
  const [loginData, setLoginData] = useState({
    email_phone: '',
    password: '',
  })
  const [registerData, setRegisterData] = useState({
    full_name: '',
    email: '',
    telephone: '',
    Birthday: '',
    password: '',
  })

  const [_animatedValue] = useState(new Animated.ValueXY())

  useEffect(() => {
    if (navigation.state.params) {
      const { targetIndex } = navigation.state.params
      if (
        !(swiper.state.index === 0 && targetIndex === -1) &&
        !(swiper.state.index === 1 && targetIndex === 1)
      ) {
        swiper.scrollBy(targetIndex)
      }
    }
    if (error) {
      Toast.show(error, Toast.LONG)
      customSet('message', null)
    }
  }, [navigation.state, error])

  function onChangeText(value, mode, name) {
    if (mode === 'login') {
      setLoginData(prevState => ({
        ...prevState,
        [name]: value,
      }))
    } else if (mode === 'register') {
      setRegisterData(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  function handleSendData(mode) {
    if (mode === 'login') {
      loginRequest({
        ...loginData,
        provider: 'local',
      })
    } else if (mode === 'register') {
      //eslint-disable next-line
      console.log(registerData)
    }
  }

  return (
    <>
      <AnimatedView animatedValue={_animatedValue} />
      <Swiper
        style={styles.wrapper}
        showsPagination={false}
        ref={component => (swiper = component)}
        loop={false}
        keyboardShouldPersistTaps={'handled'}
        onScroll={e => {
          let value = e.nativeEvent.contentOffset
          _animatedValue.setValue({
            x: value.x / 2,
            y: value.y,
          })
        }}
        onMomentumScrollEnd={(e, state, swiper) => {
          headerPosition('position', `${state.index}`)
        }}>
        <View style={styles.slide1}>
          <InputCard
            mode="register"
            placeholder="Full Name"
            setIsFocus={setIsFocusRegister}
            setInput="full_name"
            isFocus={isFocusRegister.full_name}
            onChangeText={onChangeText}
          />
          <InputCard
            mode="register"
            placeholder="Email"
            setIsFocus={setIsFocusRegister}
            setInput="email"
            isFocus={isFocusRegister.email}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          <InputCard
            mode="register"
            placeholder="Telephone"
            setIsFocus={setIsFocusRegister}
            setInput="telephone"
            isFocus={isFocusRegister.telephone}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          <InputCard
            mode="register"
            placeholder="Birthday"
            setIsFocus={setIsFocusRegister}
            setInput="birthday"
            isFocus={isFocusRegister.birthday}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          <InputCard
            mode="register"
            placeholder="Password"
            setIsFocus={setIsFocusRegister}
            setInput="password"
            isFocus={isFocusRegister.password}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSendData('register')
            }}>
            <Text style={{ color: '#ffffff' }}> REGISTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.slide2}>
          <InputCard
            mode="login"
            placeholder="Email/Telepon"
            setIsFocus={setIsFocusLogin}
            setInput="email_phone"
            isFocus={isFocusLogin.email_phone}
            onChangeText={onChangeText}
          />
          <InputCard
            mode="login"
            placeholder="Password"
            setIsFocus={setIsFocusLogin}
            setInput="password"
            isFocus={isFocusLogin.password}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleSendData('login')
            }}>
            <Text style={{ color: '#ffffff' }}> LOGIN</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </>
  )
}

AuthScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: () => null,
  headerLeft: () => (
    <Header navigation={navigation} title="Register" targetIndex={-1} />
  ),
  headerRight: () => (
    <Header navigation={navigation} title="Log In" targetIndex={1} />
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)

AppRegistry.registerComponent('authScreen', () => AuthScreen)
