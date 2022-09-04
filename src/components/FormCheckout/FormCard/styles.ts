import { darken, transparentize } from 'polished'
import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 0.75rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.625rem;
`

export const TitleForm = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Roboto';

  label {
    margin-left: 12px;
  }

  label:first-child {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  label:last-child {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Form = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'purpleLight' | 'default'
}

const colors = {
  purpleLight: '#8047F8',
  default: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 11.167rem;
  height: 3.188rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;

  border: 0;

  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : props.theme['base-button']};

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`
