import axios from "axios";
import React from 'react'

const PASSWORDRESET_API_BASE_URL =`http://localhost:8080/PasswordReset/`

class PasswordService{

    sendEmailToResetPassword(email){
     return  axios.post(PASSWORDRESET_API_BASE_URL + email)
    }

    sendNewPassword(token, password){
        console.log("ana f sendNew")
   return     axios.post(PASSWORDRESET_API_BASE_URL+"reset/"+ token, password)
    }
}

export default new PasswordService()