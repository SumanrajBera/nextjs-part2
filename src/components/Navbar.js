import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-2'>
        <h1>E-comm</h1>
        <div className='flex gap-2'>
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
        </div>
        <div>Login</div>
    </div>
  )
}

export default Navbar