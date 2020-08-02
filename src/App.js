import React, { useState, useEffect } from 'react'
import Navigation from './components/shared/router'
import logo from './logo.svg'
import './App.css'

const API = 'https://api.covid19api.com/summary'

function App() {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await fetch(API)
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Navigation data={data} />
      </header>
    </div>
  )
}

export default App
