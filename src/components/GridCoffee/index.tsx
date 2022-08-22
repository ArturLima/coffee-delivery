import { CardCoffee } from '../CardCoffee'
import { GridContainer, CoffeContainer } from './styles'

export function GridCoffee() {
  return (
    <CoffeContainer>
      <label>Nossos cafés</label>
      <GridContainer>
        <CardCoffee />
        <CardCoffee />
      </GridContainer>
    </CoffeContainer>
  )
}
