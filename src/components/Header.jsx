import React from 'react'

function Header({title,subtitle}) {
  return (
    <div className='text-center pt-5'>
        <h1 className='font-bold text-3xl text-red-500'>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default Header