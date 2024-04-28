import Link from 'next/link'
import React from 'react'


const Button = () => {
  return (
    <div className='container mx-auto w-auto flex justify-between'>
        <div className='bg-gray-600 w-fit rounded-2xl p-3 flex gap-7'>
            <h3>Events</h3>
            <Link href="/collection" >Collections</Link>
        </div>
        <div>
            Join Waitlist
        </div>
    </div>
  )
}

export default Button