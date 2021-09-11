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
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/cart' component={Cart} />
        <Route path='/shirt' component={Shirt} />
        <Route path='/mug' component={Mug} />
        <Route path='/mouse' component={Mouse} />
        <Route path='/mask' component={Mask} />
        <Route path='/shoe' component={Shoe} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/confirmation' component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;