import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({articles , categories}) {
  return (
    <>
     <NavBar/>
     <Outlet context={{ articles , categories}}/>
     <Footer/>
    </>
  )
}
