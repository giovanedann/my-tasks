import React, {Dispatch, SetStateAction, useContext} from 'react'
import {createContext, ReactNode, useCallback, useMemo, useState} from 'react'
import {Alert} from 'react-native'

interface TaskContextProps {
  currentTask: string
  setCurrentTask: Dispatch<SetStateAction<string>>
  taskList: string[]
  setTaskList: Dispatch<SetStateAction<string[]>>
  handleAddTask: () => void
  handleRemoveTask: (title: string) => void
}

interface TaskProviderProps {
  children?: ReactNode
}

const TaskContext = createContext({} as TaskContextProps)

const TaskProvider = ({children}: TaskProviderProps) => {
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

  const handleRemoveTask = useCallback((title: string) => {
    setTaskList(prevState =>
      prevState.filter(
        taskTitle => taskTitle.toLowerCase() !== title.toLowerCase(),
      ),
    )
  }, [])

  const contextValue = useMemo(
    () => ({
      taskList,
      currentTask,
      setCurrentTask,
      setTaskList,
      handleAddTask,
      handleRemoveTask,
    }),
    [
      taskList,
      currentTask,
      setCurrentTask,
      setTaskList,
      handleAddTask,
      handleRemoveTask,
    ],
  )

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  )
}

const useTaskList = () => useContext(TaskContext)

export {useTaskList, TaskProvider}
