import {allRequest} from '../saga/handlingApiRequest'
//create reducer function that used for user salary
export const reducer=(state='',action)=>{
  
     if(action.type==='userSalary'){
        return state='salary must be number'
     }else{
         return state
     }
 }
 
 
 //now create the second reducers
 export const secondReducer=(state='',action)=>{
     if(action.type==='userGender'){
         return state='M or F is only allowed'
     }
 }
 
 
 export const nameReducer=(state='',action)=>{
     if(action.type==='userName'){
         return state='user name must be valid string'
     }
     else{
         return state
     }
 }

 //create the reducer that hanldes the database response
 
 export const responseReducers=(state={users:[],error:''},action)=>{
     if(action.type==='USER_GET_REQUEST'){
         return {...state,users:action.userRequest}
     }
     else if(action.type==='USER_FAIL'){
         return {...state,error:action.e}
     }
     else{
         return state
     }
 }
 