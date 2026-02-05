import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='border-t-1 border-white/50 border-b-1'>
        <div className="container mx-auto">
            <div className="flex flex-wrap my-5 gx-4 ">
                <div className="md:w-1/2 lg:w-1/4 w-full mt-5 p-4">
                    <div className="inner">
                        <div className="logo flex items-center gap-3 group ">
                            <a href='#' className='shadow-lg shadow-orange-500/50 flex items-center justify-center bg-orange-500 py-2 px-3 rounded-md group-hover:scale-105 transition-all duration-1000'>
                             <span className='font-bold fs-20 text-white'>ع</span>
                             </a>
                             <h6 className=' text-white fs-20  mt-2'>عدسة</h6>
                        </div>
                        <p className='fs-14 text-white/50 my-3'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.</p>

                        <ul className='list-unstyled flex items-center gap-4 mt-4'>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-orange-500 hover:text-white hover:scale-105 hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-x-twitter '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-orange-500 hover:text-white hover:scale-105 hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-github '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-orange-500 hover:text-white hover:scale-105 hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-linkedin '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-orange-500 hover:text-white hover:scale-105 hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-youtube '></i></a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-1/4 w-full mt-5 p-4">
                   <div className="inner">
                    <h6 className='text-white relative fw-bold mt-2 '>استكشف
                    <span className='after absolute top-0 right-10'></span>
                    </h6>
                   
                    <ul className='list-unstyled mt-4 exploreLinks'>
                        <li className='fs-14 my-2 p-2 group text-white/50 hover:text-orange-500 transition-all duration-1000'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left  opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span>الرئيسية</span> </a>
                        </li>
                        <li className='fs-14 my-2 p-2 group text-white/50 hover:text-orange-500 transition-all duration-1000'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left  opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span> المدونة</span> </a>
                        </li>
                        <li className='fs-14 my-2 p-2 group text-white/50 hover:text-orange-500 transition-all duration-1000'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left  opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span>من نحن</span> </a>
                        </li>
                    </ul>



                   </div>
                </div>
                <div className="md:w-1/2 lg:w-1/4 w-full mt-5 p-4">
                <div className="inner">
                    <h6 className='text-white relative  mt-2 '>التصنيفات
                    <span className='after absolute top-0 right-10'></span>
                    </h6>
                   
                    <ul className='list-unstyled mt-4 exploreLinks'>
                        <li className='fs-14 my-2 p-2 group text-white/50 hover:text-orange-500 transition-all duration-1000 '>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span>اضاءة</span> </a>
                        </li>
                        <li className='fs-14 my-2 p-2 group text-white/50 hover:text-orange-500 transition-all duration-1000'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span> بورتريه</span> </a>
                        </li>
                        <li className='fs-14 my-2 p-2 group text-white/50 transition-all duration-1000 hover:text-orange-500'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span>مناظر طبيعية </span> </a>
                        </li>
                        <li className='fs-14 my-2 p-2 group text-white/50 transition-all duration-1000 hover:text-orange-500'>
                            <a href="#" className='flex items-center gap-2'>
                            <i className='fa-solid fa-chevron-left opacity-0 group-hover:opacity-100 transition-all duration-100'></i> 
                            <span> تقنيات </span> </a>
                        </li>
                    </ul>



                   </div>
                </div>
                <div className=" md:w-1/2 lg:w-1/4 w-full mt-5 p-4">
                    <div className="inner">
                    <h6 className='text-white font-bold mt-2 relative '>ابقى على اطلاع
                    <span className='after'></span>
                    </h6>
                    <p className='my-3 fs-14 text-white/50'>اشترك للحصول على أحدث المقالات والتحديثات.</p>

                    <input type="text" className='w-full bg-zinc-900 p-3 rounded-lg border-0 text-white outline-0 focus:ring-4 focus:ring-orange-500/70' placeholder='ادخل بريدك الالكتروني' />
                    <button className='w-full bg-orange-500 px-5 py-3 text-white border-0 rounded-lg my-3 transition-all duration-1000 hover:-translate-y-2' id="subscribeBtn">اشتراك</button>


                    </div>
                </div>
            </div>
            
        </div>
    </footer>
    <p className='text-center text-white/50 fs-14 my-2'>&copy; 2026 عدسة. صنع بكل <i className='fa-solid fa-heart text-orange'></i> جميع الحقوق محفوظة.</p>

    </>
  )
}
