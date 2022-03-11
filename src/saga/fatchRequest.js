import axios from 'axios'

export const fetchInfo=axios.get('http://localhost:7000/employee/api/read/employeeInfo')
                      .then((response)=>{
                          console.log('response is comming from saga api call')
                          return response.data
                      }).catch((e)=>{
                          console.log('api call error from saga')
                          return e
                      })