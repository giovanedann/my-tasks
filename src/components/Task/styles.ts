import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding-right: 20px;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

export const DeleteButton = styled.TouchableOpacity`
  background: red;
  width: 100px;
  padding: 7px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

export const DeleteButtonLabel = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
`
