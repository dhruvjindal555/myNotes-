import React from 'react'
import NoteContext from './noteContext'


export const NoteState = (props) => {
  const state = {
    "name": "dhruv",
    "class": "8th"
  }
  return (
    <NoteContext.Provider value={state} >
      {props.children}
    </NoteContext.Provider>
  )
}
