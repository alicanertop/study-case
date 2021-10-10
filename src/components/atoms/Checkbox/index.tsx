import React from 'react'
import classnames from 'classnames'

import './checkbox.scss'

interface ICheckbox
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  containerProps?: React.HtmlHTMLAttributes<HTMLLabelElement>
  overlayProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelTextProps?: React.HtmlHTMLAttributes<HTMLSpanElement>
  labelText?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, ICheckbox>(
  (
    { containerProps, overlayProps, labelTextProps, labelText, id, ...rest },
    ref: React.LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <label
        {...containerProps}
        htmlFor={id}
        className={classnames('checkbox__container', containerProps?.className)}>
        <input
          {...rest}
          ref={ref}
          id={id}
          type="checkbox"
          className={classnames('checkbox__input visually-hidden', rest?.className)}
        />
        <span
          {...overlayProps}
          className={classnames('checkbox__overlay', overlayProps?.className)}
        />
        {labelText && (
          <span
            {...labelTextProps}
            className={classnames('checkbox__label-text', labelTextProps?.className)}>
            {labelText}
          </span>
        )}
      </label>
    )
  },
)

export default Checkbox
