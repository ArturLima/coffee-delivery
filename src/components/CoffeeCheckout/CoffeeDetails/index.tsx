import { Trash } from 'phosphor-react'
import React, { useState } from 'react'
import { defaultTheme } from '../../../styles/themes/default'
import coffee1 from '../../../assets/coffee-1.svg'

import { ButtonRemove, CoffeeDetailsContainer } from './styles'

interface CoffeeProps {
  id: number
  title: string
  amount: number
  price: string
  image: string
}

export function CoffeeDetails({
  id,
  title,
  amount,
  price,
  image,
}: CoffeeProps) {
  return (
    <CoffeeDetailsContainer id={id}>
      <img src={image} />

      <div>
        <text>{title}</text>
        <div>
          <div>
            <button>-</button>
            <input type="number" placeholder="0" value={amount} />
            <button>+</button>
          </div>
          <ButtonRemove>
            <Trash size={12} color={defaultTheme.purple} />
            &nbsp;Remover
          </ButtonRemove>
        </div>
      </div>
      <text>{price}</text>
    </CoffeeDetailsContainer>
  )
}
