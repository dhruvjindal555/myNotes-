import React, {  } from 'react'
import { Notes } from './Notes'
import Addnote from './Addnote'

const Home = () => {
    
    return (
        <>
            <Addnote/>
            <div className='row d-flex justify-content-center align-items-center '>
                <Notes/>
            </div>

        </>
    )
}

export default Home