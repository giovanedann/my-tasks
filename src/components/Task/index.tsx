import React from 'react'
import {Alert} from 'react-native'
import {useTaskList} from '../../contexts/tasks'
import * as S from './styles'

interface Props {
  title: string
}

const Task = ({title}: Props) => {
  const {handleRemoveTask} = useTaskList()

  const removeTask = (taskTitle: string) => {
    Alert.alert('Warning', 'Are you sure? This action cannot be undone', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Confirm',
        onPress: () => handleRemoveTask(taskTitle),
      },
    ])
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.DeleteButton activeOpacity={0.6} onPress={() => removeTask(title)}>
        <S.DeleteButtonLabel>Delete</S.DeleteButtonLabel>
      </S.DeleteButton>
    </S.Container>
  )
}

export default Task
