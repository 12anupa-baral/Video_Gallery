import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import VideoList from './components/VideoList'
import Apifetch from './components/Apifetch'
// import Axios from './components/UsingAxios'

function App() {
  return (
    <>
    <Header title="Youtube Videos" subtitle="React Video Player"/>
    <Apifetch/>
    

    </>
  )
}

export default App
