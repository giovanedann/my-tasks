import React from 'react'
import {TaskProvider} from './src/contexts/tasks'
import Home from './src/screens/Home'

const App = () => {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  )
}

export default App
