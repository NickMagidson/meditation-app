import React from 'react'

export const soundContext = React.createContext();

export default function Sounds() {
  return (
    <>
    <div className='sound-form'>
      <select className='sound-form' id="cars" name="cars">
        <option value="bell1">Bell 1</option>
        <option value="bell2">Bell 2</option>
      </select>
      </div>
    </>
  )
}
