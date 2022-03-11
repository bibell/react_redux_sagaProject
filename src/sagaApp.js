import {useSelector, useDispatch} from 'react-redux'
import { createStore } from 'redux'

import * as actions from './reducers/allActions/mainAction'
import * as allStr from './reducers/allStores/mainStor'
import * as me from './reducers/allInOne'
import { allRequest } from './saga/handlingApiRequest'
import styled from 'styled-components'
import axios from 'axios'



const Button=styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0.5em 1em;
  cursor:pointer;
  padding:10px ;
`


const Container = styled.div`
  margin-left:200px;
`
const getStateStore=allStr.responseState
//const dispatch=useDispatch()

const value={
  displayUser:[]
}

function AppSaga(){
   // const usersSelect=useSelector(state=>state.getStateStore.users)
    const dispatch=useDispatch()
    const select=useSelector(state=>state)
   //console.log(select)
   

    return(
        <div className='saga'>
           
            <Container>
                <Button onClick={()=>{
                  axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                  .then((response)=>{
                    const one=dispatch({type:'USER_GET_REQUEST',users:response.data}) 
                    console.log(one.users)
                     value.displayUser=one.users
                    //console.log(actions.user_get_request)
                                })
                  .catch((e)=>{
                    const two=dispatch({type:'USER_FIAL',users:e})
                    console.log(two)
                  })
                  
                }}>SAGA API CALL </Button>
            </Container>
            {value.displayUser.map((val)=>{
             const StylingComponent=styled.table`
              background-color:black;
              color:white;
              padding:10px;
              margin:10px;
             `

             const Con=styled.div`
              font-family:arial
             `
              return(<div>
              <Con>
                 <StylingComponent>
                <table>
                    <th>employeeName</th>
                    <th>employeeBirth</th> 
                    <th>employeeGender</th>
                    <th>employeeSalary</th>
                     
                     <tr>
                       <td>{val.employeeName} </td>
                       <td>{val.employeeBirth}</td>
                       <td>{val.employeeGender}</td>
                       <td>{val.employeeSalary}</td>
                     </tr>
                </table> 
               </StylingComponent> 
              </Con>
                </div>)
            })}           
        </div>
    )




}

export default AppSaga