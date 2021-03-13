import React, { Component } from 'react'
import SHOP_DATA from "../data/shopData"
import CollectionPreview from "../components/collection-preview"

export default class ShopPage extends Component {

  state = {
    shopData: SHOP_DATA,
  }
  
  render() {
    return (
      <>
        {this.state.shopData.map(item => <CollectionPreview key={item.id} title={item.title} items={item.items} />)}
      </>
    )
  }
}
