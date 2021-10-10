import { BaseFilterParams } from './BaseFilterParams'

export type ITagType = {
  value: string
  name: string
  itemCount: number
}

export type ITagFilterParams = BaseFilterParams & {
  name_like?: string
}
