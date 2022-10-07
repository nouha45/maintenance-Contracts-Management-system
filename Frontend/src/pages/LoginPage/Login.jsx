import React,{useState, useRef, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './login.css'
import axios from "axios"
import {InterceptorAxios} from "../../interceptor/InterceptorAxios"



function Login() {

    const[username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const[messageError,setMessageError]=useState('')
    const [success, setSuccess]=useState(false)
    const navigate = useNavigate();
    const userRef =useRef()
    const errRef= useRef()

    useEffect(()=> {
      userRef.current.focus()
    }, [])

    useEffect(() =>{
      setMessageError('')
    }, [username, password])

    const sendLoginRequest = async () =>{
      const user={username, password}
      try {
        const hone =`http://localhost:8080/user/Login`
        console.log("URL"+ hone)
        const rest = await axios.post("http://localhost:8080/user/Login", user);
        if (rest.status === 200) {
  
         
  
        
          console.log("ana redirect");  
         navigate("/home")
  } else if (rest.status === 401) console.log(rest.data.role[0]);
      } catch (e) {
        console.log(e);
        console.log("erreuuur hna");
      }

    }
   
    
  return (
    <div className="login">
      
    <div className="box-form">
        <div className="left">
            <div className="overlay">
                <h1> Welcome to the maintenance contracts system !</h1>
                <p> une application web qui permet aux administrateurs réseau et sécurité de garder une trace sur toutes les maintenances préventives effectuées </p>
                
            </div>
        </div>
        <div className="right" >
            <h5>Login</h5>
            <p ref={errRef} className={messageError? "messageError": "offscreen"} aria-live="assertive">{messageError}</p>
            <p className="admin"> If you need an account, you can request it from an administrator</p>
            <div className="inputs">
                <input type="text" 
                id="username" autoComplete="off"
                ref={userRef}
                 placeholder="Enter your userName"
                 onChange={(e)=>setUsername(e.target.value)}
                 value={username}
                 required/>
                <br/>
                <input type="password"
                id="password" 
                 placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required/>
                <br/>
                <br/>
                <div className="remember-me">
                    <label>
                        
                    <Link to="/forgot" >   <p> Forgot your password ?</p></Link>
                    </label>
                </div>
                <button id="submit" onClick={()=>sendLoginRequest()}> Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login