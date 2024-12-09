import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header></header>
      <home></home>
      <projects></projects>
      <about></about>
      <cases></cases>
      <skills></skills>
      <footer></footer>
    </>
  )
}

export default App
