import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  margin-top: 4rem;
  > label {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding: 0;
`
