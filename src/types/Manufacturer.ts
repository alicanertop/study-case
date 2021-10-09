import { BaseFilterParams } from './BaseFilterParams'

export type IManufacturer = {
  slug: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  account: number
  contact: string
}

export type ManufacturerFilterParams = BaseFilterParams & {
  name_like?: string
}
