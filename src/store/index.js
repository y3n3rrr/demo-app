import {combineReducers} from 'redux'
import products from './product_reducer'
import user from './user_reducer'

const reducers = combineReducers({
    products
    //user
})

export default reducers;