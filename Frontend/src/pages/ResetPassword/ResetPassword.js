import React,{useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import './fogotPassword.css'
import PasswordService from '../../services/PasswordService'




const ResetPassword = () => {
  const [password, setPassword]=useState('')
  const [confirm, setConfirm]=useState('')
  const [errorMessage,setErrorMessage]=useState(false)
  const [success, setSuccess]=useState(false)

  const {token} = useParams();
  const history = useNavigate();

  const setNewPassword = (e) => {
    e.preventDefault();

    if(password !== confirm){
      setErrorMessage(true);
    }
    else{
      PasswordService.sendNewPassword(token, password).then((response) => {
        console.log("ana f then")
        setSuccess(true)
        history('/')
      }).catch(error => {
        console.log(error)
    })
    }
  }
  if(!success) {return (
    
  <div className="form-container">
    <form className="form-wrap">
      <h2 >Reset Password</h2>
    
        <div className="form-box">
            <input type="password" placeholder="Password" 
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
            required/>
            <input type="password" placeholder="Confirm" 
            value={confirm}
            onChange = {(e) => setConfirm(e.target.value)}
            required/>
        </div>

        <div className="form-submit">
            <input type="submit" value="Save" onClick = {(e) => setNewPassword(e)}/>

        </div>

    </form>

</div>)}

else if(success){
  return(
  <div>
   <h3>You Have suuccessfully change your password</h3>
  </div>
  )
}


  
}

export default ResetPassword