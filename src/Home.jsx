import React from 'react'
import { useOutletContext } from "react-router-dom";
import ArticleCard from './ArticleCard'
import { NavLink ,Link} from "react-router-dom";


export default function Home() {
     const { articles , categories } = useOutletContext();
     const featuredArticles =articles.filter(article => article.featured === true);
     const newArticles = [...articles].sort((art1, art2) => new Date(art2.date) - new Date(art1.date)).slice(0,3);
     
     
    
     

    
  return (
    <div>
    <HeroSection/>
    <section className="blog-section">
        <div className="container mx-auto py-5">
       <div className="">
         <span className='my-5 fs-14 bg-orange-500/50 border-1 border-orange-500/30 rounded-full px-5 py-2  text-white '><i className='fa-solid fa-circle text-orange-500 fs-12 '></i>
            <i className='fa-solid fa-circle text-orange-500 fa-beat fs-12 ml-2'></i>
            مميز
            </span>
       </div>
            <div className="title my-5 block md:flex justify-between items-center">
                <div>
                    <h2 className='text-white'>مقالات مختارة</h2>
                    <p className='my-3 text-gray-400'>محتوى منتقى لبدء رحلة تعلمك</p>
                </div>
                <button className='px-4 py-3 md:my-0 my-10 text-white bg-gradient-to-l from-orange-500 to-amber-500 rounded-lg border-0 group hover:-translate-y-1 transition-all duration-1000'>عرض الكل 
                    <i className='fa-solid fa-chevron-left group-hover:-translate-x-1 transition-all duration-1000'></i> </button>
            </div>
            {featuredArticles.map(article => <BlogSection article= {article} key={article.id} />)}

            
        </div>
     </section>
     <section className="category-section bg-neutral-900 w-full">
        <div className="container mx-auto py-5">
        <div className="flex justify-center mt-10">
         <span className='my-5 fs-14 bg-orange-500/30 border-1 border-orange-500/30 rounded-full px-5 py-2 text-orange-500 '><i className='fa-solid fa-circle text-orange-500 fs-12 '></i>
            <i className='fa-solid fa-circle text-orange-500 fa-beat fs-12 ml-2'></i>
            التصنيفات
            </span>
       </div>
          <h2 className='text-center text-white my-4'>استكشف حسب الموضوع</h2>
          <p className='my-3 text-gray-400 text-center fs-20'>اعثر على محتوى مصمم حسب اهتماماتك</p>
          <div className='flex flex-wrap items-center my-10'>
            {categories.map(cate => <CategoryCards cate = {cate}/>)}
           
          </div>
        </div>

     </section>
     <section className="new-articles">
        <div className="container mx-auto my-15 py-5">
             <span className='my-5 fs-14 bg-orange-500/30 border-1 border-orange-500 rounded-full px-5 py-2  text-orange-500'><i className='fa-solid fa-circle text-orange-500 fs-12 '></i>
            <i className='fa-solid fa-circle text-orange-500 fa-beat fs-12 ml-1'></i>
            الأحدث
            </span>
            <div className="title my-5 block md:flex justify-between items-center">
                <div>
                    <h2 className='text-white'> أحدث المقالات</h2>
                    <p className='my-3 text-gray-400'>محتوى جديد طازج من المطبعة </p>
                </div>
                <p className='px-4 py-3 md:my-0 my-10 text-orange-500 font-bold border-0 group transition-all duration-1000'>عرض جميع المقالات  
                    <i className='fa-solid fa-arrow-left group-hover:-translate-x-1 transition-all duration-1000 mr-2'></i> </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 ">
               {newArticles.map(article => <ArticleCard article={article} key = {article.id}/>)}
            </div>
        </div>

     </section>
     <section className='subscribe' >
        <div className="container mx-auto my-20 ">
            <div className='bg-zinc-800 rounded-xl border-1 border-white/50 py-10  flex flex-col gap-5 justify-center items-center md:w-3/4 w-full mx-auto'>
              <div className="size-20 rounded-xl flex justify-center items-center bg-orange-500 fs-20">
                <i className='fa-regular fa-envelope text-white '></i>
              </div>
              <h3 className='text-white text-center'>اشترك في نشرتنا الإخبارية</h3>
              <h5 className='text-stone-300 font-light text-center'>احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</h5>

              <div className='md:flex md:items-center gap-4 my-3'>
                <input type="mail" placeholder='ادخل بريدك الالكتروني' className='w-full md:w-3/4 bg-neutral-900 rounded-lg border-1 my-3 border-white/50 focus:border-orange-500 placeholder:text-white placeholder:font-light outline-none p-4' />
                <button className='w-full md:w-1/4 px-4 py-2 bg-orange-500 rounded-lg text-white my-3 hover:bg-orange-600 transition-all duration-1000'>اشترك الان</button>
              </div>

            </div>



        </div>

     </section>
        
        
    </div>
  )
}

function HeroSection(){
    return <>

    <div className="hero mt-30 mx-auto ">
        <div className="container mx-auto my-5">
            <div className='flex justify-center'>
            <span className='my-5 fs-14 bg-orange-500/50 border-1 border-orange-500 rounded-full px-5 py-2  text-white'><i className='fa-solid fa-circle text-orange-500 fs-12 '></i>
            <i className='fa-solid fa-circle text-orange-500 fa-beat fs-12 ms-2'></i>
            مرحباً بك في عدسة
            </span></div>
            <h1 className='text-center text-white'>اكتشف <span className='ingradient-orange-text'>فن</span><br/>

            التصوير الفوتوغرافي</h1>
            <p className='text-center text-neutral-400 text-xl  my-5'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>

            <div className="btns text-center flex gap-3 justify-center items-center my-10">
                 <Link to="/blog">
                  <button id="explore-blogs"  className='text-white bg-orange-500 py-3 px-5 rounded-full border-0 group hover:-translate-y-2 transition-all duration-1000'>استكشف المقالات 
                    <i className='fa-solid fa-arrow-left text-white group-hover:-translate-x-1 transition-all duration-1000'></i> </button>
                </Link>
          
                <button id="learn-more"  className='py-3 px-5 rounded-full group text-white border-1 border-gray-400 hover:text-orange-500 hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-1000 '>
                <i className='fa-solid fa-circle-exclamation text-white ml-2 group-hover:text-orange-500 transition-all duration-1000'></i>اعرف المزيد </button>
              
            </div>
            <div className="flex flex-wrap  my-10">
                <div className="w-1/2 md:w-1/4 p-2 ">
                    <div className="card px-3 border-1 border-stone-400 bg-neutral-900/50 pt-4 flex flex-col items-center gap-3 justify-center rounded-lg">
                        <i className='fa-solid fa-newspaper text-orange-500 fs-20'></i>
                        <h5 className='ingradient-orange-text '>50+</h5>
                        <p className='fs-14 text-gray-400'>مقالة</p>


                    </div>
                </div>
                <div className="w-1/2 md:w-1/4 p-2 ">
                    <div className="card px-3 border-1 border-stone-400 bg-neutral-900/50 pt-4 flex flex-col items-center gap-3 justify-center rounded-lg">
                        <i className='fa-solid fa-users text-orange-500 fs-20'></i>
                        <h5 className='ingradient-orange-text fw-bold'>10 الف+</h5>
                        <p className='fs-14 text-gray-400'>قارئ</p>


                    </div>
                </div>
                <div className="w-1/2 md:w-1/4 p-2 ">
                    <div className="card px-3 border-1 border-stone-400 bg-neutral-900/50 pt-4 flex flex-col items-center gap-3 justify-center rounded-lg">
                        <i className='fa-solid fa-folder-open text-orange-500 fs-20'></i>
                        <h5 className='ingradient-orange-text fw-bold'>4+</h5>
                        <p className='fs-14 text-gray-400'>تصنيفات</p>
                        

                    </div>
                </div>
                <div className="w-1/2 md:w-1/4 p-2 ">
                    <div className="card px-3 border-1 border-stone-400 bg-neutral-900/50 pt-4 flex flex-col items-center gap-3 justify-center rounded-lg">
                        <i className='fa-solid fa-pen-nib text-orange-500 fs-20'></i>
                        <h5 className='ingradient-orange-text fw-bold'>6+</h5>
                        <p className='fs-14 text-gray-400'>كاتب</p>


                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}

function BlogSection({article}){
  
  
  
    return<>
          <Link to={`/blog/${article.id}`}>
            <div className="md:flex group my-5 ">
                <div className=" overflow-hidden p-0">
                    <div className="relative">
                        <img src={article.image} alt=""className='w-full block rounded-t-xl md:rounded-r-xl md:rounded-tl-none group-hover:scale-1.1' />
                        <div className="isFav fs-14 absolute bg-gradient-to-l from-orange-500 to-amber-500 top-4 right-4 text-white px-3 py-1 rounded-full"><i className='fa-solid fa-star fs-12 text-white ms-1'></i> <span>مميز</span></div>
                    </div>
                </div>
                <div className="md:flex bg-zinc-900 rounded-b-xl md:rounded-l-xl md:rounded-br-none p-5">
                    <div className="">
                        <div className='flex items-center gap-5 my-4'>
                            <div className=' font-semibold text-orange-500  bg-orange-500/50 border-1 border-orange-500/30 rounded-full fs-14 px-3 py-1 category'>{article.category}</div>
                            <div className='flex items-center gap-2 fs-14 text-stone-300 opacity-40'>
                                <i className='fa-solid fa-clock-four mt-1'></i>
                                <span>{article.readTime}</span>
                            </div>
                            
                        </div>
                        <h5 className='font-bold text-white my-3 group-hover:text-orange-500 transitin-all duration-1000'>{article.title}</h5>
                        <p className='text-slate-300 font-light '>{article.excerpt}</p>
                         <div>
                            <div className="publisher-details flex items-center justify-between mt-10">
                                <div className='flex items-center gap-3'>

                                    <div className='relative'>
                                        <img src={article.author.avatar} alt="" className='size-13 rounded-full border-1 border-gray-700' />

                                         <i className='fa-solid fa-circle text-orange-500 absolute -bottom-1 left-0'></i>
                                    </div>
                                    
                                    <div>
                                        <p className='text-white font-bold '> {article.author.name}</p>
                                        <p className='fs-12 my-2 text-slate-400'>{article.date}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p className='text-orange-500 font-bold group-hover:translate-x-2 transition-all duration-1000'>اقرأ المقال </p>
                                    <i className='fa-solid fa-arrow-left text-orange-500'></i>
                                </div>

                            </div>
                         </div>

                    </div>
                </div>

            </div>
</Link>
    </>
}

function CategoryCards({cate}){
    return <>
      <div className='p-3 w-1/2 md:w-1/4'>
      <div className="inner relative group transition-all duration-1000 hover:-translate-y-2 p-6 bg-neutral-800 flex flex-col justify-between  rounded-lg border-1 border-gray-600/50 ">
             <div className="absolute rounded-lg inset-0 bg-gradient-to-l from-amber-500 via-orange-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className='relative z-10'>
                 <div className='bg-orange-500/30 border-1 border-orange-500/50 size-12 rounded-md flex justify-center items-center group-hover:bg-gray-300/50 transition-all duration-1000'>
                <i className='fa-solid fa-sun text-orange-500 group-hover:text-white transition-all duration-1000'></i>
             </div>
             <h5 className='text-white my-2'>{cate.name}</h5>
             <p className='text-gray-400 font-light group-hover:text-white transition-all duration-1000'> {cate.count} مقالات</p>
             <div className='size-8 rounded-full bg-gray-300/50 text-center leading-8 absolute top-1 left-0 hidden group-hover:block transition-display duration-1000'>
             <i className='fa-solid fa-angle-left text-white'></i>
             </div>
            </div>
          </div>
          </div>
    </>
}
