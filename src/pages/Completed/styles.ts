import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.5rem;
  display: flex;
  img {
    margin-left: 10rem;
    margin-top: 5rem;
  }
`

export const AddressDetails = styled.div`
  width: 32.875rem;
  height: 18rem;
  margin-top: 2.5rem;
  box-sizing: border-box;
  border: 1px solid #8047f8;
  border-radius: 6px 36px;
  padding: 40px;
  div:first-child {
    margin-top: 0;
  }
`

export const TextConfirmationOrder = styled.text`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;

  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitleConfirmationOrder = styled.text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
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
  margin-top: 2rem;
`
