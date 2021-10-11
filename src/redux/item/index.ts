import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import httpService from '../../services/http-service'

import { jsonServerUtils } from '../../helpers'
import { IPagination, IItem, ItemFilterParams, Status } from '../../types'

export interface ItemState {
  itemList: IItem[]
  status: Status
  filterParams: ItemFilterParams
  pagination: IPagination
}

export const initialState: ItemState = {
  itemList: [],
  pagination: {},
  status: Status.idle,
  filterParams: { _limit: 16, _page: 1 },
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const getItemWithParams = createAsyncThunk(
  'item/getItemWithParams',
  async (params?: ItemFilterParams) => {
    const response = await httpService.get<IItem[]>('/items', { params })
    // The value we return becomes the `fulfilled` action payload
    return response
  },
)

const itemSlice = createSlice({
  name: 'item',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFilterParams: (state, action: { type: string; payload: ItemFilterParams }) => {
      state.filterParams = {
        ...state.filterParams,
        ...action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemWithParams.pending, (state) => {
        state.status = Status.loading
        // state.itemList = []
      })
      .addCase(getItemWithParams.rejected, (state) => {
        state.status = Status.failed
        state.itemList = []
      })
      .addCase(getItemWithParams.fulfilled, (state, action) => {
        state.status = Status.idle
        state.pagination = jsonServerUtils.getPaginationFromsHeadersParams(action.payload.headers)
        state.itemList = action.payload.data || []
      })
  },
})

export const { setFilterParams } = itemSlice.actions

export default itemSlice.reducer
