import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async (name,email,password) => {
        setIsLoading(true)
        setError(null)
        console.log('sui')
        const response = await fetch('http://localhost:5000/api/auth/register',{
            method: 'POST',
            header:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name,email,password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            console.log('Error JSON',json)
        }
        if(response.ok){
            console.log('Success JSON',json)
            //save the user to local storage
            localStorage.setItem('user',JSON.stringify(json))
            //update the Auth Context
            dispatch({type:'LOGIN', payload:json})
            setIsLoading(false)
        }
    }
    return {signup, isLoading, error}
}