import React from 'react'
import styled from 'styled-components'

import { ChoiceInput, IChoiceInput, Input, Loading } from '../../atoms'
import { FilterContainer } from '../../../containers'
import { Status } from '../../../types'

const Content = styled.div`
  margin-left: -10px;
  padding-left: 10px;
  margin-top: -10px;
  padding-top: 10px;
  min-height: 142px;
  max-height: 142px;
  overflow: auto;
  z-index: 0;

  .not-found {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    font-family: Inter;
  }
`

export type SeachableFilterItem = { name: string; value: ''; itemCount?: number }

type SeachableFilterProps = {
  //For loading purpose
  status?: Status
  label?: string
  placeholder?: string
  type?: IChoiceInput['type']
  disableShowCount?: boolean
  data?: SeachableFilterItem[]
  onSearch?: (str: string) => void
  onSelect?: (selectArr: SeachableFilterItem[]) => void
}

function SeachableFilter({
  label,
  onSearch,
  onSelect,
  data = [],
  placeholder,
  type = 'checkbox',
  disableShowCount,
  status = Status.idle,
}: SeachableFilterProps): JSX.Element {
  const [selectedItemList, setSelectedItemList] = React.useState<SeachableFilterItem[]>([])

  const handleBrandNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onSearch?.(e.target.value)

  const handleChoiceInputChance = (
    e: React.ChangeEvent<HTMLInputElement>,
    item?: SeachableFilterItem,
  ) => {
    setSelectedItemList((prev) => {
      let temp = [...prev]
      if (item) {
        if (type == 'radio') {
          onSelect?.([item])
          return [item]
        }

        const index = temp.findIndex((d) => d.value === item.value)
        if (index > -1) temp.splice(index, 1)
        else temp.push(item)
      } else {
        temp = []
      }

      onSelect?.(temp)
      return temp
    })
  }

  const choiceInputNameGenerated = label?.split(' ').join('').toLowerCase()

  return (
    <FilterContainer label={label}>
      <Input placeholder={placeholder} onChange={handleBrandNameChange} />

      <Content>
        {status == 'loading' ? (
          <Loading />
        ) : data.length ? (
          <>
            {type == 'checkbox' && (
              <ChoiceInput
                type={type}
                labelText="All"
                name={choiceInputNameGenerated}
                checked={!Boolean(selectedItemList.length)}
                onChange={(e) => handleChoiceInputChance(e, undefined)}
              />
            )}
            {data.map((item) => (
              <ChoiceInput
                type={type}
                key={item.value}
                name={choiceInputNameGenerated}
                onChange={(e) => handleChoiceInputChance(e, item)}
                checked={selectedItemList.findIndex((i) => i.value == item.value) > -1}
                labelText={
                  item.itemCount && !disableShowCount
                    ? `${item.name} (${item.itemCount})`
                    : item.name
                }
              />
            ))}
          </>
        ) : (
          <p className="not-found">Not Found</p>
        )}
      </Content>
    </FilterContainer>
  )
}

export default SeachableFilter
