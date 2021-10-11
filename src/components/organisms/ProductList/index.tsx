import React, { ReactElement } from 'react'
import classnames from 'classnames'
import styled from 'styled-components'

import { basketReducer, itemReducer, useAppDispatch, useAppSelector } from '../../../redux'
import { Loading } from '../../../components/atoms'
import { Pagination } from '../../../components/molecues'
import ItemTypeFilter from '../ItemTypeFilter'
import ProductItem from './ProductItem'
import { IItem, PaginationParams } from '../../../types'

const StyledDiv = styled.div`
  max-width: 608px;

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
    flex-wrap: wrap;
    margin-bottom: 32px;
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
  const { filterParams, pagination, itemList, status } = useAppSelector(({ item }) => item)

  const handleAddCart = (item: IItem) => {
    dispatch(basketReducer.basketSlice.actions.add(item))
  }

  const handlePagination = (params: PaginationParams) => {
    dispatch(itemReducer.setFilterParams({ ...params }))
  }

  React.useEffect(() => {
    dispatch(itemReducer.getItemWithParams({ ...filterParams }))
  }, [filterParams])

  return (
    <StyledDiv {...containerProps}>
      {status == 'loading' && <Loading isFixed />}

      <p {...labelProps} className={classnames('product__label', labelProps?.className)}>
        Product
      </p>
      <ItemTypeFilter />

      <div {...rest} className={classnames('product__content', rest?.className)}>
        {itemList.map((item) => (
          <ProductItem product={item} onAddClick={handleAddCart} />
        ))}
      </div>
      <Pagination
        {...pagination}
        _page={filterParams._page}
        onChange={handlePagination}
        _limit={filterParams._limit}
      />
    </StyledDiv>
  )
}

export default ProductList
