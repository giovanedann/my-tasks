import React from 'react'
import * as S from './styles'

const Home = () => {
  return (
    <S.SafeAreaView>
      <S.Wrapper>
        <S.Header>
          <S.HeaderTitle>Welcome, user!</S.HeaderTitle>
        </S.Header>
        <S.TaskInputContainer>
          <S.TaskInput />
          <S.AddTaskButton activeOpacity={0.7}>
            <S.AddTaskButtonLabel>Add task</S.AddTaskButtonLabel>
          </S.AddTaskButton>
        </S.TaskInputContainer>
      </S.Wrapper>
    </S.SafeAreaView>
  )
}

export default Home
