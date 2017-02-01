import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import Nominate from './Nominate'

export default combineReducers({
    routing,
    Nominate
})
