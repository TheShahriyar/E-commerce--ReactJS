import React, { Component } from 'react'
import styled from "styled-components"
import categoryData from "../data/categoryData"
import CategoryItem from './category-item'

export default class Category extends Component {

  state = {
    categories: categoryData
  }

  render() {
    return (
      <>
        <CategoryWrapper>
          {this.state.categories.map(category => <CategoryItem key={category.id} title={category.title} imgurl={category.imageUrl} />)}
        </CategoryWrapper>
      </>
    )
  }
}

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
