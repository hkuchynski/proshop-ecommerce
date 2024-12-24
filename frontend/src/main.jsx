import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../src/store.js';

import App from './App.jsx';
import PrivateRoute from './components/PrivateRoute..jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen.jsx';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';


// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingScreen />} />
        <Route path='/payment' element={<PaymentScreen />} />
        <Route path='/placeorder' element={<PlaceOrderScreen />} />
        <Route path='/order/:id' element={<OrderScreen />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router}/>
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>,
);
