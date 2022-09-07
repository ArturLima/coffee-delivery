import {
  CoffeeContainer,
  Divider,
  TextTotalItem,
  TotalDetails,
  TotalText,
} from './styles'
import { CoffeeDetails } from './CoffeeDetails'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'

interface Product {
  product: {
    id: number
    url: string
    amount: number
    price: string
    title: string
  }
}

export function CoffeeCheckout() {
  const { cart } = useCart()
  const [total, setTotal] = useState(0)

  function calculateAmount({ product }: Product) {
    return product.amount * parseFloat(product.price.replace(',', '.'))
  }

  function calculateTotal() {
    const total = cart.reduce(function (total, numero) {
      return total + parseFloat(numero.product.price.replace(',', '.'))
    }, 0)
    return total + 3.5
  }
  calculateTotal()
  return (
    <CoffeeContainer>
      {cart.map((coffee) => {
        return (
          <>
            <CoffeeDetails
              id={coffee.product.id}
              title={coffee.product.title}
              amount={coffee.product.amount}
              price={calculateAmount(coffee).toString()}
              image={coffee.product.url}
            />
            <Divider />
          </>
        )
      })}
      <TotalDetails>
        <div>
          <TextTotalItem>Total de itens</TextTotalItem>
          <TextTotalItem>R$ {calculateTotal() - 3.5} </TextTotalItem>
        </div>
        <div>
          <TextTotalItem>Entrega</TextTotalItem>
          <TextTotalItem>R$ 3,50</TextTotalItem>
        </div>
        <div>
          <TotalText>Total</TotalText>
          <TotalText>R$ {calculateTotal()}</TotalText>
        </div>
        <button>Confirmar Pedido</button>
      </TotalDetails>
    </CoffeeContainer>
  )
}
