import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-800 text-white p-5 flex items-center justify-between px-15'>
      <h1 className="text-3xl font-bold">
        UserCR
      </h1>
      <div>
        <input type="text" placeholder='Search...' className='bg-gray-500 py-2 px-5 outline-none rounded-l-xl'/>
        <input type="button" value="Search" className='bg-gray-600 py-2 px-5 cursor-pointer rounded-r-xl'/>
      </div>
      <button className='bg-orange-500 py-2 px-6 cursor-pointer rounded-xl'>
        Add
      </button>
    </header>
  )
}

export default Header
