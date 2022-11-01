import React, {useCallback, useState} from 'react'
import {Alert} from 'react-native'
import TaskList from '../../components/TaskList'
import * as S from './styles'

const Home = () => {
  const [currentTask, setCurrentTask] = useState<string>('')
  const [taskList, setTaskList] = useState<string[]>([])

  const handleAddTask = useCallback(() => {
    if (!currentTask) {
      Alert.alert('Your task is empty, add some text before adding.')
      return
    }

    setTaskList(prevState => [...prevState, currentTask])
    setCurrentTask('')
  }, [currentTask])

  return (
    <S.SafeAreaView>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>Welcome, user!</S.HeaderTitle>
        </S.Header>
        <S.TaskInputContainer>
          <S.TaskInput
            value={currentTask}
            onChangeText={setCurrentTask}
            placeholder="Create your tasks by typing here!"
            placeholderTextColor="#c1c5c9"
          />
          <S.AddTaskButton activeOpacity={0.7} onPress={handleAddTask}>
            <S.AddTaskButtonLabel>Add task</S.AddTaskButtonLabel>
          </S.AddTaskButton>
        </S.TaskInputContainer>
        <TaskList taskList={taskList} />
      </S.Wrapper>
    </S.SafeAreaView>
  )
}

export default Home
