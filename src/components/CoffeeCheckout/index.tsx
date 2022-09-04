import { CoffeeContainer, Divider } from './styles'
import { CoffeeDetails } from './CoffeeDetails'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'

export function CoffeeCheckout() {
  const { cart } = useCart()

  return (
    <CoffeeContainer>
      {cart.map((coffee) => {
        return (
          <>
            <CoffeeDetails
              id={coffee.product.id}
              title={coffee.product.title}
              amount={coffee.product.amount}
              price={coffee.product.price}
              image={coffee.product.url}
            />
            <Divider />
          </>
        )
      })}
    </CoffeeContainer>
  )
}
