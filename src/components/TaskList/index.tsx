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
      <S.List
        data={taskList}
        keyExtractor={(title: string, index: number) => title + index}
        renderItem={({item}: {item: string}) => (
          <Task title={item} handleDelete={() => {}} />
        )}
      />
    </S.Container>
  )
}

export default TaskList
