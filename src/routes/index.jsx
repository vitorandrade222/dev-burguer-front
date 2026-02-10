import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Register } from '../pages/register'
import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { Header } from '../components/Header'
import { Cart } from '../pages/Cart'

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <>
        < Header />
        < Home />
      </>
    )
  },

  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/carrinho',
    element: <Cart />
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
      </>
    )
  }

])