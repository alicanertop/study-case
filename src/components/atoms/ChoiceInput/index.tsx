import React from 'react'
import classnames from 'classnames'

import './choice-input.scss'

export interface IBaseSelectableInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  containerProps?: React.HtmlHTMLAttributes<HTMLLabelElement>
  overlayProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelTextProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelText?: string
  type: 'checkbox' | 'radio'
}

const BaseSelectableInput = React.forwardRef<HTMLInputElement, IBaseSelectableInput>(
  (
    { containerProps, overlayProps, labelTextProps, labelText, type, id, ...rest },
    ref: React.LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <label
        {...containerProps}
        htmlFor={id}
        className={classnames(`choice-input__container ${type}`, containerProps?.className)}>
        <input
          {...rest}
          ref={ref}
          id={id}
          type={type}
          className={classnames(`choice-input__input visually-hidden ${type}`, rest?.className)}
        />
        <span
          {...overlayProps}
          className={classnames(`choice-input__overlay ${type}`, overlayProps?.className)}
        />
        {labelText && (
          <span
            {...labelTextProps}
            className={classnames(`choice-input__label-text ${type}`, labelTextProps?.className)}>
            {labelText}
          </span>
        )}
      </label>
    )
  },
)

export default BaseSelectableInput
