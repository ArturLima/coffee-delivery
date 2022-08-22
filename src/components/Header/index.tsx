import {
  BaseLabelHeader,
  CityLabel,
  HeaderContainer,
  TrashLabel,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { defaultTheme } from '../../styles/themes/default'

import logoDelivery from '../../assets/logo-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoDelivery} alt="" />
      </span>
      <div>
        <CityLabel>
          <MapPin size={24} weight="fill" color={defaultTheme['purple-dark']} />{' '}
          Fortaleza, CE
        </CityLabel>
        <TrashLabel>
          <ShoppingCart size={24} weight="fill" />
        </TrashLabel>
      </div>
    </HeaderContainer>
  )
}
