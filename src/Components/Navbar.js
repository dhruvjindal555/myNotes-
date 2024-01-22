import React, { useContext ,useEffect} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import noteContext from '../contexts/notes/noteContext'

const Navbar = () => {
    let location = useLocation()
    // useEffect(() => {
    // console.log(location.pathname)
    //   }, [location]);

    let context = useContext(noteContext)
    let { fetchUserDetails, userDetails } = context


    let navigate = useNavigate()


    

    const handleLogOut = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">myNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-primary mx-1 " to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
                    </form> :
                        <>

                            <div className="dropdown show mx-3 ">
                                <span className="dropdown-toggle text-decoration-none text-white" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    User details
                                </span>

                                <div className="dropdown-menu end-50 " aria-labelledby="dropdownMenuLink">
                                    <span className="dropdown-item" href="/">{userDetails.name}</span>
                                    <span className="dropdown-item" href="/">{userDetails.email}</span>
                                    <span className="dropdown-item" href="/">SignedUp on : {userDetails.date}</span>
                                </div>
                            </div>
                            <button className='btn btn-primary' onClick={handleLogOut} >Logout</button>
                        </>
                    }
                </div>
            </div>


        </nav >
    )
}

export default Navbar