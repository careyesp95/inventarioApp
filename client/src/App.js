import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.module.css';
import Home from './page/Home/Home';
import ProductCreate from './page/ProductCreate/ProductCreate';
import {BrowserRouter, Route } from 'react-router-dom'
import {getProductAll} from './actions/index';

function App() {
   const dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getProductAll())
    },[dispatch])

  return (
    <BrowserRouter>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/home/create'>
        <ProductCreate />
      </Route>
    </BrowserRouter>
  );
}

export default App;
