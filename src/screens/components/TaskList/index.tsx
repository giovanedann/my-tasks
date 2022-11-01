import React from 'react'
import * as S from './styles'

interface Props {
  taskList: string[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <S.Container>
      <S.Title>My tasks</S.Title>
    </S.Container>
  )
}

export default TaskList
