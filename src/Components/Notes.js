import React, { useContext } from 'react'
import noteContext from '../contexts/notes/noteContext'
import Noteitem from './Noteitem'



export const Notes = () => {
    let context = useContext(noteContext)
    let { note, setNotes } = context
    return (
        <>
            <h2>Your notes</h2>
            {note.map((note) => {
                return <Noteitem note={note}/>
            })}
        </>
    )
}
