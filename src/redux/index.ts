import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export * as tagReducer from './tag'
export * as itemReducer from './item'
export * as basketReducer from './basket'
export * as itemTypesReducer from './itemTypes'
export * as manufacturerReducer from './manufacturer'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
