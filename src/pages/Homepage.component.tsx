import React from 'react'
import styled from "styled-components"
import Category from '../components/Category'

const HomePage = () => {
  return (
    <>
      <HomePageWrapper>
        <Category />
      </HomePageWrapper>
    </>
  )
}

export default HomePage

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

