import React from 'react'
import * as S from './styles'

const Home = () => {
  return (
    <S.SafeAreaView>
      <S.Wrapper>
        <S.Title>Welcome, user!</S.Title>
        <S.TaskInput />
      </S.Wrapper>
    </S.SafeAreaView>
  )
}

export default Home
