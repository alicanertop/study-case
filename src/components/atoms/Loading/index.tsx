import React, { ReactElement } from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import Spinner from '../../../assets/img/spinner.svg'

const StyledDiv = styled.div.attrs((props: { isFixed: boolean }) => ({ ...props }))`
  width: 100%;
  display: flex;
  top: ${({ isFixed }) => (isFixed ? '0' : 'unset')};
  left: ${({ isFixed }) => (isFixed ? '0' : 'unset')};
  z-index: ${({ isFixed }) => (isFixed ? '9' : 'unset')};
  height: ${({ isFixed }) => (isFixed ? '100vh' : 'unset')};
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'unset')};
  background-color: ${({ isFixed }) => (isFixed ? 'rgba(255,255,255,.7)' : 'unset')};

  .loading {
    width: ${({ isFixed }) => (isFixed ? '15vw' : '100px')};
    height: ${({ isFixed }) => (isFixed ? '15vw' : '100px')};
    margin: auto;
  }
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  containerProps?: IStyledDiv
  isFixed?: boolean
}

function ProductList(props: Props): ReactElement {
  const { containerProps, isFixed } = props

  return (
    <StyledDiv {...containerProps} isFixed={isFixed} className={classnames('loading__container')}>
      <img className="loading" src={Spinner} />
    </StyledDiv>
  )
}

export default ProductList
