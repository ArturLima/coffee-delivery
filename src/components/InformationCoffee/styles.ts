import styled from 'styled-components'

export const InfoDeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.875rem;
`

export const DescriptionCoffee = styled.div`
  width: 36.75rem;
`

export const TextHeader = styled.label`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
`

export const TextSubscription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  font-stretch: 100;
`
export const DeliveryInfoContainer = styled.div`
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    margin-bottom: 1.563rem;
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-dark',
  yellowLight: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface StatusProps {
  backgroundIconColor: keyof typeof STATUS_COLORS
}

export const DescriptionDeliveryInfo = styled.div<StatusProps>`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  label {
    color: ${(props) => props.theme['base-text']};
    margin-left: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  svg {
    border: 6px solid
      ${(props) => props.theme[STATUS_COLORS[props.backgroundIconColor]]};
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.backgroundIconColor]]};
    border-radius: 20px;
    margin-bottom: -6px;
  }
`
