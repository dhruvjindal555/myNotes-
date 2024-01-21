import React, { useState } from 'react'
import NoteContext from './noteContext'


export const NoteState = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = []
  const [notes, setNotes] = useState(noteInitial)

  const getNote = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGUzMzE2ZWFkZTE5ZjViM2QwMDc5In0sImlhdCI6MTcwNTU2OTU5OX0.Y5JiEzRT2P_wNesUXgMd7s0qbPUZpgJODrk855tDSLw"

      }
    })
    const json = await response.json();


    setNotes(json)
    console.log(json)
  }
  const addNote = async (title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGUzMzE2ZWFkZTE5ZjViM2QwMDc5In0sImlhdCI6MTcwNTU2OTU5OX0.Y5JiEzRT2P_wNesUXgMd7s0qbPUZpgJODrk855tDSLw"

      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json();


    setNotes(notes.concat(json))
    console.log("adding a note")
  }
  const editNote = async ({_id, title, description, tag}) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenotes/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGUzMzE2ZWFkZTE5ZjViM2QwMDc5In0sImlhdCI6MTcwNTU2OTU5OX0.Y5JiEzRT2P_wNesUXgMd7s0qbPUZpgJODrk855tDSLw"

      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json();
    console.log(json)


    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const note = newNotes[index];
      if (note._id === _id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    setNotes(newNotes)
    console.log(notes)

  }
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhOGUzMzE2ZWFkZTE5ZjViM2QwMDc5In0sImlhdCI6MTcwNTU2OTU5OX0.Y5JiEzRT2P_wNesUXgMd7s0qbPUZpgJODrk855tDSLw"

      },
    })
    const json = await response.json();
    console.log(json)

    console.log("Deleting the note with id " + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }} >
      {props.children}
    </NoteContext.Provider>
  )
}
