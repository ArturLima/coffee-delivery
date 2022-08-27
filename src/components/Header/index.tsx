import {
  CityLabel,
  HeaderContainer,
  CartLabel,
  CartContainer,
  Amount,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

import logoDelivery from '../../assets/logo-delivery.svg'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoDelivery} alt="" />
      </a>
      <div>
        <CityLabel>
          <MapPin size={24} weight="fill" color={defaultTheme['purple-dark']} />{' '}
          Fortaleza, CE
        </CityLabel>
        <CartContainer>
          <CartLabel>
            <a href="/checkout">
              <ShoppingCart size={24} weight="fill" />
            </a>
          </CartLabel>
          {cart.length > 0 && <Amount>{cart.length}</Amount>}
        </CartContainer>
      </div>
    </HeaderContainer>
  )
}
