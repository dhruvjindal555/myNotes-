import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
const Login = (props) => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(credentials)
        })
        const json = await response.json();
        console.log(json)
        if (json.authToken) {
            localStorage.setItem('token', json.authToken)
            navigate('/')
            props.showAlert("Successfully logged in ", "success" )
        } else {
            // alert('INVALID LOGIN')
            props.showAlert( "Invalid login","danger" )
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container '>
            <h1 className='m-5'>Login to access your notes </h1>
            <form className='container px-5' onSubmit={handleSubmit}>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="bg-secondary border-0  form-control m-2" id="exampleInputEmail1" value={credentials.email} name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className=" form-text text-white-50 ">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="bg-secondary border-0  form-control m-2" id="exampleInputPassword1" value={credentials.password} name="password" onChange={onChange} placeholder="Password" />
                </div>

                <button type="submit" className="m-2 btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login