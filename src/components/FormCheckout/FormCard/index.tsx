import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { defaultTheme } from '../../../styles/themes/default'
import { Form, FormContainer, TitleForm, RadioBox } from './styles'

export function FormCard() {
  const [buttonsType, setButtonsType] = useState([
    { id: '1', type: false },
    { id: '2', type: false },
    { id: '3', type: false },
  ])

  function handleColorButton(idButton: string) {
    const newButtonsType = buttonsType.map((element) => {
      if (element.id === idButton) {
        return {
          id: element.id,
          type: true,
        }
      } else {
        return {
          id: element.id,
          type: false,
        }
      }
    })

    setButtonsType(newButtonsType)
  }

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
        <RadioBox
          id={buttonsType[0].id}
          type="button"
          onClick={() => {
            handleColorButton(buttonsType[0].id)
          }}
          isActive={buttonsType[0].type}
          activeColor="purpleLight"
        >
          <CreditCard size={16} color={defaultTheme.purple} />
          &nbsp;
          {'  '} Cartão de crédito
        </RadioBox>
        <RadioBox
          id={buttonsType[1].id}
          type="button"
          isActive={buttonsType[1].type}
          onClick={() => {
            handleColorButton(buttonsType[1].id)
          }}
          activeColor="purpleLight"
        >
          <Bank size={16} color={defaultTheme.purple} />
          &nbsp;cartão de débito
        </RadioBox>
        <RadioBox
          id={buttonsType[2].id}
          type="button"
          isActive={buttonsType[2].type}
          onClick={() => {
            handleColorButton(buttonsType[2].id)
          }}
          activeColor="purpleLight"
        >
          <Money size={16} color={defaultTheme.purple} />
          &nbsp;
          {'  '}
          <span>dinheiro</span>
        </RadioBox>
      </Form>
    </FormContainer>
  )
}
