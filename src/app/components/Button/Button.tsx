import Link from 'next/link'
import React from 'react'


const Button = () => {
  return (
    <div className='container mx-auto w-auto flex justify-between'>
        <div className='bg-gray-600 w-fit rounded-2xl p-3 flex gap-7'>
            <Link href="/event" >Events</Link>
            <Link href="/collection" >Collections</Link>
        </div>
        <button type='button' className='bg-yellow-400 text-xl font-extrabold rounded-xl py-1 px-2 mb-3'>
            Join Waitlist
        </button>
    </div>
  )
}

export default Button