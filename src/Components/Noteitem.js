import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext';
const Noteitem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note } = props;
    return (
        <>
            <div className="card col-md-3 m-2 " >
                <div className="card-body">
                    <h5 className="card-title"> {note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square" style={{ cursor: "pointer" }} onClick={() => {props.updateNote(note) }}></i>
                    <i className="fa-solid fa-trash m-2" style={{ cursor: "pointer" }} onClick={() => { deleteNote(note._id) }}></i>

                </div>
            </div >
        </>
    )
}

export default Noteitem