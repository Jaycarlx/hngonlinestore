import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import SignupPage from './Pages/SignupPage/SignupPage';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignupPage />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
