import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Status } from '../types/Status'
import httpService from '../../services/http-service'

export interface ItemTypeState {
  itemTypeList: string[]
  status: Status
}

export const initialState: ItemTypeState = { itemTypeList: [], status: Status.idle }

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getAllItemTypes = createAsyncThunk('itemType/getAll', async () => {
  const response = await httpService.get<[]>('/itemTypes')
  // The value we return becomes the `fulfilled` action payload
  return response as unknown as string[]
})

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllItemTypes.pending, (state) => {
        state.status = Status.loading
        state.itemTypeList = []
      })
      .addCase(getAllItemTypes.rejected, (state) => {
        state.status = Status.failed
        state.itemTypeList = []
      })
      .addCase(getAllItemTypes.fulfilled, (state, action) => {
        state.status = Status.idle
        state.itemTypeList = action.payload || []
      })
  },
})

export default tagSlice.reducer
