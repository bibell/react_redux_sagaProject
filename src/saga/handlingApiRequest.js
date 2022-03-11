import { fetchInfo } from "./fatchRequest";
import {call, put, takeEvery} from 'redux-saga/effects'
import * as actions from '../reducers/allActions/mainAction'

function* apiHandle(){
 // alert('hello world')
   try{ 
    const usersRequest=yield call(fetchInfo())
    //yield put({type:'USER_REQUES',userRequest})
    yield put(actions.user_get_request(usersRequest))
    
   }catch(e){
     // yield put({type:'USER_FAIL',error:e})
     yield put(actions.user_fail(e))
   }    
}

export  function* allRequest(){
    yield takeEvery(actions.user_get_request(),apiHandle)
}