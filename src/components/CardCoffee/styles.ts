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

  button:last-child {
    border: 0;
    cursor: pointer;
  }

  button:last-child:hover {
    border-color: ${(props) => props.theme['purple-light']};

    svg {
      border: 6px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;

  input {
    text-align: center;
    width: 1.5rem;
    height: 2.375rem;
  }

  button {
    width: 2rem;
    font-size: 25px;
    text-align: center;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  button,
  input {
    border: 0;
    background: ${(props) => props.theme['base-button']};
  }
  input:focus {
    outline: none;
  }

  button:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  button:hover {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['base-button']};
  }

  button:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
