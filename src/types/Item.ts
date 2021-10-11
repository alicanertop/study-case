import { BaseFilterParams } from './BaseFilterParams'

export type IItem = {
  id: string
  tags: string[]
  price: number
  name: string
  description: string
  slug: string
  added: number
  manufacturer: string
  itemType: string
}

export type ItemFilterParams = BaseFilterParams & {
  tags_like?: string
  itemType?: string
  manufacturer?: string
}
