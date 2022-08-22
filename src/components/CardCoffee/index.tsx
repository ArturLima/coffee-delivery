import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './styles'

export function CardCoffee() {
  return (
    <CardContainer>
      <label>Tradicional</label>
      <label>Expresso Tradicional</label>
      <label>O tradicional café feito com água quente e grãos moídos </label>
      <div>
        <label>R$ 9,90</label>
        <input type="number" placeholder="1"></input>
        <ShoppingCart size={24} weight="fill" />
      </div>
    </CardContainer>
  )
}
