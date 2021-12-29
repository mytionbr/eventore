import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, useNavigate } from 'react-router'

const PrivateRoute = ({component}) => {
    const navigate = useNavigate();

    const alunoSignin = useSelector((state) => state.userSignin)
    const { userInfo } = alunoSignin
    
    return (
        <>
       {
        userInfo ? ( 
            component
            )
            : (
                <Navigate to="/" />
           )
       }
       </>
    )
}

export default PrivateRoute
