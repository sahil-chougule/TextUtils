import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-screen, h-screen'>
     <div className='px-2'>
      <div className='flex gap-3 mx-auto items-center '>
        
        <span className='font-bold'>TextUtils</span>
        <span className='cursor-pointer' >Home</span>
        <span className='cursor-pointer' >About Us</span>
       
        <div className='flex ml-auto items-center gap-2'>
             <input
              type='text'
              placeholder='Search anything !!..'
              className='p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-gray-400'
             ></input>
             <button className='border border-gray-300 bg-transparent p-2 my-1 text-black rounded-md hover:bg-slate-300 hover:text-white'>Sign in</button>
        </div>
        
      </div>

     </div>
      
   </div>
  )
}

export default App











































