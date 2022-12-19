import { useState } from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  )
}

export default App
