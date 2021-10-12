import React from 'react'
import styled from 'styled-components'

const ButtonStyle = {
  primary: {
    'background-color': 'var(--blue300)',
    color: 'white',
    'hover:color': 'white300',
    'disabled:background-color': 'var(--gray500)',
    'disabled:color': 'white',
  },
  ghost: {
    'background-color': 'transparent',
    color: 'unset',
    'hover:color': 'var(--blue300)',
    'disabled:background-color': 'var(--gray500)',
    'disabled:color': 'white',
  },
  secondary: {
    'background-color': 'var(--purple200)',
    color: 'var(--blue300)',
    'hover:color': 'var(--blue500)',
    'disabled:background-color': 'var(--gray400)',
    'disabled:color': 'var(--blue300)',
  },
}

type IButtonProps = { variant?: 'primary' | 'secondary' | 'ghost' }
const Button = styled.button.attrs(({ variant = 'primary', ...props }: IButtonProps) => ({
  ...props,
  variant,
}))`
  width: 100%;
  height: 30px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  line-height: 18px;
  padding: 6px 16px;
  text-align: center;
  border-radius: 2px;
  color: ${({ variant }) => ButtonStyle[variant]['color']};
  background-color: ${({ variant }) => ButtonStyle[variant]['background-color']};

  :disabled {
    color: ${({ variant }) => ButtonStyle[variant]['disabled:color']};
    background-color: ${({ variant }) => ButtonStyle[variant]['disabled:background-color']};
  }
  :hover {
    color: ${({ variant }) => ButtonStyle[variant]['hover:color']};
  }
`
export default Button
