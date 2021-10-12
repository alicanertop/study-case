import React from 'react'

import { itemReducer, manufacturerReducer, useAppDispatch, useAppSelector } from '../../../redux'
import { SeachableFilter, SeachableFilterItem } from '../../../components/molecues'

function Home() {
  const dispatch = useAppDispatch()
  const { manufacturer, status } = useAppSelector(({ company }) => company)

  const [brandName, setBrandName] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState<SeachableFilterItem[]>([])

  React.useEffect(() => {
    dispatch(
      itemReducer.setFilterParams({
        manufacturer: selectedItem.length ? selectedItem.map((i) => i.value).join(',') : undefined,
        _page: 1,
      }),
    )
  }, [selectedItem])

  React.useEffect(() => {
    dispatch(manufacturerReducer.getCompanies({ name_like: brandName ? brandName : undefined }))
  }, [brandName])

  return (
    <SeachableFilter
      label="Brands"
      type="radio"
      disableShowCount
      placeholder="Search in Brands"
      onSearch={(e) => setBrandName(e)}
      onSelect={(e) => setSelectedItem(e)}
      status={status}
      data={
        manufacturer.map((man) => ({
          name: man.name,
          value: man.slug,
          itemCount: man.itemCount,
        })) as SeachableFilterItem[]
      }
    />
  )
}

export default Home
