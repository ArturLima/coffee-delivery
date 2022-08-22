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

export const TrashLabel = styled(BaseLabelHeader)`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 8px;
`
