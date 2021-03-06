import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;
