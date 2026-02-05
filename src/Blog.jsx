import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import ArticleCard from './ArticleCard';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Blog() {
  const { articles , categories } = useOutletContext();
  const[cardStyle , setCardStyle] = useState('grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2')
  const[fliteredArticles , setFilterArticles] = useState(articles)
  const [val , setVal] = useState('')


  function changeStyle(cardstyle){
    
    setCardStyle(cardstyle=='grid'?'grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2':'block')
  }


   function filterArticles(category){
        if(category=== "جميع المقالات"){
          setFilterArticles(articles)
          
          return
        }
        setFilterArticles(articles.filter(article => article.category === category))
  }

  function searchArticles(e){
    const value= (e.target.value);
    setVal(value)
    
    
   value===''?setFilterArticles(articles):setFilterArticles(fliteredArticles.filter(article => article.title.includes(val)))
    
    
  }



  return (
    <>
      <section className="hero py-20" >
           <div className='flex justify-center py-10'>
            <span className='my-5 fs-14 bg-orange-500/10 border-1 border-orange-500 rounded-full px-5 py-2 text-orange-500'>
            <i className='fa-solid fa-circle text-orange-500 fa-beat fs-12 ms-2'></i>
            <i class="fa-regular fa-newspaper text-orange-500 fs-12 mx-2"></i>
              مدونتنا
            </span></div>
             <h1 className='text-center text-white'>اكتشف <span className='ingradient-orange-text'>مقالاتنا</span></h1>
             <p className='text-xl text-neutral-400 text-center my-3'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>

      </section>
      <section className='py-10 bg-zinc-900'>
        <div className="container mx-auto py-5">
          <div className='md:flex justify-between gap-10 items-center '>
            <div className='relative w-full md:w-1/3'>
              <input type="search" className='bg-zinc-800 w-full p-4 rounded-lg border-1 border-white/20 outline-none text-white
               focus:border-orange-500 focus:ring-3 focus:ring-orange-500/30 placeholder:text-white/30 placeholder:font-light' 
               placeholder='ابحث في المقالات'
               value={val}
               onChange={searchArticles}
               />
               <i className='fa-solid fa-magnifying-glass text-white/50 absolute top-1/2 left-5 -translate-y-1/2'></i>
              </div>

              <div className='w-full md:w-2/3 my-5 mr-auto '>
              <div className='flex items-center justify-center gap-4 flex-wrap'>
                 <button className='px-4 py-2 bg-neutral-900 my-2 text-white/80 rounded-lg border-1 border-white/50 
                  hover:border-orange-500/50 transition-all duration-1000
                  focus:bg-gradient-to-l focus:from-orange-500 focus:to-amber-500 focus:border-0 focus:text-white'
                  onClick={()=>filterArticles("جميع المقالات")}
                  >
                جميع المقالات</button>
              {categories.map(category => <CategoryBtn key={category.name} categ={category.name} onFilter={filterArticles}/>)}


              </div>
              </div>
             </div>

             <div className="flex justify-between items-center my-15">
              <p className='text-white/50'>عرض <span className='font-semibold text-white'>{fliteredArticles.length}</span> مقالات</p>
              <div className="flex bg-zinc-800 rounded-lg border-1 border-white/50">
                <button className= {`p-3 text-white/70 rounded-lg ${cardStyle.includes('grid')?`bg-orange-500 text-white`:`text-white/70`} `} onClick={()=>{changeStyle('grid')}}><i class="fa-solid fa-border-all"></i></button>
                <button className={` p-3 text-white/70 rounded-lg ${cardStyle.includes('block')?`bg-orange-500 text-white`:`text-white/70`}`} onClick={()=>{changeStyle('list')}}><i class="fa-solid fa-bars"></i></button>
              </div>

             </div>
             <div className ={cardStyle} >
              {fliteredArticles.map(article => <ArticleCard article={article} key={article.id} />)}


             </div>

        </div>

      </section>
    </>
  )
}

function CategoryBtn({categ, onFilter}){

  return <>
   <button className='px-4 py-2 bg-neutral-900 my-2 text-white/80 rounded-lg border-1 border-white/50 
   hover:border-orange-500/50 transition-all duration-1000
   focus:bg-gradient-to-l focus:from-orange-500 focus:to-amber-500 focus:border-0 focus:text-white'
   onClick={()=> onFilter(categ)}
   >
    {categ}
   </button>
  </>

}


