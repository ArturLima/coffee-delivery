import { MapPin, CurrencyDollar, Timer } from 'phosphor-react'
import React from 'react'
import illustration from '../../assets/illustration.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  AddressDetails,
  Container,
  TextConfirmationOrder,
  SubTitleConfirmationOrder,
  DescriptionDeliveryInfo,
} from './styles'

export function Completed() {
  return (
    <Container>
      <div>
        <TextConfirmationOrder>Uhu! Pedido confirmado</TextConfirmationOrder>
        <br />
        <SubTitleConfirmationOrder>
          Agora é só aguardar que logo o café chegará até você
        </SubTitleConfirmationOrder>
        <AddressDetails>
          <div>
            <DescriptionDeliveryInfo backgroundIconColor="purple">
              <MapPin size={18} weight="fill" color={defaultTheme.background} />
              <label>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Farrapos - Porto Alegre, RS
              </label>
            </DescriptionDeliveryInfo>
            <DescriptionDeliveryInfo backgroundIconColor="yellowLight">
              <Timer size={18} weight="fill" color={defaultTheme.background} />
              <label>
                Previsão de entrega <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>20 min - 30 min </strong>
              </label>
            </DescriptionDeliveryInfo>

            <DescriptionDeliveryInfo backgroundIconColor="yellow">
              <CurrencyDollar
                size={18}
                weight="fill"
                color={defaultTheme.background}
              />
              <label>
                Pagamento na entrega
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Cartão de Crédito</strong>
              </label>
            </DescriptionDeliveryInfo>
          </div>
        </AddressDetails>
      </div>
      <div>
        <img src={illustration} />
      </div>
    </Container>
  )
}
