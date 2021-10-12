import React from 'react'

import { itemReducer, tagReducer, useAppDispatch, useAppSelector } from '../../../redux'
import { SeachableFilter, SeachableFilterItem } from '../../molecues'

function TagFilter() {
  const dispatch = useAppDispatch()
  const { status, tagList } = useAppSelector(({ tag }) => tag)

  const [tagName, setTagName] = React.useState('')
  const [selectedItem, setSelectedItem] = React.useState<SeachableFilterItem[]>([])

  React.useEffect(() => {
    dispatch(
      itemReducer.setFilterParams({
        _page: 1,
        tags_like: selectedItem.length ? selectedItem.map((i) => i.value).join(',') : undefined,
      }),
    )
  }, [selectedItem])

  React.useEffect(() => {
    dispatch(tagReducer.getTags({ name_like: tagName ? tagName : undefined }))
  }, [tagName])

  return (
    <SeachableFilter
      label="Tags"
      disableShowCount
      status={status}
      placeholder="Search in Tags"
      onSearch={(e) => setTagName(e)}
      onSelect={(e) => setSelectedItem(e)}
      data={tagList as SeachableFilterItem[]}
    />
  )
}

export default TagFilter
