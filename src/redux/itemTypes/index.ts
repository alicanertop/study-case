import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Status, IItemType, ItemTypeFilterParams } from '../../types'
import httpService from '../../services/http-service'

export interface ItemTypeState {
  itemTypeList: IItemType[]
  status: Status
}

export const initialState: ItemTypeState = { itemTypeList: [], status: Status.idle }

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getItemTypes = createAsyncThunk(
  'itemType/getAll',
  async (params: ItemTypeFilterParams) => {
    const response = await httpService.get<IItemType[]>('/itemTypes', { params })
    // The value we return becomes the `fulfilled` action payload
    return response
  },
)

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItemTypes.pending, (state) => {
        state.status = Status.loading
        state.itemTypeList = []
      })
      .addCase(getItemTypes.rejected, (state) => {
        state.status = Status.failed
        state.itemTypeList = []
      })
      .addCase(getItemTypes.fulfilled, (state, action) => {
        state.status = Status.idle
        state.itemTypeList = action.payload.data || []
      })
  },
})

export default tagSlice.reducer
