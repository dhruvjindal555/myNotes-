import React,{useContext} from 'react'
import noteContext from '../contexts/notes/noteContext'

const About = () => {
    const a =useContext(noteContext)
  return (
    <div>this is About {a.name}</div>
  )
}

export default About