import React from 'react'
import division from './images/division.png'
import './allStyle/read.css'
import axios from 'axios'
import * as storeRes from './reducers/allStores/mainStor'
import * as actions from './reducers/allActions/mainAction'
import {allRequest} from './saga/handlingApiRequest'
import { useDispatch,useSelector } from 'react-redux'
import AppSaga from './sagaApp'

const sing=storeRes.responseState.getState()
console.log(sing)

class Read extends React.Component{
   constructor(){
       super();
       this.state={
           users:[]
       }
   }


    render(){
        
        return(<div className='read'>
            <div className='readOne'>
                <img src={division}/>
                <h3>SEE WHO WORK IN ADDIS</h3>
                   
                 <button onClick={()=>{
                   
                  
                    axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                    .then((response)=>{
                        //this.setState({users:response.data})                        
                        storeRes.responseState.dispatch(actions.user_get_request())
                      //  storeRes.responseState.getState()
                    console.log(storeRes.responseState.getState())      
                   return console.log(storeRes.responseState.getState())
                          

                    }).catch((e)=>{
                      alert('unable to send the request due to '+e)
                    })
                }}>LIST OF EMPLOYEES</button>
            </div>
            <div className='employeeTable'>
                {
                /*    
                  //[storeRes.responseState.getState()].map((val)=>{
                  this.state.users.map((val)=>{
                        return(<div className='employeeTableOne'>
                            <table border='1'>
                                <tr>
                                    <th>Employee_Name</th>
                                    <th>Employee_Birth_Date</th>
                                    <th>Employee_Gender</th>
                                    <th>Employee_Salary</th>
                                </tr>
                                <tr>
                                    <td>{val.employeeName}</td>
                                    <td>{val.employeeBirth}</td>
                                    <td>{val.employeeGender}</td>
                                    <td>{val.employeeSalary}</td>
                                </tr>
                            </table>
                        </div>)
                    })
                  */
                }
            </div>
           
           
            <AppSaga />
         

        </div>)
    }
}

export default Read;