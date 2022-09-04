import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin-left: 2rem;
  width: 27rem;
  height: 31.125rem;
  background: ${(props) => props.theme.background};
`
export const Divider = styled.hr`
  width: 23rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  margin-top: -20px;
`
