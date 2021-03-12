import React from 'react'
import styled from "styled-components"

const HomePage = () => {
  return (
    <>
      <HomePageWrapper>
        <DirectoryMenu>
          <CategoryItem>
            <div className="content">
              <h1 className="title">Hats</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </CategoryItem>
          <CategoryItem>
            <div className="content">
              <h1 className="title">Jackets</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </CategoryItem>
          <CategoryItem>
            <div className="content">
              <h1 className="title">Sneakers</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </CategoryItem>
          <CategoryItem>
            <div className="content">
              <h1 className="title">Women</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </CategoryItem>
          <CategoryItem>
            <div className="content">
              <h1 className="title">Men</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </CategoryItem>
        </DirectoryMenu>
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
const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CategoryItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }
`
