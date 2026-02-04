import Cart from '../../assets/cart.svg'
import { ContainerButtton } from './styles'

export function CartButton({ ...props }) {
  return (
    <ContainerButtton>
      <img src={Cart} alt=' {carrinho-de-compras} ' />
    </ContainerButtton>
  )
}
