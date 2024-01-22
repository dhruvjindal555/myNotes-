import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password
            })
        })
        const json = await response.json();
        console.log(json)
        if (json.authToken) {
            localStorage.setItem('token', json.authToken)
            navigate('/')
            props.showAlert("Successfully signed up ", "success")

        } else {
            // alert('INVALID LOGIN')  
            props.showAlert("Invalid login", "danger")

        }
    }
    return (
        <div className='container'>
            <h1 className='m-5'>Create an account to use myNotes App </h1>

            <form className='container px-5' onSubmit={handleSubmit}>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" className="form-control m-2 bg-secondary border-0" id="exampleInputName" aria-describedby="emailHelp" value={credentials.name} name="name" onChange={onChange} placeholder="Enter name" required />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control m-2 bg-secondary border-0" id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} name="email" onChange={onChange} placeholder="Enter email" required />
                    <small id="emailHelp" className="form-text text-white-50">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text" className="form-control m-2 bg-secondary border-0" id="exampleInputPassword1" value={credentials.password} onChange={onChange} name="password" placeholder="Password" required />
                </div>
                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control m-2 bg-secondary border-0" id="exampleInputPassword2" value={credentials.cpassword} onChange={onChange} name="cpassword" placeholder="Password" required />
                </div>

                <button type="submit" className="m-2 btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup