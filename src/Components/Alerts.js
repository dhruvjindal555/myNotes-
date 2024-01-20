import React from 'react'

function Alerts(props) {
    
    return (
        props.alert && <div className={`alert alert-${props.type}  alert-dismissible fade show`} role="alert">
            {props.message}
           
        </div>
    )
}

export default Alerts