import {StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#f6f5fc',
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#f6f5fc',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    marginTop: 20,
    fontSize: 18,
    padding: Platform.OS === 'android' ? 15 : 10,
    borderRadius: 10,
  },
})

export default styles
