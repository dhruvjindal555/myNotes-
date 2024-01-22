import React, {  } from 'react'
import { Notes } from './Notes'
import Addnote from './Addnote'

const Home = (props) => {

    const {showAlert}=props;


    return (
        <>
            <Addnote />
            
            <div className='row d-flex justify-content-center align-items-center '>
                <Notes  showAlert={showAlert}/>
            </div>

        </>
    )
}

export default Home