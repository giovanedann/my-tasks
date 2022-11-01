import React from 'react'
import Task from '../Task'
import * as S from './styles'

interface Props {
  taskList: string[]
}

const TaskList = ({taskList}: Props) => {
  return (
    <S.Container>
      <S.Title>My tasks</S.Title>
      {taskList.map(task => (
        <Task key={task} title={task} handleDelete={() => {}} />
      ))}
    </S.Container>
  )
}

export default TaskList
