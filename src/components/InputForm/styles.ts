import styled from 'styled-components'

interface Props {
  width: string
}

export const Container = styled.input<Props>`
  width: ${(props) => props.width};
  background: #eeeded;
  /* Base/Button */

  border: 1px solid #e6e5e5;
  border-radius: 4px;
`
