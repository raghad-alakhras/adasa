import React from 'react'
import { Link } from 'react-router-dom'

export default function ArticleCard({article}) {
  
    
  return (
    <Link to={`/blog/${article.id}`}>
        <div className='p-4 my-6  rounded-xl group hover:-translate-y-2 transition-all duration-1000'>
                <div className='rounded-xl overflow-hidden'>
                    <div className='relative ' >
                        <img src={article.image} alt="" className='w-full h-70 group-hover:scale-110  transition-all duration-1000 object-cover rounded-t-xl' />
                        <span className='fs-12 font-bold bg-zinc-900 text-white rounded-full border-1 border-white/50 py-1 px-3 absolute top-4 right-4'>{article.category}</span>
                    </div>
                    <div className='bg-zinc-900 rounded-b-xl  p-3'>
                          <div className='flex items-center gap-5 my-4'>
                            <div className='flex items-center gap-2 fs-14 text-stone-300 opacity-40 pt-1'>
                                <i className='fa-solid fa-clock-four mt-1'></i>
                                <span>{article.readTime}</span>
                            </div>
                            <span className="size-1 rounded-full bg-neutral-800"></span>
                           <p className='text-stone-300 opacity-40 fs-14 '>{article.date}</p>
                        </div>
                        <h4 className='text-white my-2 group-hover:text-orange-500 transition-all duration-1000'>{article.title}</h4>
                        <p className='fs-14 my-3 text-stone-300/70'>{article.excerpt}</p>     
                            <div className=" flex items-center justify-between pt-7 border-t-1 border-white/50">
                                <div className='flex items-center gap-3'>

                                    <div className='relative'>
                                        <img src={article.author.avatar} alt="" className='size-13 rounded-full border-1 border-gray-700' />
                                    </div>
                                    
                                    <div>
                                        <p className='text-white font-bold '> {article.author.name}  </p>
                                        <p className='fs-12 my-2 text-slate-400'>{article.author.role}  </p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center bg-orange-500/30 text-orange-500 border-1 border-orange-500 rounded-full size-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-1000'>
                                    
                                    <i className='fa-solid fa-angle-left '></i>
                                </div>

                            </div>

                    </div>

                </div>
            </div>
    </Link>
  )
}
