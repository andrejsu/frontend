import { useState, useEffect } from "react"
import './App.css'
import axios from 'axios'
import Test from './components/Test'

const API_URL = "http://localhost:3000/api/v1/tests"

const getApiData = () => axios.get(API_URL).then((res) => res.data)

const App = () => {
  const [test, setTest] = useState([])
  
  useEffect(() => {
    getApiData().then((items) => setTest(items))
  }, [])

  return (
    <div className="App">
      <Test books={test} />
    </div>
  )
}

export default App
