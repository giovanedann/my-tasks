import React from 'react'
import {Text, View, SafeAreaView} from 'react-native'
import styles from './styles'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Hello world!</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
