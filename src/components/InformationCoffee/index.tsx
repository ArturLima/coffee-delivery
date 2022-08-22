import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImage from '../../assets/coffee-image.svg'
import { defaultTheme } from '../../styles/themes/default'
import {
  DeliveryInfoContainer,
  DescriptionCoffee,
  InfoDeliveryContainer,
  TextHeader,
  TextSubscription,
  DescriptionDeliveryInfo,
} from './styles'

export function InformationCoffee() {
  return (
    <InfoDeliveryContainer>
      <DescriptionCoffee>
        <TextHeader>
          Encontre o café perfeito para qualquer hora do dia
        </TextHeader>

        <TextSubscription>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </TextSubscription>

        <DeliveryInfoContainer>
          <div>
            <DescriptionDeliveryInfo backgroundIconColor="yellow">
              <ShoppingCart
                size={18}
                weight="fill"
                color={defaultTheme.background}
              />
              <label>Compra simples e segura</label>
            </DescriptionDeliveryInfo>

            <DescriptionDeliveryInfo backgroundIconColor="baseText">
              <Package
                size={18}
                weight="fill"
                color={defaultTheme.background}
              />
              <label>Embalagem mantém o café intacto</label>
            </DescriptionDeliveryInfo>
          </div>

          <div>
            <DescriptionDeliveryInfo backgroundIconColor="yellowLight">
              <Timer size={18} weight="fill" color={defaultTheme.background} />
              <label>Entrega rápida e rastreada</label>
            </DescriptionDeliveryInfo>

            <DescriptionDeliveryInfo backgroundIconColor="purple">
              <Coffee size={18} weight="fill" color={defaultTheme.background} />
              <label>O café chega fresquinho até você</label>
            </DescriptionDeliveryInfo>
          </div>
        </DeliveryInfoContainer>
      </DescriptionCoffee>
      <img src={coffeeImage} alt="" />
    </InfoDeliveryContainer>
  )
}
