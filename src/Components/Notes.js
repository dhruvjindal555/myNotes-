import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'
import Noteitem from './Noteitem'



export const Notes = () => {
    let context = useContext(noteContext)
    let { notes } = context
    return (
        <>
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note}  />
            })}
        </>
    )
}
