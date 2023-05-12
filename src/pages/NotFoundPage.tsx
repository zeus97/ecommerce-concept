import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFoundPage() {

    const navigate = useNavigate();

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{width: '100%', height: '100vh'}}>
        <h1>Error 404</h1>
        <button type='button' className='btn btn-danger' style={{fontSize:'1.5rem'}} onClick={()=>{navigate('/')}} >Go back</button>
    </div>
  )
}
