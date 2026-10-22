import Link from 'next/link'
import React from 'react'

const Navbar = () => {
     return (
          <div className='flex items-center justify-between max-w-7xl w-full mx-auto py-10'>
               <h1>MealTSB</h1>
               <ul className='flex items-center justify-center space-x-0.5'>
                    <Link href={`/`}><li className='border rounded-md px-5 py-0.5'>Home</li></Link>
                    <Link href={`/meals`}><li className='border rounded-md px-5 py-0.5'>Meals</li></Link>
                    <Link href={`/blog`}><li className='border rounded-md px-5 py-0.5'>Blog</li></Link>
               </ul>
               <div className='flex items-center justify-center space-x-1'>
                    <Link href="/signin"><button className='px-5 py-0.5 border rounded-md hover:bg-gray-300'>Signin</button></Link>
                    <Link href="/signup"><button className='px-5 py-0.5 border rounded-md hover:bg-gray-300'>Signup</button></Link>
               </div>
          </div>
     )
}

export default Navbar
