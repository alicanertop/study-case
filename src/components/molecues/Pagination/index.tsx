import React from 'react'
import classnames from 'classnames'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { IPagination, PaginationParams } from '../../../types'
import { Button } from '../../../components/atoms'
import { generatePaginatorPageList } from './helpers'

import './pagination.scss'

interface Props extends IPagination, PaginationParams {
  onChange: (params: PaginationParams) => void
}

function Pagination({ onChange, _page, first, last, _limit, next, prev }: Props) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isBelow768, setIsBelow768] = React.useState(false)

  const handleChange = (params: PaginationParams, isDisabled: boolean = false) => {
    if (isDisabled) return

    onChange?.(params)
  }

  const pageArray = React.useMemo(
    () => generatePaginatorPageList({ size: isBelow768 ? 1 : 4, currentPage, first, last }),
    [currentPage, isBelow768],
  )

  React.useEffect(() => {
    if (typeof _page !== 'undefined') setCurrentPage(Number(_page))
  }, [_page])

  React.useEffect(() => {
    const handler = (e: MediaQueryListEvent) => {
      const { matches = false } = e
      setIsBelow768(matches)
    }

    setIsBelow768(window.innerWidth < 768)
    window.matchMedia('(max-width: 768px)').addEventListener('change', handler)
  }, [])

  return (
    <div className="pagination">
      {prev && (
        <div className="pagination-left-button__container" onClick={() => handleChange?.(prev)}>
          <BsArrowLeftShort className="pagination-left-icon" />
          <Button
            variant="ghost"
            children="Prev"
            style={{ width: 30, padding: 0 }}
            className="pagination-left-button"
          />
        </div>
      )}

      {pageArray.map((p) => (
        <span
          className={classnames('pagination-item', { active: currentPage === Number(p.page) })}
          onClick={() => handleChange?.({ _limit, _page: Number(p.page) }, p.disabled)}>
          {p.page}
        </span>
      ))}

      {next && (
        <div className="pagination-right-button__container" onClick={() => handleChange?.(next)}>
          <Button
            variant="ghost"
            children="Next"
            style={{ width: 30, padding: 0 }}
            className="pagination-right-button"
          />
          <BsArrowRightShort className="pagination-right-icon" />
        </div>
      )}
    </div>
  )
}
export default Pagination
