import React from 'react'
import * as S from './styles'

interface Props {
  title: string
  handleDelete: (title: string) => void
}

const Task = ({title, handleDelete}: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.DeleteButton activeOpacity={0.6} onPress={() => handleDelete(title)}>
        <S.DeleteButtonLabel>Delete</S.DeleteButtonLabel>
      </S.DeleteButton>
    </S.Container>
  )
}

export default Task
