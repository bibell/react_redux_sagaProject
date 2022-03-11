import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import add from './images/add.jpg'
import './allStyle/create.css'
import {createStore,combineReducers} from 'redux'
import * as action from './reducers/allActions/mainAction'
import * as storr from './reducers/allStores/mainStor'


class Create extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            startDate:new Date(),
            gender:'',
            salary:'',
            users:[],
            error:'',
            salaryError:'',
            nameError:'',
            genderError:''
        }
        this.userName=this.userName.bind(this)
        this.employeeDate=this.employeeDate.bind(this)
        this.userGender=this.userGender.bind(this)
        this.userSalary=this.userSalary.bind(this)
    }


  
    

    userName(event){
          this.setState({name:event.target.value})

    }

   employeeDate(date){
       this.setState({startDate:date})
   }
   
   userGender(event){
       this.setState({gender:event.target.value})
   }

   userSalary(event){
      this.setState({salary:event.target.value})
   }

   render(){

       
       return(<div className='create'>
           <div className='createOne'>
               <img src={add}/>
               <h3>ADD EMPLOYEE</h3>
           </div>

           <div className='createTwo'>
               <div style={{color:'red'}}>
                   {
               this.state.error
           //    stor.getState().map((val)=>{return(<div>{val.state}</div>)})
                  }
                  {
                     // stor.getState()
                  }
               </div>
               <br/>
               <input value={this.state.name}
                      onChange={this.userName}
                      placeholder='Employee Name'/><br/>
                      <div style={{color:'red'}}>{
                                  // this.state.nameError
                                  storr.userStore.getState()
                                 //this.nameSttor.getState()
                                // awesomeStor.getState()
                                   }
                                   </div>
                      <br/>

               <DatePicker selected={this.state.startDate} 
                           onChange={this.employeeDate}
                           name='Date of Birth'
                           placeholderText='Employee Date of Birth'
                           dateFormat="m/d/yyyy"/>
               <input value={this.state.gender}
                      onChange={this.userGender}
                      placeholder='Employee Gender'/>
                   <div style={{color:'red'}}>
                       {
                      // this.state.genderError
                      storr.store.getState()
                       
                       }</div>   
               <input value={this.state.salary}
                      onChange={this.userSalary}  
                      placeholder='Employee Salary'/><br/>
                     <div style={{color:'red'}}>{
                     //this.state.salaryError
                     }</div>  
                      <br/>
                      <div style={{color:'red'}}>{storr.stor.getState()}</div>
                      <br/>
               <button onClick={()=>{
                   const getValue={
                       uname:this.state.name,
                       udate:this.state.startDate,
                       ugender:this.state.gender,
                       usalary:this.state.salary
                   }

          // allInOne.mainOne.dispatch(teraName())
           console.log(storr.stor.getState())
           //console.log(hello)
           

           if(this.state.name==='' || this.state.startDate==='' || this.state.gender==='' || this.state.salary===''){
               this.setState({error:'All Input is required'})
           } else{
              //validate employee name
              console.log(typeof(this.state.name))
               const userNameRegex=/^[a-z A-Z]+$/
               //const vall=typeof(this.state.name)
               //const validateName=new RegExp('/^[a-zA-Z]+$/')
               if(!userNameRegex.test(this.state.name)){
                   this.setState({nameError:'Employee Name must be valid String'})
                  storr.userStore.dispatch(action.teraName())
                    
                  
                      }
                else{      
                  
                 const genderRegexOne=/^[M]$/
                 const genderRegexTwo=/^[F]$/
                 const genderRegexThree=/^[m]$/
                 const genderRegexFour=/^[f]$/
                 if(!(genderRegexOne.test(this.state.gender) || genderRegexTwo.test(this.state.gender) || genderRegexThree.test(this.state.gender) || genderRegexFour.test(this.state.gender))){
                     this.setState({genderError:'M or F is only allowed'})
                    storr.store.dispatch(action.teraGender())
                   // console.log(storTwo.getState())
                 }   
                 else{
                if((this.state.salary*2)%2===0){
                   
                   //console.log(storThree.getState()) 
                   alert(getValue.uname+getValue.udate+getValue.ugender+getValue.usalary+'\n is going to be added to the data base')
                   axios.post('http://localhost:7000/employee/api/creat/employeeInfo',getValue)
                   .then((response)=>{
                       alert('employee has been created sucessfully...')
                       console.log(response.data)
                       window.location.reload()
                   }).catch((e)=>{
                       alert('unable to send the requiest due to '+e)
                   })
                                       }
                                   else{
                                       this.setState({salaryError:'Salary Must be valid number'})
                                       storr.stor.dispatch(action.teraSalary())
                                   }    

                                }
                            }  
              }
                   
               }}>ADD EMPLOYEE</button>
           </div>
       </div>)
   }
}
export default Create