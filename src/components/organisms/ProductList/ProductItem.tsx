import React, { ReactElement } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

import { Button } from '../../../components/atoms'
import { IItem } from '../../../types'

const StyledDiv = styled.div`
  position: relative;
  max-width: 124px;
  min-height: 255px;
  margin: 20px 24px;

  & .product-item-image__container {
    width: 124px;
    height: 124px;
    background: var(--white050);
    border: 1.17666px solid var(--purple100);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 92px;
      height: 92px;
    }
  }

  p {
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
  }

  & .product-item-price__text {
    margin: 8px 0 0 0;
    font-family: Helvetica;
    font-weight: normal;
    color: var(--blue300);
  }
  & .product-item-name__text {
    margin: 0;
    font-family: Open Sans;
    font-weight: 600;

    color: var(--grayscale700);
  }
  & .product-item-button {
    position: absolute;
    bottom: 0;
  }
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IItem
  containerProps?: IStyledDiv
  onAddClick?: (product: IItem) => void
}

function ProductList(props: Props): ReactElement {
  const { containerProps, product, onAddClick } = props

  return (
    <StyledDiv {...containerProps}>
      <div className={classnames('product-item-image__container')}>
        <img src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
      </div>
      <p className={classnames('product-item-price__text')}>₺ {product?.price}</p>
      <p className={classnames('product-item-name__text')}>{product?.name}</p>
      <Button
        children="Add"
        className="product-item-button"
        onClick={() => onAddClick?.(product)}
      />
    </StyledDiv>
  )
}

export default ProductList
