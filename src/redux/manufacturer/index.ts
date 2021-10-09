import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Status, IManufacturer, ManufacturerFilterParams } from '../../types'

import httpService from '../../services/http-service'

export interface ManufacturerState {
  manufacturer: IManufacturer[]
  status: Status
}

export const initialState: ManufacturerState = { manufacturer: [], status: Status.idle }

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getCompanies = createAsyncThunk(
  'manufacturer/getAll',
  async (params?: ManufacturerFilterParams) => {
    const response = await httpService.get<IManufacturer[]>('/companies', { params })
    // The value we return becomes the `fulfilled` action payload
    return response
  },
)

export const manufacturerSlice = createSlice({
  name: 'manufacturer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.status = Status.loading
        state.manufacturer = []
      })
      .addCase(getCompanies.rejected, (state) => {
        state.status = Status.failed
        state.manufacturer = []
      })
      .addCase(getCompanies.fulfilled, (state, action) => {
        state.status = Status.idle
        state.manufacturer = action.payload.data || []
      })
  },
})

export default manufacturerSlice.reducer
