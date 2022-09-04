import { MapPinLine } from 'phosphor-react'
import { useState } from 'react'
import { defaultTheme } from '../../styles/themes/default'
import { cepMask } from '../../util/util'
import { FormCard } from './FormCard'
import {
  Form,
  FormContainer,
  TitleForm,
  NumberAndComplementContainer,
  DisctrictAndCityContainer,
  Container,
} from './styles'

export function FormCheckout() {
  const [code, setCode] = useState('')
  const [street, setStreet] = useState('')
  const [numberHouse, setNumberHouse] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  return (
    <Container>
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
          <input
            placeholder="CEP"
            style={{ width: '12.5rem' }}
            value={code}
            onChange={(e) => setCode(cepMask(e.target.value))}
          />
          <input
            placeholder="Rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <NumberAndComplementContainer>
            <input
              placeholder="Número"
              style={{ width: '12.5rem' }}
              value={numberHouse}
              onChange={(e) => setNumberHouse(e.target.value)}
            />
            <input
              placeholder="Complemento"
              style={{ width: '21.75rem' }}
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </NumberAndComplementContainer>
          <DisctrictAndCityContainer>
            <input
              placeholder="Bairro"
              style={{ width: '12.5rem' }}
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
            />
            <input
              placeholder="Cidade"
              style={{ width: '17.25rem' }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: '3.75rem' }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </DisctrictAndCityContainer>
        </Form>
      </FormContainer>
      <FormCard />
    </Container>
  )
}
