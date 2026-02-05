import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Notfound() {
  return (
    
      <div className="hero">
        <div className="container mx-auto py-30">
          <p className='text-9xl ingradient-orange-text text-center font-bold my-6'>404</p>
          <div className="size-25 mx-auto relative rounded-full bg-orange-500/20 text-orange-500 border border-orange-500 flex justify-center items-center">
          <i class="fa-regular fa-face-angry text-3xl"></i>
          <i className='fa-solid fa-circle text-md text-amber-500 fa-beat absolute bottom-0 -left-2'></i>
          <div className="size-6 rounded-sm bg-amber-500 absolute top-0 -right-5 rotate-60"></div>

          </div>
          <p className='text-white text-2xl font-bold text-center my-6'>عفواً! الصفحة غير موجودة</p>
          <p className='text-white/40 text-center my-3 font-light'>الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.</p>
          <div className='flex items-center justify-center gap-4 my-10'>
            <Link to="/">
              <button  className='px-4 rounded-full py-3 text-lg bg-gradient-to-l from-orange-500 via-orange-500 to-amber-500 text-white
              hover:-translate-y-2 transition-all duration-1000'>
              <i className='fa-solid fa-home mx-1'></i>
              تصفح الرئيسية
              </button></Link>
               <Link to="/blog">
              <button className='bg-white/0 text-white px-4 py-3 rounded-full texl-lg transition-all duration-1000 border border-white
              hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500 group'>
                <i class="fa-regular fa-newspaper text-white mx-2 group-hover:text-orange-500 transition-all duration-1000"></i>
                تصفح مقالاتنا
              </button></Link>
            
          </div>
          <p className=' text-white/50 text-sm text-center mt-18'>قد تجد هذه مفيدة:</p>
          <ul className='flex items-center justify-center gap-3 my-3'>
            <li className='text-orange-500 transition-all duration-1000 text-sm hover:underline hover:underline-offset-1'>
              <NavLink to="/" >الرئيسية</NavLink>
            </li>
            <li className='text-orange-500 transition-all duration-1000 text-sm hover:underline hover:underline-offset-1'>
              <NavLink to="/blog" >المدونة</NavLink>
            </li>
            <li className='text-orange-500 transition-all duration-1000 text-sm hover:underline hover:underline-offset-1'>
              <NavLink to="/" >من نحن</NavLink>
            </li>
          </ul>


        </div>

      </div>
    
  )
}
