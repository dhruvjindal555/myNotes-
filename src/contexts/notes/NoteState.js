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
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
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
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
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
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
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
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
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
      "_id": "65a9179dac608caa908b0cac",
      "user": "65a8e3316eade19f5b3d0079",
      "title": "Dhruv is my name",
      "description": "i am a good boy",
      "tag": "remind me ",
      "date": "2024-01-18T12:20:45.016Z",
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
    }

  ]

  const [note, setNote] = useState(noteInitial)
  return (
    <NoteContext.Provider value={{ note, setNote }} >
      {props.children}
    </NoteContext.Provider>
  )
}
