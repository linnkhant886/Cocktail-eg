import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className=' flex flex-col h-full justify-center  items-center mt-20 gap-4'>
        
        
        <h2 className=' font-semibold'>  Somthing is Wrong..........</h2>
        <Link to="/">
        
        <button class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">
  Back to Home
</button>
        </Link>
        
        </div>
  )
}

export default Error