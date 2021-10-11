import React, { ReactElement } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

const StyledDiv = styled.div`
  max-width: 296px;

  :not(:last-child) {
    margin-bottom: 24px;
  }

  & .filter__label {
    margin: 0;
    font-size: 13px;
    margin-bottom: 12px;
    line-height: 18px;
    font-style: normal;
    color: var(--grayscale500);
  }

  & .filter__content {
    background-color: white;
    padding: 24px;
  }
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  labelProps?: React.HtmlHTMLAttributes<HTMLParagraphElement>
  containerProps?: IStyledDiv
  label?: string
}

function FilterContainer(props: Props): ReactElement {
  const { label, labelProps, containerProps, ...rest } = props
  if (!label && !rest?.children) return <></>

  return (
    <StyledDiv {...containerProps}>
      {label && (
        <p {...labelProps} className={classnames('filter__label', labelProps?.className)}>
          {label}
        </p>
      )}
      {rest?.children && (
        <div {...rest} className={classnames('filter__content', rest?.className)} />
      )}
    </StyledDiv>
  )
}

export default FilterContainer
