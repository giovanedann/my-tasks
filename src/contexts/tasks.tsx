import React, {Dispatch, SetStateAction, useContext, useEffect} from 'react'
import {createContext, ReactNode, useCallback, useMemo, useState} from 'react'
import {Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

const tasksStorageKey = '@MyTasks:Tasks'

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

  const saveTasks = useCallback(async (data: string[]) => {
    await AsyncStorage.setItem(tasksStorageKey, JSON.stringify(data))
  }, [])

  const loadTasks = useCallback(async () => {
    const storageTasks = await AsyncStorage.getItem(tasksStorageKey)
    if (storageTasks) {
      setTaskList(JSON.parse(storageTasks))
    }
  }, [])

  useEffect(() => {
    saveTasks(taskList)
  }, [taskList, saveTasks])

  useEffect(() => {
    loadTasks()
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
