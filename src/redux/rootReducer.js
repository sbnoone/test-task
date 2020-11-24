import { combineReducers } from 'redux'
import authReducer from './modules/auth'
import newsReducer from './modules/news'

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
})

export default rootReducer
