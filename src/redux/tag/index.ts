import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Status, ITagType, ITagFilterParams } from '../../types'
import httpService from '../../services/http-service'

export interface TagState {
  tagList: ITagType[]
  status: Status
}

export const initialState: TagState = { tagList: [], status: Status.idle }

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(blabal(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getTags = createAsyncThunk('tag/getAll', async (params: ITagFilterParams) => {
  const response = await httpService.get<ITagType[]>('/tags', { params })
  // The value we return becomes the `fulfilled` action payload

  return response
})

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.status = Status.loading
        state.tagList = []
      })
      .addCase(getTags.rejected, (state) => {
        state.status = Status.failed
        state.tagList = []
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.status = Status.idle
        state.tagList = action.payload.data || []
      })
  },
})

export default tagSlice.reducer
