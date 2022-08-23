import styled from 'styled-components'

export const CardContainer = styled.li`
  margin-top: 3.375rem;
  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px 6px 36px;
  padding: 20px;
  background: ${(props) => props.theme['base-card']};
  justify-content: space-between;

  align-items: center;
  img {
    margin-top: -38px;
    width: 120px;
    height: 120px;
  }
`

export const CoffeeDetails = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  border: 5px solid ${(props) => props.theme['yellow-light']};
  border-radius: 8px;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`

export const CoffeeTitle = styled.label`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 20px;
  font-style: normal;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeSubTitle = styled.label`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;

  color: ${(props) => props.theme['base-label']};
`

export const PriceAndAmountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      color: ${(props) => props.theme['base-text']};
    }
  }

  svg {
    border: 6px solid ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 8px;
  }

  input {
    width: 72px;
    height: 38px;
  }
`
