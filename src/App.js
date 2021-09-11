import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Shirt from "./pages/products/Shirt"
import Mug from "./pages/products/Mug"
import Mouse from "./pages/products/Mouse"
import Mask from "./pages/products/Mask"
import Shoe from "./pages/products/Shoe"
import Checkout from "./pages/Checkout"
import Confirmation from "./pages/Confirmation"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/react-redux-store/' exact component={Home} />
        <Route path='/react-redux-store/home' exact component={Home} />
        <Route path='/react-redux-store/shop' component={Shop} />
        <Route path='/react-redux-store/cart' component={Cart} />
        <Route path='/react-redux-store/shirt' component={Shirt} />
        <Route path='/react-redux-store/mug' component={Mug} />
        <Route path='/react-redux-store/mouse' component={Mouse} />
        <Route path='/react-redux-store/mask' component={Mask} />
        <Route path='/react-redux-store/shoe' component={Shoe} />
        <Route path='/react-redux-store/checkout' component={Checkout} />
        <Route path='/react-redux-store/confirmation' component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;