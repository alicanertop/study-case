import { BaseFilterParams } from './BaseFilterParams'

export type IItemType = {
  id: string
  value: string
  name: string
  itemCount: number
}

export type ItemTypeFilterParams = BaseFilterParams & {
  name_like?: string
}
