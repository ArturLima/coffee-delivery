import { CardCoffee } from '../CardCoffee'
import { GridContainer, CoffeeContainer } from './styles'
import coffee1 from '../../assets/coffee-1.svg'
import coffee2 from '../../assets/coffee-2.svg'
import coffee3 from '../../assets/coffee-3.svg'

export function GridCoffee() {
  return (
    <CoffeeContainer>
      <label>Nossos cafés</label>
      <GridContainer>
        <CardCoffee
          url={coffee1}
          details="Tradicional"
          title="Expresso Tradicional"
          price="9,90"
          subTitle="O tradicional café feito com água quente e grãos moídos"
        />
        <CardCoffee
          url={coffee2}
          details="Tradicional"
          title="Expresso Americano"
          price="12,90"
          subTitle="Expresso diluído, menos intenso que o tradicional"
        />
        <CardCoffee
          url={coffee3}
          details="Tradicional"
          title="Mocaccino"
          price="2,90"
          subTitle="Café expresso com calda de chocolate, pouco leite e espuma"
        />
        <CardCoffee
          url={coffee2}
          details="Tradicional"
          title="Capuccino"
          price="9,90"
          subTitle="Bebida com canela feita de doses iguais de café, leite e espuma"
        />
        <CardCoffee
          url={coffee1}
          details="Tradicional"
          title="Latte"
          price="20,90"
          subTitle="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        />
      </GridContainer>
    </CoffeeContainer>
  )
}
