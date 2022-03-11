import { createStore } from 'redux'
import * as Reducers from '../allInOne'


export const userStore=createStore(Reducers.nameReducer)
export const store=createStore(Reducers.secondReducer)
export const stor=createStore(Reducers.reducer)

//create store that holds the response state
export const responseState=createStore(Reducers.responseReducers)