import React from 'react'
import {useTaskList} from '../../contexts/tasks'
import Task from '../Task'
import * as S from './styles'

interface RenderItemProps {
  item: string
}

const TaskList = () => {
  const {taskList} = useTaskList()

  return (
    <S.Container>
      <S.Title>My tasks</S.Title>
      <S.List
        data={taskList}
        keyExtractor={(title: string, index: number) => title + index}
        renderItem={({item}: RenderItemProps) => <Task title={item} />}
      />
    </S.Container>
  )
}

export default TaskList
