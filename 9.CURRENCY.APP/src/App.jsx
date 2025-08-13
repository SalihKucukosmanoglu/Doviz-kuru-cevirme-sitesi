import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Currenyc from './Components/Currenyc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
      <Currenyc />
    </div>
  )
}

export default App
