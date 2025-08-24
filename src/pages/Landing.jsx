import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Todocontainer from '../components/Todocontainer'
import { useLocation } from 'react-router-dom'

const Landing = () => {

  const data = useLocation()

  return (
    <div className='bg-black p-10'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <Header username={data.state.user}/>
        <Card/>
        <Todocontainer/>
      </div>
    </div>
  )
}

export default Landing