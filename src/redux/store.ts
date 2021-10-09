import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import tag from './tag'
import item from './item'
import itemTypes from './itemTypes'
import company from './manufacturer'

export const store = configureStore({ reducer: { item, company, tag, itemTypes } })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
