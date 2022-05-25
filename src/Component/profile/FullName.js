import React from 'react'

export const FullName = () => {
    let firstName= "Alaa"
    let lastName= "bsaihia"
  return (
    <div>
        <h2 className='Name'>
            {firstName+" "+ lastName}
        </h2>
    </div>
  )
}
