import { useState } from 'react'
import AppHeader from './Components/AppBar.jsx'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

class Task {
  constructor (title, body) {
    this.title = title 
    this.body = body 
  }
}


function createTask() {
  
}


function App() {
  return (
    <>
    <AppHeader />

   <Fab
  color="secondary"
  aria-label="add"
  sx={{
    position: 'fixed',
    bottom: 50,
    right: 30,
  }}
>
  <AddIcon />
</Fab>
    </>
  )
}

export default App
