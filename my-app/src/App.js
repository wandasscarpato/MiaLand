import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CustomProvider from "./context/CartContext";
class App extends React.Component {
  render() {
    return (
      <Router>
        <CustomProvider>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ItemListContainer}></Route>
            <Route path="/carrito" exact component={Cart}></Route>
            <Route path="/producto/:id" exact component={ItemDetailContainer}></Route>
            <Route path="/categoria/:id" exact component={ItemListContainer}></Route>
          </Switch>
          <Footer />
        </div>
        </CustomProvider>
      </Router>
    );
  }
}

export default App;
