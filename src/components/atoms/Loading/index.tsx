import React, { ReactElement } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import Spinner from '../../../assets/img/spinner.svg'

const StyledDiv = styled.div`
  width: 100%;
  display: flex;

  .loading {
    width: 100px;
    height: 100px;
    margin: auto;
  }
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  containerProps?: IStyledDiv
}

function ProductList(props: Props): ReactElement {
  const { containerProps } = props

  return (
    <StyledDiv {...containerProps} className={classnames('loading__container')}>
      <img className="loading" src={Spinner} />
    </StyledDiv>
  )
}

export default ProductList
