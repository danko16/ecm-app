import React from 'react'
import { SafeAreaView, ScrollView, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'

import styles from './styles'

const { height } = Dimensions.get('window')

const Home = props => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 10,
          height: height * 0.085,
          backgroundColor: 'grey',
        }}>
        <TextInput
          style={{
            width: '50%',
            marginLeft: 15,
            backgroundColor: 'white',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Auth', { mode: 'login' })
          }}
          style={{
            width: 75,
            height: '100%',
            marginLeft: 15,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text style={{ alignSelf: 'center' }}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Auth', { mode: 'register' })
          }}
          style={{
            width: 75,
            height: '100%',
            marginLeft: 15,
            backgroundColor: 'white',
            justifyContent: 'center',
          }}>
          <Text style={{ alignSelf: 'center' }}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container1, styles.containerShadow]} />
        <View style={[styles.container2, styles.containerShadow]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={styles.container2Wrapper}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
            <View style={[styles.container2Wrapper, { marginRight: 0 }]}>
              <TouchableOpacity style={styles.container2TopContent} />
              <TouchableOpacity style={styles.container2BottomContent} />
            </View>
          </ScrollView>
        </View>
        <View style={[styles.container3, styles.containerShadow]}>
          <View style={styles.container3TopWrapper}>
            <TouchableOpacity style={styles.container3TopLeftContent} />
            <TouchableOpacity style={styles.container3TopRightContent} />
          </View>
          <TouchableOpacity style={styles.container3BottomWrapper} />
        </View>
        <View
          style={[
            {
              marginTop: 15,
              marginHorizontal: 5,
              height: height * 0.75,
              marginBottom: 20,
              justifyContent: 'center',
              backgroundColor: '#ffff',
            },
            styles.containerShadow,
          ]}>
          <View
            style={{
              height: '47%',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                paddingLeft: 15,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'grey',
                marginBottom: 10,
              }}>
              PRODUCTS
            </Text>
            <View
              style={{
                height: height * 0.275,
                width: '100%',
                backgroundColor: 'grey',
              }}></View>
          </View>
          <View
            style={{
              height: '47%',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                paddingLeft: 15,
                fontWeight: 'bold',
                fontSize: 20,
                color: 'grey',
                marginBottom: 10,
              }}>
              COLLECTION
            </Text>
            <View
              style={{
                height: height * 0.275,
                width: '100%',
                backgroundColor: 'grey',
              }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

Home.navigationOptions = ({ navigation }) => ({
  headerShown: false,
})

export default Home
