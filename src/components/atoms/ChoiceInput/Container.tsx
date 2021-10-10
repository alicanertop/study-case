import styled from 'styled-components'
import { svg } from '../../../constants/base64'

type IContainer = {
  componentName: string
  type: 'radio' | 'checkbox'
  size: string
  disabled: boolean
}
const ChoiceInputStyle = {
  checkbox: {
    'margin-right': '8px',
    'border-radius': '2px',
    border: 'unset',
    'box-shadow': '0px 1px 7px var(--purple500)',
    'checked:background-color': 'var(--blue300)',
    'disabled:background-color': 'var(--grayscale500)',
    'disabled:border-color': '',
    'disabled:color': 'var(--grayscale500)',
  },
  radio: {
    'margin-right': '12px',
    'border-radius': '17.5px',
    border: '2px solid var(--blue300)',
    'box-shadow': 'unset',
    'checked:background-color': 'unset',
    'disabled:background-color': 'var(--gray200)',
    'disabled:border-color': 'var(--grayscale500)',
    'disabled:color': 'var(--grayscale500)',
  },
}
const Container = styled.div.attrs((props: IContainer) => ({ ...props }))`
  width: 100%;

  :not(:last-child) {
    margin-bottom: 18px;
  }

  & .${(props) => `${props.componentName}__container`} {
    display: flex;
    align-items: center;
    & .visually-hidden {
      display: none;
      pointer-events: none;
    }
  }

  & .${(props) => `${props.componentName}__label-text`} {
    cursor: pointer;
    font-size: 14px;
    user-select: none;
    line-height: 18px;
    font-style: normal;
    font-weight: normal;
    letter-spacing: 0.16px;
  }

  & .${(props) => `${props.componentName}__overlay`} {
    background-color: #fff;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin-right: ${({ type }) => ChoiceInputStyle[type]['margin-right']};
    border-radius: ${({ type }) => ChoiceInputStyle[type]['border-radius']};
    border: ${({ type }) => ChoiceInputStyle[type]['border']};
    box-shadow: ${({ type }) => ChoiceInputStyle[type]['box-shadow']};
  }

  & .${(props) => `${props.componentName}__input:checked + .${props.componentName}__overlay`} {
    background: ${({ type }) => svg[type]} center no-repeat;
    background-color: ${({ type }) => ChoiceInputStyle[type]['checked:background-color']};
  }

  &
    .${(props) =>
      `${props.componentName}__input:disabled:checked + .${props.componentName}__overlay`} {
    background-color: ${({ type }) => ChoiceInputStyle[type]['disabled:background-color']};
  }

  & .${(props) => `${props.componentName}__input:disabled + .${props.componentName}__overlay`} {
    background-color: ${({ type }) => ChoiceInputStyle[type]['disabled:background-color']};
    border-color: ${({ type }) => ChoiceInputStyle[type]['disabled:border-color']};
  }

  & .${(props) => `${props.componentName}__label-text`} {
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ disabled, type }) =>
      disabled ? ChoiceInputStyle[type]['disabled:color'] : 'unset'};
  }
`
export default Container
