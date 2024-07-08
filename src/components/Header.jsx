import React from 'react'

function Header({title,subtitle}) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

export default Header