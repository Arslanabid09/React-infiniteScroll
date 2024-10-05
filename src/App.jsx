import React from "react"
import Cards from "./Components/Cards"

function App() {

  return (
    <>
        <div className="w-full h-screen  bg-slate-300">
          <h1 className="text-3xl font-bold underline text-center py-3">Infinite Scroll</h1>
          <Cards/>
        </div>
    </>
  )
}

export default App
