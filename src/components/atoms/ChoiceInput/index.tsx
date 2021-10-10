import React from 'react'
import classnames from 'classnames'
import Container from './Container'

export interface IBaseSelectableInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  containerProps?: typeof Container
  labelProps?: React.HtmlHTMLAttributes<HTMLLabelElement>
  overlayProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelTextProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelText?: string
  type: 'checkbox' | 'radio'
  componentSize?: string
  componentName?: string
}

const BaseSelectableInput = React.forwardRef<HTMLInputElement, IBaseSelectableInput>(
  (props, ref: React.LegacyRef<HTMLInputElement> | undefined) => {
    const {
      componentName = 'choice-input',
      componentSize = '22px',
      containerProps,
      labelProps,
      overlayProps,
      labelTextProps,
      labelText,
      disabled,
      type,
      id,
      ...rest
    } = props

    return (
      <Container
        {...containerProps}
        type={type}
        disabled={disabled}
        size={componentSize}
        componentName={componentName}>
        <label
          {...labelProps}
          htmlFor={id}
          className={classnames(`${componentName}__container`, labelProps?.className)}>
          <input
            {...rest}
            ref={ref}
            id={id}
            type={type}
            disabled={disabled}
            className={classnames(`${componentName}__input visually-hidden`, rest?.className)}
          />
          <span
            {...overlayProps}
            className={classnames(`${componentName}__overlay`, overlayProps?.className)}
          />
          {labelText && (
            <span
              {...labelTextProps}
              className={classnames(`${componentName}__label-text`, labelTextProps?.className)}>
              {labelText}
            </span>
          )}
        </label>
      </Container>
    )
  },
)

export default BaseSelectableInput
