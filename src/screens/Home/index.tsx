import React from 'react'
import {Text, View, SafeAreaView, TextInput} from 'react-native'
import styles from './styles'

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Welcome, user!</Text>
        <TextInput style={styles.input} />
      </View>
    </SafeAreaView>
  )
}

export default Home
