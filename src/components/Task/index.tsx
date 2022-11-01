import React from 'react'
import {useTaskList} from '../../contexts/tasks'
import * as S from './styles'

interface Props {
  title: string
}

const Task = ({title}: Props) => {
  const {handleRemoveTask} = useTaskList()

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.DeleteButton
        activeOpacity={0.6}
        onPress={() => handleRemoveTask(title)}>
        <S.DeleteButtonLabel>Delete</S.DeleteButtonLabel>
      </S.DeleteButton>
    </S.Container>
  )
}

export default Task
