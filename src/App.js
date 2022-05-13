import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Auth from "./component/Auth";
import AuthContextProvider from "./contexts/AuthContextProvider";
import  CreditCard from "./component/CreditCard";
import { Pagination } from "@mui/material";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/card" component={CreditCard} />
        </Switch>
        <Pagination/>
        <Footer/>

       </AuthContextProvider>

  
   </>
  )
}

export default App;
