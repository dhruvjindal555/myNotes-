import React from 'react'

const Noteitem = (props) => {
    const { title, description } = props.note
    return (
        <>
            <div class="card col-md-3 m-2 " >
                <div class="card-body">
                    <h5 class="card-title"> {title}</h5>
                    <p class="card-text">{description}</p>
                    {/* <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </>
    )
}

export default Noteitem