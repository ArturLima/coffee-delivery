import { MapPinLine } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { InputForm } from '../InputForm'
import {
  Form,
  FormContainer,
  TitleForm,
  NumberAndComplementContainer,
  DisctrictAndCityContainer,
} from './styles'

export function FormCheckout() {
  return (
    <FormContainer>
      <TitleForm>
        <MapPinLine size={24} color={defaultTheme['yellow-dark']} />
        <div>
          <label>Endereço de Entrega</label>
          <br />
          <label>Informe o endereço onde deseja receber seu pedido </label>
        </div>
      </TitleForm>
      <Form>
        <input placeholder="CEP" style={{ width: '12.5rem' }} />
        <input placeholder="Rua" />
        <NumberAndComplementContainer>
          <input placeholder="Número" style={{ width: '12.5rem' }} />
          <input placeholder="Complemento" style={{ width: '21.75rem' }} />
        </NumberAndComplementContainer>
        <DisctrictAndCityContainer>
          <input placeholder="Bairro" style={{ width: '12.5rem' }} />
          <input placeholder="Cidade" style={{ width: '17.25rem' }} />
          <input placeholder="UF" style={{ width: '3.75rem' }} />
        </DisctrictAndCityContainer>

        <InputForm width="200px" />
      </Form>
    </FormContainer>
  )
}
