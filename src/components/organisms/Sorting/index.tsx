import { useAppDispatch, useAppSelector, itemReducer } from '../../../redux'

import { ISort } from '../../../types'
import { ChoiceInput } from '../../../components/atoms'
import { FilterContainer } from '../../../containers'

const inputArr: {
  value: string
  labelText: string
  sort: ISort
}[] = [
  {
    value: 'pricetohigh',
    labelText: 'Price low to high',
    sort: { _sort: 'price', _order: 'asc' },
  },
  {
    value: 'pricetolow',
    labelText: 'Price high to low',
    sort: { _sort: 'price', _order: 'desc' },
  },
  {
    value: 'newtohigh',
    labelText: 'New low to high',
    sort: { _sort: 'added', _order: 'asc' },
  },
  {
    value: 'newtolow',
    labelText: 'New high to low',
    sort: { _sort: 'added', _order: 'desc' },
  },
]

function Sorting() {
  const dispatch = useAppDispatch()
  const filterParams = useAppSelector(({ item }) => item.filterParams)

  const onChange = (_: React.ChangeEvent<HTMLInputElement>, sort: ISort) =>
    dispatch(itemReducer.setFilterParams({ ...filterParams, ...sort, _page: 1 }))

  return (
    <FilterContainer label="Sorting">
      {inputArr.map((_input) => (
        <ChoiceInput
          type="radio"
          name="sort"
          checked={
            filterParams._sort === _input.sort._sort && filterParams._order === _input.sort._order
          }
          onChange={(e) => onChange(e, _input.sort)}
          key={_input.value}
          id={_input.value}
          value={_input.value}
          labelText={_input.labelText}
        />
      ))}
    </FilterContainer>
  )
}

export default Sorting
