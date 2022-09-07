import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin-left: 2rem;
  width: 27rem;
  height: auto;
  background: ${(props) => props.theme.background};
  border-radius: 6px 44px;
`
export const Divider = styled.hr`
  width: 23rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin-top: -20px;
`

export const TotalDetails = styled.div`
  padding: 2.5rem;
  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    margin-top: 1.5rem;
    width: 100%;
    height: 2.875rem;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    border: 0;

    cursor: pointer;
    text-transform: uppercase;
  }
`

export const TextTotalItem = styled.text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
  margin-bottom: 0.85rem;
`

export const TotalText = styled.text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
`
