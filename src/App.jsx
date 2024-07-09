import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Apifetch from './components/Apifetch'

function App() {
  return (
    <>
    <Header title="Youtube Videos" subtitle="React Video Player"/>
    <Apifetch/>
    

    </>
  )
}

export default App
