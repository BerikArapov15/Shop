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
import AdminPage from "./component/AdminPage";
import Auth from "./component/Auth";
import AuthContextProvider from "./contexts/AuthContextProvider";

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
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
        <Footer/>
       </AuthContextProvider>

  
   </>
  )
}

export default App;
