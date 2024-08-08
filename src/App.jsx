import React from 'react'
import PassGenerator from './component/PassGenerator'

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-red-200 via-pink-200 to-pink-300">
      <h1 className='text-3xl font-bold underline pt-16  text-blue-900 text-center'>Password Generator</h1>

      <PassGenerator />
    </div>
  )
}

export default App