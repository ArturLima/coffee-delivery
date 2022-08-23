import { ShoppingCart } from 'phosphor-react'
import {
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeSubTitle,
  PriceAndAmountContainer,
} from './styles'

interface CoffeeProps {
  url: string
  details: string
  title: string
  subTitle: string
}

export function CardCoffee({ url, details, title, subTitle }: CoffeeProps) {
  return (
    <CardContainer>
      <img src={url} alt="" />
      <CoffeeDetails>{details}</CoffeeDetails>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeSubTitle>{subTitle}</CoffeeSubTitle>
      <PriceAndAmountContainer>
        <label>
          R$ <strong>9,90</strong>
        </label>
        <input type="number" placeholder="1"></input>
        <ShoppingCart size={24} weight="fill" color="#fff" />
      </PriceAndAmountContainer>
    </CardContainer>
  )
}
