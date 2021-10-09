import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import httpService from '../../services/http-service'
import { Status } from '../types/Status'
import { IItem } from '../types/Item'

export interface ItemState {
  itemList: IItem[]
  status: Status
}

export const initialState: ItemState = {
  itemList: [],
  status: Status.idle,
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getAllItems = createAsyncThunk('item/getAll', async () => {
  const response = await httpService.get<[]>('/items')
  // The value we return becomes the `fulfilled` action payload
  return response as unknown as IItem[]
})

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.status = Status.loading
        state.itemList = []
      })
      .addCase(getAllItems.rejected, (state) => {
        state.status = Status.failed
        state.itemList = []
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.status = Status.idle
        state.itemList = action.payload || []
      })
  },
})

export default itemSlice.reducer
