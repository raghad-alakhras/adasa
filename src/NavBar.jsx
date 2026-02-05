import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function NavBar() {

  const [isOpen, setIsOpen]= useState(false)
  

  
  return (

 <>
<nav class="bg-zinc-900 w-full m-0 fixed top-0 right-0 left-0 z-50">
	<div class="shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        
         <div className='flex items-center gap-3'>
            <div className="logo p-0 h-auto"> <img src="../src/assets/images/logo-GdqARQRt.png" alt="" className='w-10 h-10'/></div>
            <div className='p-0 text-right'>
                <p className='fw-bold fs-20 text-white mb-0'>عدسة</p>
                <span className='text-orange-500 fs-12 hidden md:block'>عالم التصوير الفوتوغرافي</span>
            </div>
        
        </div>

        <div className={`${isOpen?'flex':'hidden'} md:flex md:border-1 p-5  md:border-slate-400 rounded-full `}>
          <ul className= ' md:flex md:flex-row items-center flex-col '>
    
        <li className=' my-5 md:my-0'>
          <NavLink className="text-gray-300 hover:text-white px-5 py-2 rounded-full" to="/">الرئيسية</NavLink>
        </li>
        
        <li className=' my-5 md:my-0'>
          <NavLink className="text-gray-300 hover:text-white px-5 py-2 rounded-full" to="/blog">المدونة</NavLink>
        </li>
        
        <li className=' my-5 md:my-0'>
          <NavLink className="text-gray-300 hover:text-white px-5 py-2 rounded-full" to="">من نحن</NavLink>
        </li>

      </ul>
        </div>

        <div class="hidden md:flex md:items-center gap-3">
          <div className='search-icon hidden  p-2  md:block group  border-1 border-transparent hover:border-orange-500 hover:rounded-lg ransition-all duration-1000'>
            <i className="fa-solid fa-magnifying-glass text-gray-300 group-hover:text-orange-500 transition-all duration-1000"></i>
        </div>
        <button className='py-2 px-4  bg-orange-500 text-white rounded-full '>ابدأ القراءة</button>
         
        </div>

        <div className="md:hidden" onClick={()=>setIsOpen(!isOpen)}>
          <i className='fa-solid fa-bars text-white'></i>
        </div>
      </div>
      
  
    </div>
  </div>
</nav>
    </>
  )
}

{
  
  /* <nav className="navbar navbar-expand-lg  fixed-top w-100">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <div className='d-flex align-items-center gap-3'>
            <div className="logo p-0 h-auto"> <img src="../src/assets/images/logo-GdqARQRt.png" alt="" /></div>
            <div className='p-0 text-end'>
                <p className='fw-bold fs-20 text-white mb-0'>عدسة</p>
                <span className='text-orange fs-12 d-none d-md-block'>عالم التصوير الفوتوغرافي</span>
            </div>
        </div>
    </a>
    <button className="navbar-toggler shadow-none border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
        <i className='fa-solid fa-bars text-white'></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav gap-4 mb-lg-0  border-1 border-opacity-50 border rounded-5 p-3 me-auto">
    
        <li class="nav-item ">
          <NavLink class="nav-link" to="/">الرئيسية</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink class="nav-link" to="/blog">المدونة</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">من نحن</NavLink>
        </li>

      </ul>
      <div className='d-flex align-items-center gap-2 me-auto'>
        <div className='search-icon d-none d-lg-block'>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className='btn-orange d-block mx-auto'>ابدأ القراءة</button>
      </div>
    </div>

  </div>
</nav> */}