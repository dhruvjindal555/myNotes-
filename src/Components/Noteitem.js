import React from 'react'
const Noteitem = (props) => {
    const { note } = props;
    return (
        <>
            <div className="card col-md-3 m-2 " >
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    {/* <a href="" className="card-link"><i className="fa-solid fa-pen-to-square"></i></a>
                    <a href="" className="card-link"><i className="fa-solid fa-trash"></i></a> */}
                    
                </div>
            </div>
        </>
    )
}

export default Noteitem