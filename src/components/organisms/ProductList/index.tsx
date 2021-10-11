import React, { ReactElement } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

import { itemReducer, useAppDispatch, useAppSelector } from '../../../redux'
import ItemTypeFilter from '../ItemTypeFilter'
import ProductItem from './ProductItem'
import { IItem } from '../../../types'

const StyledDiv = styled.div`
  & .product__label {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: var(--black500);
  }

  & .product__content {
    display: flex;
    max-width: 688px;
    flex-wrap: wrap;
    background-color: white;
  }
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  labelProps?: React.HtmlHTMLAttributes<HTMLParagraphElement>
  containerProps?: IStyledDiv
  label?: string
}

function ProductList(props: Props): ReactElement {
  const { label, labelProps, containerProps, ...rest } = props

  const dispatch = useAppDispatch()
  const { filterParams, itemList } = useAppSelector(({ item }) => item)

  React.useEffect(() => {
    dispatch(itemReducer.getItemWithParams({ ...filterParams }))
  }, [filterParams])

  const handleAddCart = (product: IItem) => {
    console.log(product)
  }

  return (
    <StyledDiv {...containerProps}>
      <p {...labelProps} className={classnames('product__label', labelProps?.className)}>
        Product
      </p>
      <ItemTypeFilter />
      <div {...rest} className={classnames('product__content', rest?.className)}>
        {itemList.map((item) => (
          <ProductItem product={item} onAddClick={handleAddCart} />
        ))}
      </div>
    </StyledDiv>
  )
}

export default ProductList
