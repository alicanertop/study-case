import styled from 'styled-components'

const ButtonStyle = {
  primary: {
    'background-color': 'var(--blue300)',
    color: 'white',
    'disabled:background-color': 'var(--gray500)',
    'disabled:color': 'white',
  },
  secondary: {
    'background-color': 'var(--purple200)',
    color: 'var(--blue300)',
    'disabled:background-color': 'var(--gray400)',
    'disabled:color': 'var(--blue300)',
  },
}

type IButtonProps = { scheme?: 'primary' | 'secondary' }
const Button = styled.button.attrs(({ scheme = 'primary', ...props }: IButtonProps) => ({
  ...props,
  scheme,
}))`
  width: 100%;
  height: 30px;
  border: none;
  font-size: 13px;
  line-height: 18px;
  padding: 6px 16px;
  text-align: center;
  border-radius: 2px;
  color: ${({ scheme }) => ButtonStyle[scheme]['color']};
  background-color: ${({ scheme }) => ButtonStyle[scheme]['background-color']};

  :disabled {
    color: ${({ scheme }) => ButtonStyle[scheme]['disabled:color']};
    background-color: ${({ scheme }) => ButtonStyle[scheme]['disabled:background-color']};
  }
`
export default Button
