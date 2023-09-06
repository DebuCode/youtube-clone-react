import React, { useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './loginScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'

const LoginScreen =()=> {
  const dispatch = useDispatch()

  const accessToken = useSelector(state=>state.auth.accessToken)
  
  const handleLogin = () => {
    dispatch(login())
  }

  const nanigate = useNavigate()

  useEffect(()=>{
    if(accessToken){
      nanigate('/')
    }
  },[accessToken,nanigate])
  
  return (
    <div className="login">
        <div className="login__container">
            <img src="./images/red-youtube-logo-social-media-logo_197792-1803.avif" alt="" />
            <button onClick={handleLogin}>Login with google</button>
            <p>This Project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen


