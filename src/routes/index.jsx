import { createBrowserRouter } from 'react-router-dom'

import { Footer, Header } from '../components/index'
import {
  Login,
  Home,
  Register,
  Menu,
  Cart,
  CompletePayment,
  Checkout
} from '../pages'


export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        < Header />
        < Home />
        <Footer />
      </>
    )
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  },
  {
    path: '/cardapio',
    element: (
      <>
        < Header />
        < Menu />
        <Footer />
      </>
    )
  },
  {
    path: '/carrinho',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/complete',
    element: <CompletePayment />
  },

])