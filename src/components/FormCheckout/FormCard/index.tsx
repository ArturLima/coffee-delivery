import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { defaultTheme } from '../../../styles/themes/default'
import { Form, FormContainer, TitleForm } from './styles'

export function FormCard() {
  return (
    <FormContainer>
      <TitleForm>
        <CurrencyDollar size={24} color={defaultTheme.purple} />
        <div>
          <label>Pagamento</label>
          <br />
          <label>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar{' '}
          </label>
        </div>
      </TitleForm>
      <Form>
        <button>
          <CreditCard size={16} color={defaultTheme.purple} />
          &nbsp;
          {'  '} Cartão de crédito
        </button>
        <button type="button">
          <Bank size={16} color={defaultTheme.purple} />
          &nbsp;cartão de débito
        </button>
        <button type="button">
          <Money size={16} color={defaultTheme.purple} />
          &nbsp;
          {'  '}
          <span>dinheiro</span>
        </button>
      </Form>
    </FormContainer>
  )
}
