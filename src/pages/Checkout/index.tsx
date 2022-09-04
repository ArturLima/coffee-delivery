import { CoffeeCheckout } from '../../components/CoffeeCheckout'
import { FormCheckout } from '../../components/FormCheckout'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormCheckout />
      <CoffeeCheckout />
    </CheckoutContainer>
  )
}
