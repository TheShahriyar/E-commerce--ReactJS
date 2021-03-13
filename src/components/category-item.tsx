import React from 'react'
import styled from "styled-components"

const CategoryItem = (prop: {title: string, imgurl:string}) => {
  
  return (
    <>
      <CategoryItemWrapper style={{backgroundImage: `url(${prop.imgurl})`}}>
        <div className="content">
          <h1 className="title">{prop.title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </CategoryItemWrapper>
    </>
  )
}

export default CategoryItem


const CategoryItemWrapper = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  background-position: center center;
  background-size: cover;
  object-fit: cover;

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
    background-color: rgba(255, 255, 255, 0.8);

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
      text-transform: uppercase;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`
