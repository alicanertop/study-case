import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { itemReducer, useAppDispatch, useAppSelector } from '../../../redux'
import { Button } from '../../../components/atoms'

const StyledDiv = styled.div`
  margin: 16px 0;
`
type IStyledDiv = typeof StyledDiv

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  containerProps?: IStyledDiv
}

const buttonArr = [
  { itemType: 'mug', name: 'Mug' },
  { itemType: 'shirt', name: 'Shirt' },
]

function ItemTypeFilter(props: Props): ReactElement {
  const { containerProps } = props

  const dispatch = useAppDispatch()
  const filterParams = useAppSelector(({ item }) => item.filterParams)

  const handleClick = (itemType: string) => dispatch(itemReducer.setFilterParams({ itemType }))

  return (
    <StyledDiv {...containerProps}>
      {buttonArr.map((butt, i) => (
        <Button
          children={butt.name}
          scheme={filterParams.itemType == butt.itemType ? 'primary' : 'secondary'}
          style={{ width: '60px', marginRight: i ? 0 : 8 }}
          onClick={() => handleClick(butt.itemType)}
        />
      ))}
    </StyledDiv>
  )
}

export default ItemTypeFilter
