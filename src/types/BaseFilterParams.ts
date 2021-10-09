import { PaginationParams } from './Pagination'

export type BaseFilterParams = PaginationParams & {
  _sort?: string
  _order?: 'asc' | 'desc'
}
