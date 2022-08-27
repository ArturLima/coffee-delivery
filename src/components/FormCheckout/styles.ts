import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 40rem;
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

export const Form = styled.form`
  display: grid;

  input {
    margin-top: 1rem;
    padding: 12px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;

    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto';
    color: ${(props) => props.theme['base-label']};
  }
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DisctrictAndCityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
