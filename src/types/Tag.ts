import { BaseFilterParams } from './BaseFilterParams'

export type ITagType = {
  id: string
  value: string
  name: string
  itemCount: number
}

export type ITagFilterParams = BaseFilterParams & {
  name_like?: string
}
