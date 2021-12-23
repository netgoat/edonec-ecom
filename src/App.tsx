import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { ShopPanel } from "./components/shop-panel";
import { Container } from "./components/Container";
import { Provider } from "react-redux";
import store from "./store";

import "./styles/main.css";


const App = () => (
  <Provider store={store}>
  
    <Navigation />
    <Container />
    <ShopPanel />
    <Footer />
  </Provider>
);

export default App;
