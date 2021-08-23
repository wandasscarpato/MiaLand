import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import "./components/Header/Header";
import Header from "./components/Header/Header";

import "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ItemListContainer}></Route>
            <Route path="/producto/:id" exact component={ItemDetailContainer}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
