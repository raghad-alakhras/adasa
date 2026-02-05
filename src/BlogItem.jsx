import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function BlogItem({articles}) {

    const { id } = useParams();
    const article =articles.filter(article => article.id === parseInt(id))[0]
    
    const sections = article.content.split(/\n\n(?=##)/);
    const articleSections = sections.splice(1)

    
    let relatedArticles = articles.filter(art => art.category == article.category && art.id!== article.id)
   relatedArticles= relatedArticles.length>3 ? relatedArticles.slice(0,3):relatedArticles
 
   
    
    
  return (
    <main className='w-full'>
        <article className='border-b border-white/40 px-4 '>
            <div className='relative h-screen inset-shadow-xl/30 w-full inset-shadow-gray-600 '>
                <img src={article.image} className='w-full h-full object-cover' alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className='absolute top-1/5 right-5'>
                <ul className='flex items-center gap-3 px-6 py-2 bg-zinc-900/30 rounded-full '>
                <Link to="/">
                    <div className='flex items-center gap-1'><li><i className='fa-solid fa-home text-white/50 text-sm hover:text-orange-500 transition-all duration-1000'></i></li>
                    <i className='fa-solid fa-angle-left text-white/30'></i></div>
                    </Link>
                    <Link to="/blog">
                    <div className='flex items-center gap-1 '><li className=' text-sm text-white/50 hover:text-orange-500 transition-all duration-1000'>المدونة</li>
                    <i className='fa-solid fa-angle-left text-white/30'></i></div>
                     </Link>
                    <div className=''><li  className='text-sm text-orange-500 transition-all duration-1000'>{article.category}</li>
                   </div>
                    
                </ul>
            </div>
            <div className='flex items-center gap-4 absolute top-2/6 right-20'>
                <button className='px-4 py-2 bg-orange-500 text-white rounded-full transition-colors duration-1000 border-none hover:bg-orange-600'> بورتريه</button>
                <div className='text-sm text-gray-300 flex items-center gap-2'>
                    <span><i className='fa-regular fa-calendar'></i></span>
                    <p>{article.category}  </p>
                </div>
                <div className='text-sm text-gray-300 flex items-center gap-2'>
                    <span><i className='fa-regular fa-clock'></i></span>
                    <p>{article.readTime}</p>
                </div>

            </div>
            <h1 className='text-white text-4xl md:text-6xl absolute top-1/2 right-0 px-20'>  {article.title} </h1>
            <div className=' absolute bottom-10 right-20 flex items-center gap-4 bg-zinc-800 rounded-lg border border-white/50 p-3 w-60'>
            <div className=''>
                <img src= {article.author.avatar} alt={article.title} className='size-20 rounded-full border-1 border-orange-500' />
            </div>
            <div >
                <h6 className='text-white'>{article.author.name} </h6>
                <p className='my-2 text-white/70'>{article.author.role} </p>
            </div>

            </div>
            </div>
            <div className=' block md:flex md:justify-between my-20'>
                <div className='md:w-1/4 order-2 md:sticky md:left-0 md:top-0 h-fit '>
                <div className='px-6 py-7 bg-zinc-800 border-1 border-white/20 rounded-lg'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center size-10 bg-orange-500/20 border-1 border-orange-500 rounded-lg'>
                            <i className='fa-solid fa-list text-orange-500'></i>
                        </div>
                        <h6 className='text-white'>محتويات المقال</h6>
                    </div>
                    <ul className='my-7'>
                         {articleSections.map((part,index) =>{ const lines = part.split("\n\n"); 
                            return <>
                            <Link to={`#step-${index+1}`}>
                              <li className=' p-4 rounded-lg flex items-center gap-3 group hover:bg-orange-500/50 transition-all duration-1000'>
                            <p className='size-5 rounded-md text-white/40 text-sm flex items-center justify-center
                            group-hover:text-orange-500 group-hover:bg-orange-500/20 transition-all duration-1000'>{index+1}</p>
                            <p className='text-white/50 text-md group-hover:text-orange-500 transition-all duration-1000'>{lines[0].replace('##','')}</p>
                        </li>
                        </Link>
                            </>
                         })}


                      
                    </ul>
                </div>
                <div className='flex text-center items-center justify-between my-4 bg-zinc-800 rounded-lg border-1 border-white/50'>
                    <div className='p-5 w-1/2'>
                        <div className=' p-6 bg-zinc-900 rounded-lg flex flex-col justify-center items-center gap-4'>
                            <i className='fa-regular fa-clock text-orange-500 font-bold text-lg'></i>
                            <p className='text-white font-bold '>  {article.readTime}</p>
                            <p className='text-white/60 font-light text-sm'>وقت القراءة</p>
                        </div>
                    </div>
                    <div className='p-5 w-1/2'>
                        <div className=' p-6 bg-zinc-900 rounded-lg flex flex-col justify-center items-center gap-4'>
                            <i className='fa-regular fa-calendar text-orange-500 font-bold text-lg'></i>
                            <p className='text-white font-bold '> {article.date}</p>
                            <p className='text-white/60 font-light text-sm'> تاريخ النشر</p>
                        </div>
                    </div>

                </div>
          
                    <div className='p-5 w-full my-4'>
                        <div className=' p-6 bg-orange-500/30 border-1 border-orange-500 rounded-lg flex flex-col justify-center items-center gap-4'>
                           <div className='size-15 rounded-lg bg-orange-500/40 flex items-center justify-center '>
                             <i className='fa-solid fa-envelope text-orange-400 font-bold text-xl'></i>
                           </div>
                            <p className='text-white font-bold '> لا تفوّت جديدنا</p>
                            <p className='text-white/60 font-light text-sm text-center'>  اشترك للحصول على أحدث المقالات</p>
                            <button className='px-6 py-2 bg-orange-500 rounded-lg border-none text-white text-lg w-full font-bold transition-all duration-1000 hover:bg-orange-600'>تصفح المزيد</button>
                    </div>
                </div>
                </div>
                <div className="md:w-3/4">
                <div className='px-4'>
                <p className='p-3 bg-orange-500/30 text-orange-500 rounded-lg border-1 border-orange-500 text-white text-lg'>{article.excerpt} </p>
                <p className='text-lg text-white my-5'>{sections[0]}</p>
                <ul className='my-10'>
                    

                    {articleSections.map((part,index) =>{ const lines = part.split("\n\n");
                    return <>
                    <li className='px-5 my-20' id={`step-${index+1}`}>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center justify-center bg-orange-500/30 border-1 border-orange-500 p-2 rounded-lg'>
                                <i className='fa-solid fa-camera text-orange-500 text-4xl'></i>
                            </div>
                            <p className='text-3xl text-white font-bold'>{lines[0].replace('##','')}</p>
                        </div>
                        <p className='text-white/80 text-lg my-6'>{lines[1]} </p>
                        </li>
                   </> })}


                    
                   
                </ul>
                <div className='bg-zinc-800 rounded-xl border-1 border-white/20 p-6'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center size-10 bg-orange-500/20 border-1 border-orange-500 rounded-lg'>
                            <i className='fa-solid fa-tags text-orange-500'></i>
                        </div>
                        <h6 className='text-white'> الوسوم</h6>
                    </div>
                    <div className='my-5 flex items-center gap-3'>
                        {article.tags.map(tag =>  <p className='px-4 py-2 bg-zinc-700 rounded-full border-1 border-white/50 text-white/70 font-light hover:text-orange-500 hover:border-orange-500 transition-all duration-500'>#{tag}</p>)}
                     
                    </div>
                </div>
                <div className='bg-zinc-800 rounded-xl border-1 border-white/20 px-6 py-3 my-7 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center justify-center size-10 bg-orange-500/20 border-1 border-orange-500 rounded-lg'>
                            <i className='fa-solid fa-share-nodes text-orange-500'></i>
                        </div>
                        <h6 className='text-white'> شارك المقال</h6>
                    </div>
                    <ul className='list-unstyled flex items-center gap-4 mt-4'>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-sky-400 hover:text-white  hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-x-twitter '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-sky-400 hover:text-white  hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-linkedin '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-green-500 hover:text-white  hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-brands fa-whatsapp '></i></a>
                            </li>
                            <li className=' p-2 rounded-lg bg-zinc-600/50 text-white/50 border-1 border-white/50 group hover:bg-orange-500 hover:text-white  hover:border-none transition-all duration-1000'>
                                <a href="#"><i className='fa-solid fa-link '></i></a>
                            </li>

                        </ul>
                </div>
                 <div className='bg-zinc-800 rounded-xl border-1 border-white/20 p-6 flex gap-6 '>
                    <div className=''>
                        <img src={article.author.avatar} alt="" className='size-26 rounded-xl border-4 border-orange-500/50'/>
                    </div>
                    <div className=''>
                       <p className='text-sm font-bold text-orange-500 mb-2'>كاتب المقال</p>
                       <p className='font-bold text-lg text-white'>{article.author.name} </p>
                       <p className='font-light text-md text-white/50'> {article.author.role}</p>
                       <p className='font-light text-lg text-white/80 my-3'>مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.</p>
                    </div>
                </div>

                </div>
                </div>
            </div>
        </article>
             <div className=" my-5 block md:flex justify-between items-center px-4">
                <div className='flex items-center gap-3'>
                    <div className='flex items-center justify-center bg-orange-500/30 border-1 border-orange-500 rounded-xl p-3'>
                        <i className='fa-solid fa-images text-orange-500 text-lg'></i>
                    </div>
                   <div>
                    <h3 className='text-white'> 
مقالات قد تعجبك</h3>
                    <p className='font-light text-sm text-gray-400'>استكشف المزيد من المحتوى المميز</p>
                </div>
                </div>
                <Link to="/blog">
                <p className='px-4 py-3 hidden md:block md:my-0 my-10 text-orange-500 font-bold border-0 group hover:text-amber-500 transition-all duration-1000'>عرض  الكل  
                    <i className='fa-solid fa-arrow-left group-hover:-translate-x-1 group-hover:text-amber-500 transition-all duration-1000 mr-2'></i> </p>
                    </Link>

            </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
               { relatedArticles.map(art => <RelatedArticles article ={art}/>)}
                                    
                    </div>
    </main>
  )
}

function RelatedArticles({article}){
    console.log(article);
    
    return (<>
     <Link to={`/blog/${article.id}`}>
     <div className='p-4 my-6  rounded-xl  group transition-all duration-1000'>
                <div className='rounded-xl group-hover:border-orange-500 border-1 border-white/50 overflow-hidden'>
                    <div className='relative overflow-hidden' >
                        <img src={article.image} alt="" className='w-full h-70 group-hover:scale-110  transition-all duration-1000 object-cover rounded-t-xl' />
                        <span className='fs-12 font-bold bg-orange-500 text-white rounded-full  py-1 px-3 absolute top-4 right-4'>{article.category}</span>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>
                    <div className='bg-stone-900 rounded-b-xl  p-3'>
                        <p className='text-white my-2 font-bold text-md group-hover:text-orange-500 transition-all duration-1000'> {article.title}</p>
                        <div className='flex items-center justify-between mb-4'>
                            <div className='flex items-center gap-2'>
                                <img src={article.author.avatar} alt={article.title} className='size-7 rounded-full object-cover'/>
                                <p className='font-light text-white/50 text-sm'> {article.author.name}</p>
                            </div>
                            <p className='font-light text-white/50 text-md'>{article.readTime}</p>

                        </div>
                    </div>
                   

                </div>
            </div>
            </Link>
    </>)
}