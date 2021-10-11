import React from 'react'

import { Button } from '../../../components/atoms'
import { IPagination, PaginationParams } from '../../../types'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { CgChevronDoubleLeft, CgChevronDoubleRight } from 'react-icons/cg'

import './pagination.scss'

interface Props extends IPagination, PaginationParams {
  onChange: (params: PaginationParams) => void
}

function Pagination({
  onChange,
  _page,
  first,
  last,
  _limit,
  next,
  prev,
  lastPage,
  totalCount,
}: Props) {
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    if (typeof _page !== 'undefined') setCurrentPage(_page)
  }, [_page])

  console.log(currentPage, _limit, lastPage, totalCount)

  return (
    <div className="pagination">
      <div
        className="pagination-left-button__container"
        onClick={() => (prev ? onChange?.(prev) : undefined)}>
        <BsArrowLeftShort className="pagination-left-icon" />
        <Button
          scheme="ghost"
          children="Prev"
          style={{ width: 30, padding: 0 }}
          className="pagination-left-button"
        />
      </div>

      {first && (
        <CgChevronDoubleLeft className="pagination-left-icon" onClick={() => onChange?.(first)} />
      )}

      {currentPage}

      {last && (
        <CgChevronDoubleRight className="pagination-right-icon" onClick={() => onChange?.(last)} />
      )}

      <div
        className="pagination-right-button__container"
        onClick={() => (next ? onChange?.(next) : undefined)}>
        <Button
          scheme="ghost"
          children="Next"
          style={{ width: 30, padding: 0 }}
          className="pagination-right-button"
        />
        <BsArrowRightShort className="pagination-right-icon" />
      </div>
    </div>
  )
}
export default Pagination
