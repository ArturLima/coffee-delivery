import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useCart } from '../../hooks/useCart'
import {
  CardContainer,
  CoffeeDetails,
  CoffeeTitle,
  CoffeeSubTitle,
  PriceAndAmountContainer,
  ButtonContainer,
} from './styles'

interface CoffeeProps {
  id: number
  url: string
  details: string
  price: string
  title: string
  subTitle: string
}

export function CardCoffee({
  id,
  url,
  details,
  price,
  title,
  subTitle,
}: CoffeeProps) {
  const { addProduct } = useCart()
  const [amount, setAmount] = useState(0)

  function handleIncrementAmount() {
    setAmount(amount + 1)
  }

  function handleDecrementAmount() {
    if (amount > 0) setAmount(amount - 1)
  }

  async function handleAddProductToCart(productId: number) {
    if (amount === 0) {
      toast.error('Deve ser informado a quantidade', {
        theme: 'colored',
      })
      return
    }
    await addProduct(productId, amount)

    setAmount(0)
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
        <button onClick={() => handleAddProductToCart(id)}>
          <ShoppingCart size={24} weight="fill" color="#fff" />
        </button>
      </PriceAndAmountContainer>
    </CardContainer>
  )
}
