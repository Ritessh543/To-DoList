import React from 'react'

const Navbar = () => {
  return (
   <nav className="bg-slate-500 text-white py-3 px-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">iTask</div>

        <ul className="flex gap-8">
          <li className="cursor-pointer hover:font-bold transition-all">Home</li>
          <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar