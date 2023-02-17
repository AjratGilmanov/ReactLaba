import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Catalog from './components/Catalog';
import Registration from './components/Registration';
import Login from './components/Login';
import ShoppingCart from './components/ShoppingCart';
import CompletedOrders from './components/CompletedOrders';

function App() {
  const [cart, setCart] = useState([]);
  const [pets, setPets] = useState([]);
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onRegistration = () => {
    setIsRegistered(true);
  };
  const onLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };
  
  const onLogin = () => {
    setIsLoggedIn(true);
  };
    useEffect(() => {
      fetch("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
        .then((response) => response.json())
        .then((data) => setPets(data))
        .catch((error) => console.error(error));
    }, []);
  
    const onAddToCart = (pet) => {
      setCart([...cart, pet]);
    }
  
    return (
      <div>
        <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Catalog</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/shopping-cart">Shopping Cart</Link>
          </li>
          <li>
            <Link to="/completed-orders">Completed Orders</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Catalog />
        </Route>
        <Route path="/registration">
          <Registration onRegistration={onRegistration} />
        </Route>
        <Route path="/login">
          <Login onLogin={onLoggedIn} />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>
        <Route path="/completed-orders">
          <CompletedOrders />
        </Route>
      </Switch>
      {isRegistered && <p>Welcome! You have successfully registered.</p>}
      {isLoggedIn && <p>Welcome! You are now logged in.</p>}
        </Router>
      </div>
    );
  }
  
export default App;