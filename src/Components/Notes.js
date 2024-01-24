import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../contexts/notes/noteContext'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom'



export const Notes = (props) => {
    let navigate = useNavigate()
    let context = useContext(noteContext)
    let { notes, getNote ,editNote} = context
    useEffect(() => {
        // eslint-disable-next-line 
        if(localStorage.getItem('token')){
            // eslint-disable-next-line 
            getNote();
        }else{
            // eslint-disable-next-line 
            navigate('/login');
        }
    }, [])

    

    const ref = useRef(null)
    const refClose = useRef(null)

    const [note, setNote] = useState({ _id:"",title: "", description: "", tag: "default" })
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const updateNote = (oldNote) => {
        setNote(oldNote)
        ref.current.click()
    }
    
    const handleclick = (e) => {
        editNote(note)
        refClose.current.click()
        props.showAlert("Successfully edited", "success" )
        // e.preventDefault();
        // addNote(note.title,note.description,note.tag)
    }

    return (
        <>
            <button type="button" ref={ref} className="d-none btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-black ">
                            <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-black ">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag}  onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleclick}>Update note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h2>Your notes</h2>
            {notes.map((note) => {
                return <Noteitem showAlert={props.showAlert} key={note._id} note={note} updateNote={updateNote} />
            })}
        </>
    )
}
