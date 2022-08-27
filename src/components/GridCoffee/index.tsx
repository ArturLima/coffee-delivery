import { useState } from 'react'
import { items } from '../../services/data'
import { CardCoffee } from '../CardCoffee'
import { GridContainer, CoffeeContainer } from './styles'

export function GridCoffee() {
  const [data, setData] = useState(items)
  return (
    <CoffeeContainer>
      <label>Nossos cafés</label>
      <GridContainer>
        {data.map((item) => {
          return (
            <CardCoffee
              key={item.id}
              id={item.id}
              url={item.url}
              title={item.title}
              subTitle={item.subTitle}
              details={item.details}
              price={item.price}
            />
          )
        })}
      </GridContainer>
    </CoffeeContainer>
  )
}
