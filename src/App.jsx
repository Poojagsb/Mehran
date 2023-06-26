import { useState } from 'react'
import logo from "./assets/Images/Asset1.png"
import logonobg from "./assets/Images/logonobg.png"
import herobg from "./assets/Images/chickenbg.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='flex items-center h-20 bg-black sticky top-0 z-50'>
        <div class="mx-auto relative px-5 max-w-screen-xl w-full flex ">
          {/* Navbar Logo */}
          <div class="h-10 w-50 self-center mr-2">
            <img class="h-10 w-50 self-center absolute" src={logo} />
          </div>
          {/* Navbar Menu */}
          <nav class="text-white flex gap-5 absolute right-0 top-2">
            <a class="cursor-pointer hover:border-b-2">Home</a>
            <a class="cursor-pointer hover:border-b-2">Menu</a>
            <a class="cursor-pointer hover:border-b-2">Our Services</a>
            <a class="cursor-pointer hover:border-b-2">About</a>
            <a class="cursor-pointer hover:border-b-2">Gallery</a>
            <a class="cursor-pointer hover:border-b-2">Contact</a>
          </nav>
        </div >
      </div >
      <section class="flex flex-col min-h-screen bg-center text-white bg-cover bg-blend-overlay bg-fixed bg-black/30" style={{ backgroundImage: `url(${herobg})` }}>
        <div class=" flex-1 flex items-center">
          {/* Hero Content */}
          <div div class="text-center mx-auto">
            <h1 class="text-4xl font-semibold">Welcome</h1>
            <br />
            <h1 class="text-2xl font-normal">to</h1>
            <br />
            <div class="justify-center items-center flex h-50 w-full">
              <img src={logonobg} />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-black min-h-screen"></section>
      <section class="bg-white min-h-screen"></section>
      <section class="bg-black min-h-screen"></section>
    </>
  )
}

export default App
