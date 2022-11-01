import {Platform} from 'react-native'
import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
  background-color: #f6f5fc;
  flex: 1;
`

export const Wrapper = styled.View`
  background-color: #f6f5fc;
  flex: 1;
  padding: 14px 20px;
`

export const Title = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`

export const TaskInput = styled.TextInput`
  background-color: #fff;
  color: #000;
  margin-top: 20px;
  font-size: 18px;
  padding: ${Platform.OS === 'android' ? '14px' : '10px'};
  border-radius: 8px;
`
