import React from 'react'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'
import { fetchFail,fetchStart,loginSuccess,logoutSuccess,registerSuccess } from '../features/authSlice'
import useAxios from './useAxios'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'

const useAuthCalls = () => {
  // const navigate = useNavigate()
  const {axiosWithToken, axiosPublic} = useAxios()
  const dispatch = useDispatch()


  const login = async (userInfo)=>{
    dispatch(fetchStart())
    try {
      const {data} = await axiosPublic.post("/auth/login/",userInfo)
      dispatch(loginSuccess(data))
      toastSuccessNotify("Login is successful!")
      
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Login is failed!")
      console.log(error);
    }

  }
  return (
    <div>useAuthCalls</div>
  )
}

export default useAuthCalls