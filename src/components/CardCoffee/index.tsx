import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeSubTitle,
  PriceAndAmountContainer,
  ButtonContainer,
} from './styles'

interface CoffeeProps {
  url: string
  details: string
  price: string
  title: string
  subTitle: string
}

export function CardCoffee({
  url,
  details,
  price,
  title,
  subTitle,
}: CoffeeProps) {
  const [amount, setAmount] = useState(0)

  function handleIncrementAmount() {
    setAmount(amount + 1)
  }

  function handleDecrementAmount() {
    if (amount > 0) setAmount(amount - 1)
  }

  return (
    <CardContainer>
      <img src={url} alt="" />
      <CoffeeDetails>{details}</CoffeeDetails>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeSubTitle>{subTitle}</CoffeeSubTitle>
      <PriceAndAmountContainer>
        <label>
          R$ <strong>{price}</strong>
        </label>
        <ButtonContainer>
          <button onClick={handleDecrementAmount}>-</button>
          <input type="number" placeholder="0" value={amount} />
          <button onClick={handleIncrementAmount}>+</button>
        </ButtonContainer>
        <button>
          <ShoppingCart size={24} weight="fill" color="#fff" />
        </button>
      </PriceAndAmountContainer>
    </CardContainer>
  )
}
