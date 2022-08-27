import { Container } from './styles'

interface Props {
  width: string
}

export function InputForm({ ...rest }: Props) {
  return <Container {...rest} />
}
