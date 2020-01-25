import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  AppRegistry,
  Animated,
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
  message: state.me.message,
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
    registerRequest,
    headerPosition,
    message,
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
    phone: '',
    password: '',
  })
  const [loginError, setLoginError] = useState({
    email_phone: '',
    password: '',
  })
  const [registerError, setRegisterError] = useState({
    full_name: '',
    email: '',
    phone: '',
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
    if (message) {
      if (message === 'User not found!') {
        setLoginError(prevState => ({
          ...prevState,
          email_phone: message,
        }))
      }

      if (message === 'Wrong password') {
        setLoginError(prevState => ({
          ...prevState,
          password: message,
        }))
      }

      if (message === 'Email and Phone already exist') {
        setRegisterError(prevState => ({
          ...prevState,
          email: 'Email already exist',
        }))
        setRegisterError(prevState => ({
          ...prevState,
          phone: 'Phone number already exist',
        }))
      } else if (message === 'Email already exist') {
        setRegisterError(prevState => ({
          ...prevState,
          email: message,
        }))
      } else if (message === 'Phone number already exist') {
        setRegisterError(prevState => ({
          ...prevState,
          phone: message,
        }))
      }

      Toast.show(message, Toast.LONG)
      customSet('message', null)
    }
  }, [navigation.state, message])

  function validateLogin() {
    let isValidate = true
    let phoneno = /^([0]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    // eslint-disable-next-line
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!loginData.email_phone) {
      setLoginError(prevState => ({
        ...prevState,
        email_phone: 'email or telphone cannot be empty',
      }))
      isValidate = false
    } else if (
      !loginData.email_phone.match(phoneno) &&
      !loginData.email_phone.match(mailformat)
    ) {
      setLoginError(prevState => ({
        ...prevState,
        email_phone: 'must be phone number or email format',
      }))
      isValidate = false
    } else {
      setLoginError(prevState => ({
        ...prevState,
        password: '',
      }))
    }

    if (loginData.password.length < 5) {
      setLoginError(prevState => ({
        ...prevState,
        password: 'password must be at least 5 chars long',
      }))
      isValidate = false
    } else {
      setLoginError(prevState => ({
        ...prevState,
        password: '',
      }))
    }

    return isValidate
  }

  function validateRegister() {
    let phoneno = /^([0]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    let nameFormat = /^[a-zA-Z ]+$/
    // eslint-disable-next-line
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let lowerCaseLetters = /[a-z]/g
    let numbers = /[0-9]/g

    let isValidate = true

    if (registerData.full_name.length < 5) {
      setRegisterError(prevState => ({
        ...prevState,
        full_name: 'name must be at least 5 chars long',
      }))
    } else if (!registerData.full_name.match(nameFormat)) {
      setRegisterError(prevState => ({
        ...prevState,
        full_name: 'name must contain only letter',
      }))
    } else {
      setRegisterError(prevState => ({
        ...prevState,
        full_name: '',
      }))
    }

    if (!registerData.email) {
      setRegisterError(prevState => ({
        ...prevState,
        email: 'email cannot be empty',
      }))
      isValidate = false
    } else if (!registerData.email.match(mailformat)) {
      setRegisterError(prevState => ({
        ...prevState,
        email: 'must be email format',
      }))
      isValidate = false
    } else {
      setLoginError(prevState => ({
        ...prevState,
        password: '',
      }))
    }

    if (!registerData.phone) {
      setRegisterError(prevState => ({
        ...prevState,
        phone: 'phone number cannot be empty',
      }))
      isValidate = false
    } else if (!registerData.phone.match(phoneno)) {
      setRegisterError(prevState => ({
        ...prevState,
        phone: 'must be phone number format',
      }))
      isValidate = false
    } else {
      setLoginError(prevState => ({
        ...prevState,
        password: '',
      }))
    }

    if (registerData.password.length < 5) {
      setRegisterError(prevState => ({
        ...prevState,
        password: 'password must be at least 5 chars long',
      }))
      isValidate = false
    } else if (!registerData.password.match(lowerCaseLetters)) {
      setRegisterError(prevState => ({
        ...prevState,
        password: 'password must contain a lower case',
      }))
      isValidate = false
    } else if (!registerData.password.match(numbers)) {
      setRegisterError(prevState => ({
        ...prevState,
        password: 'password must contain a number',
      }))
    } else {
      setRegisterError(prevState => ({
        ...prevState,
        password: '',
      }))
    }

    return isValidate
  }

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
    if (mode === 'login' && validateLogin()) {
      loginRequest({
        ...loginData,
        provider: 'local',
      })
    } else if (mode === 'register' && validateRegister()) {
      registerRequest(registerData)
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
            keyboardType="default"
            setIsFocus={setIsFocusRegister}
            clearError={setRegisterError}
            setInput="full_name"
            isFocus={isFocusRegister.full_name}
            onChangeText={onChangeText}
          />
          {registerError.full_name ? (
            <Text
              style={{
                marginBottom: -7,
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {registerError.full_name}
            </Text>
          ) : null}
          <InputCard
            mode="register"
            placeholder="Email"
            keyboardType="email-address"
            setIsFocus={setIsFocusRegister}
            clearError={setRegisterError}
            setInput="email"
            isFocus={isFocusRegister.email}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          {registerError.email ? (
            <Text
              style={{
                marginBottom: -7,
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {registerError.email}
            </Text>
          ) : null}
          <InputCard
            mode="register"
            placeholder="phone"
            keyboardType="phone-pad"
            setIsFocus={setIsFocusRegister}
            clearError={setRegisterError}
            setInput="phone"
            isFocus={isFocusRegister.phone}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          {registerError.phone ? (
            <Text
              style={{
                marginBottom: -7,
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {registerError.phone}
            </Text>
          ) : null}
          <InputCard
            mode="register"
            placeholder="Password"
            keyboardType="default"
            setIsFocus={setIsFocusRegister}
            clearError={setRegisterError}
            setInput="password"
            isFocus={isFocusRegister.password}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          {registerError.password ? (
            <Text
              style={{
                marginBottom: -10,
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {registerError.password}
            </Text>
          ) : null}
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
            placeholder="Email/phone"
            setIsFocus={setIsFocusLogin}
            clearError={setLoginError}
            setInput="email_phone"
            keyboardType="default"
            isFocus={isFocusLogin.email_phone}
            onChangeText={onChangeText}
          />
          {loginError.email_phone ? (
            <Text
              style={{
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {loginError.email_phone}
            </Text>
          ) : null}
          <InputCard
            mode="login"
            placeholder="Password"
            setIsFocus={setIsFocusLogin}
            clearError={setLoginError}
            setInput="password"
            keyboardType="default"
            isFocus={isFocusLogin.password}
            onChangeText={onChangeText}
            customStyles={{
              marginTop: 15,
            }}
          />
          {loginError.password ? (
            <Text
              style={{
                marginBottom: -10,
                marginLeft: 32,
                alignSelf: 'flex-start',
                color: 'red',
              }}>
              {loginError.password}
            </Text>
          ) : null}
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
