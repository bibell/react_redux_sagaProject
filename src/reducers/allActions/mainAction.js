//create the second actions
export const teraName=()=>{
    return{
        type:'userName'
    }
}

//create the third action
export const teraGender=()=>{
    return{
        type:'userGender'
    }

}

//create the other action
export const teraSalary=()=>{
    return{
        type:'userSalary'
    }
}

//create action creator that hold the database response
export const gain=(ress)=>{
    return {
        type:'ress'
    }
}

export const user_get_request=(post)=>{
    return {
        type:'USER_GET_REQUEST',
        users:[post]
    }
}

export const user_fail=(error)=>{
    return{
        type:'USER_FAIL',
        message:error
    }
}