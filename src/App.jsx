import React from "react"
import Cards from "./Components/Cards"

function App() {

  return (
    <>
        <div className=" w-full bg-blue-950">
          <h1 className="text-3xl md:text-5xl font-extrabold underline text-center py-3 text-white">Infinite Scroll</h1>
          <Cards/>
        </div>
    </>
  )
}

export default App
