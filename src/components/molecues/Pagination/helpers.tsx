import { PaginationParams } from '../../../types'

export type IParams = {
  size?: number
  currentPage: number
  last?: PaginationParams
  first?: PaginationParams
  seperatorString?: string
}

export function generatePaginatorPageList(params: IParams) {
  const { size = 4, seperatorString = '..', currentPage = 0, first, last } = params || {}
  const pageArr = []

  const middleBreakthrough = Number((size / 2).toFixed(0)) + 1
  const numberFirstPage = Number(first?._page)
  const numberLastPage = Number(last?._page)

  let forSize = currentPage + size
  let forStartIndex = currentPage - size

  //this checking non zero page numbers
  if (forStartIndex <= 0) {
    forStartIndex = 1
    forSize += size
  }

  //this checking last page is in range
  if (last?._page && forSize > numberLastPage) forSize = numberLastPage

  //this mapping page numbers to array
  for (let i = forStartIndex; i < forSize; i++) pageArr.push(i)

  //this checking for first seperator place
  if (currentPage > size && currentPage - size >= middleBreakthrough)
    pageArr.unshift(seperatorString)

  //this checking if first page isnt in array it will add array
  if (first?._page && !pageArr.includes(numberFirstPage)) pageArr.unshift(first?._page)

  if (last?._page) {
    //this checking for last seperator place
    if (numberLastPage - currentPage > size) pageArr.push(seperatorString)
    //this checking if last page isnt in array it will add array
    if (!pageArr.includes(numberLastPage)) pageArr.push(last?._page)
  }

  //mapping seperator disabling for onChange method
  return pageArr.map((page) => {
    if (page === seperatorString) return { disabled: true, page }

    return { page }
  })
}
