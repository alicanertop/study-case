import { BaseFilterParams } from './BaseFilterParams'

export type IManufacturer = {
  id: string
  slug: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  account: number
  contact: string
  itemCount: number
}

export type ManufacturerFilterParams = BaseFilterParams & {
  name_like?: string
}
