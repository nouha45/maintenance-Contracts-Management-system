import React, {useState} from 'react'
import './fogotPassword.css'
import PasswordService from '../../services/PasswordService'


const ForgotPage = () => {

    const [email, setEmail]= useState('')
    const [showError, setShowError]=useState(false)
    const [messageFromServer, setMessageFromServer]=useState('')

    const sendEmail = (e) => {
        e.preventDefault();
        
            PasswordService.sendEmailToResetPassword(email).then((response) => {
       console.log(response.data)   
       if(response.data === 'email not found in data base'){
        setShowError(true)
        setMessageFromServer('')
       }    

       else if(response.data==='recovery email sent'){
        setShowError(false)
        setMessageFromServer('recovery email sent')
       }
                
            }).catch(error => {
                console.log(error)
            })

        
        
    }

  return (

   
    <>
    <div className="form-container">
        <form className="form-wrap">
          <h2 >Forgot Password</h2>
          <p className="forgot-message">Enter your e-mail address and we'll send you a link to reset your password</p>
            <div className="form-box">
                <input type="text" placeholder="Enter Email"
                id="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                required />
            </div>

            <div className="form-submit">
                <input type="submit" value="Send" onClick = {(e) => sendEmail(e)}/>

            </div>

        </form>
        </div>
        {
          showError && (
            <div>
              <p className="message-error">The email address isn't recognized.
                Please try again!
              </p>
            </div>
          )
        }

        {
          messageFromServer==="recovery email sent" && (
            <div>
              <h3 className="message-success">Password reset email successfully sent!</h3>
            </div>
          )
        }

   </>
    
  )
}

export default ForgotPage