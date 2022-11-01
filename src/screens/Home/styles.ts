import {Platform} from 'react-native'
import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
  background-color: #f6f5fc;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.View`
  background-color: #f6f5fc;
  flex: 1;
  width: 100%;
`

export const Header = styled.View`
  background-color: #4287f5;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 10px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`

export const TaskInputContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  padding: 30px 20px;
`

export const TaskInput = styled.TextInput`
  background-color: #fff;
  width: 100%;
  color: #000;
  font-size: 18px;
  padding: ${Platform.OS === 'android' ? '14px' : '10px'};
  border-radius: 8px;
`

export const AddTaskButton = styled.TouchableOpacity`
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  background-color: #1b70f7;
`

export const AddTaskButtonLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`
