import {
  createStore,
  applyMiddleware,
  Store,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import reducers, { initialState } from '../reducers';

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<Store> = () => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper<Store>(initStore)