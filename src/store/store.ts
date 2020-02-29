import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { PalanetReducer } from './reducers'

const reducer = combineReducers({
  PalanetReducer,
})

const configureStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore()
export default store
