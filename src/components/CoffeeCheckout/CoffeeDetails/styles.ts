import styled from 'styled-components'

export const CoffeeDetailsContainer = styled.div`
  text:last-child {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }

  padding: 2.5rem;
  align-items: center;
  justify-content: space-between;
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
  }

  div {
    text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
    }

    div {
      margin-top: 8px;
      display: flex;
      div {
        input {
          text-align: center;
          width: 1.5rem;
          height: 1.9rem;
        }

        button {
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
      }
    }
    input {
      width: 32px;
    }
  }
`

export const ButtonRemove = styled.button`
  margin-top: 8px;
  margin-left: 8px;
  width: 5.688rem;
  height: 2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  border: 0;
  border-radius: 8px;

  cursor: pointer;
`
