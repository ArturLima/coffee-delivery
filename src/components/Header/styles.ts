import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`

export const BaseLabelHeader = styled.label`
  border-radius: 8px;
  margin-right: 1rem;
  border: 0;
  padding: 0.775rem;

  cursor: pointer;
`

export const CityLabel = styled(BaseLabelHeader)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.2px;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};

  svg {
    margin-bottom: -6px;
  }
`

export const CartLabel = styled(BaseLabelHeader)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 8px;

  a {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartContainer = styled.div``

export const Amount = styled.label`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-bottom: 40px;
  margin-left: 28px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};

  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 25px;

  padding: 4px 2px 0 2px;
`
