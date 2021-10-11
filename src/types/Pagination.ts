export type ISort = {
  _sort?: string
  _order?: 'asc' | 'desc'
}

export type PaginationParams = {
  _limit?: number
  _page?: number
}

export type IPagination = {
  first?: PaginationParams
  prev?: PaginationParams
  next?: PaginationParams
  last?: PaginationParams
  totalCount?: number
}
