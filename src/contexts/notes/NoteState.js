import React, { useState } from 'react'
import NoteContext from './noteContext'


export const NoteState = (props) => {
  const noteInitial = [
    {
      "_id": "65a9179bac608caa908b0ca8",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:43.646Z",
      "__v": 0
    },
    {
      "_id": "65a9179cac608caa908b0caa",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:44.845Z",
      "__v": 0
    },
    {
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
      "__v": 0
    },
    {
      "_id": "65a9179dac608caa908b0cae",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.227Z",
      "__v": 0
    },
    {
      "_id": "65a9179dac608caa908b0cb0",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.406Z",
      "__v": 0
    },
    {
      "_id": "65a9179dac608caa908b0cb2",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.610Z",
      "__v": 0
    },
    {
      "_id": "65a9179dac608caa908b0cb4",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.819Z",
      "__v": 0
    },
    {
      "_id": "65a9179eac608caa908b0cb6",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:46.011Z",
      "__v": 0
    },
    {
      "_id": "65a9179eac608caa908b0cb8",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:46.209Z",
      "__v": 0
    },
    {
      "_id": "65a9179eac608caa908b0cba",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:46.434Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(noteInitial)

  const addNote =(title,description,tag)=>{
    
    const note={
      "_id": "65a9179dac608cfvbgaa90ewfv8b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": {title},
      "description": {description},
      "tag": {tag},
      "date": "2024-01-18T12:20:45.016Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
    console.log("adding a note")
    
  }
  const editNote =()=>{

  }
  const deleteNote =()=>{

  }
  return (
    <NoteContext.Provider value={{ notes, addNote,deleteNote,editNote }} >
      {props.children}
    </NoteContext.Provider>
  )
}
