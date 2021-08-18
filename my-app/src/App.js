import "./App.css";
import React from "react";
//Components
import "./components/Header/Header";
import Header from "./components/Header/Header";

import "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";

import "./components/ItemListContainer/ItemList";
import Item from "./components/ItemListContainer/ItemList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Item />
        <Footer />
      </div>
    );
  }
}

export default App;
