import React from 'react'
import Navbar from './Navbar'
import Mainpage from './Mainpage'
import Tools from './Tools'
import Articles from './Articles'

export default function Container() {
  return (
    <div className=" px-[2.75rem]">
      <Navbar/>
      <Mainpage/>
      <Tools/>
      <Articles/>
    </div>
  )
}
