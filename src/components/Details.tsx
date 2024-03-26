import React ,{ useState }from 'react'

import { useLocation } from 'react-router-dom'
import moment from 'moment'
import Footer from './Footer'
import '../../src/index.css'
import HeaderDetails from './HeaderDetails'
interface menuProps {
  setMenu: any;
  setSearch: any;
  searchRef: any;
}
const Details = (props: menuProps) => {
  const [searchIcon, setsearchIcon] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
    const location=useLocation()
    console.log(location)
  return (
    <>
    
    <div className='navbarDetails flex pb-[7px]'>
    <img
          className="w-[2rem] h-[2rem] cursor-pointer pl-[6px] pr-[9px] pb-[9px] pt-[8px]"
          onClick={() => setSideMenu(true)}
          src={
            "https://visualpharm.com/assets/18/Menu-595b40b75ba036ed117d66e5.svg"
          }
          alt="menu"
        />
        {sideMenu && (
          <div
            className="font-bold text-sm pl-5 pt-[27rem] pb-4 z-10 absolute bg-white mt-52 shadow-2xl border border-gray-300 left-0 w-48 "
            onMouseLeave={() => setSideMenu(false)}
          >
            {/* menuoption */}
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Home")}
            >
              Home Page
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("World")}
            >
              World
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Business")}
            >
              Business
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Politics")}
            >
              U.S. Politics
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("News")}
            >
              U.S. News
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Sports")}
            >
              Sports
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Health")}
            >
              Health
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Home")}
            >
              N.Y.
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Opinion")}
            >
              Opinion
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Tech")}
            >
              Tech
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Science")}
            >
              Science
            </h1>
            <hr />
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Arts")}
            >
              Arts
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Review")}
            >
              Book Review
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Style")}
            >
              Style
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Food")}
            >
              Food
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Travel")}
            >
              Travel
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Magazine")}
            >
              Magazine
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Magazine")}
            >
              T Magazine
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Estate")}
            >
              Real Estate
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Obituaries")}
            >
              Obituaries
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Video")}
            >
              Video
            </h1>
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("Graphics")}
            >
              Graphics
            </h1>
            <hr />
            <h1
              className="mt-2 cursor-pointer"
              onClick={() => props?.setMenu("More")}
            >
              More
            </h1>
          </div>
        )}
        <img
          className="w-[16px] h-[16px] ml-[1rem] mt-[8px] cursor-pointer"
          onClick={() => setsearchIcon(!searchIcon)}
          src={
            "https://visualpharm.com/assets/398/Search-595b40b85ba036ed117db03b.svg"
          }
          alt="search"
        />
        {searchIcon && (
          <input
            className=" searchInput border border-black rounded-sm p-1 ml-2"
            onChange={(e) => props?.setSearch(e.target.value)}
            placeholder="SEARCH"
          />
        )}
        {searchIcon && (
          <button
            className=" Gobutton bg-blue-100 text-white text-xs font-medium p-2 rounded-sm ml-1 cursor-default"
            onClick={() =>
              props?.searchRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            GO
          </button>
        )}
      <img className='w-[12.2rem] ml-[36.5rem] mt-[5px]' src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg" alt="" />
      <button className=" rightButtonDetails text-xs ml-[27rem] bg-slate-500 p-1 w-[9rem] text-white font-bold rounded-sm">
          PLAY SPELLING BEE
        </button>
        <button className=" rightButton h-[1.75rem] text-xs ml-1 bg-slate-500 p-1 w-[60px] text-white font-bold rounded-sm">
          LOG IN
        </button>
    </div>
    <HeaderDetails/>

    <div className='pl-32 mt-10'>
        <div className='w-9/12 pl-40'>
        <h1 className='font-semibold text-4xl font-serif  titleDetail'>{location?.state?.data?.title}</h1>

        <h1 className='font-serif text-2xl mt-3 titleDetail descriptionDeatil'>{location?.state?.data?.description}</h1>
        <div  className='flex updates mt-[20px] mb-[20px]'>
        <p><span className='mr-[5px]'>Published</span>{moment(location?.state?.data?.publishedAt).format("MMMM DD, YYYY")}</p>
        <p><span className='mr-[5px]'>Updated</span>{moment(location?.state?.data?.updated).format("MMMM DD, YYYY")}</p>
        </div>
        <div className='flex buttonsStyle '>
          <div className=' borderButton'>
            <div className='flex borderButtonShare '>
          <img className='w-[19px] h-[19px] mt-[2px] mr-[5px]' src="https://cdn.iconscout.com/icon/free/png-512/free-gift-3239302-2699141.png?f=webp&w=256" alt="" />
          <button className='textShare'>Share full article</button>
            </div>
          </div>
          <div className=' borderButton shareButton p-[6px]'>
          <button><img className='w-[22px] h-[21px]' src="https://cdn.iconscout.com/icon/free/png-512/free-arrow-1976201-1674187.png?f=webp&w=256" alt="share" /></button>

          </div>
          <div className=' borderButton bookmarkButton p-[6px]'>
          <button><img className='w-[24px] h-[21px]' src="https://cdn.iconscout.com/icon/free/png-512/free-bookmark-209-433810.png?f=webp&w=256" alt="" /></button>

          </div>

        </div>
        </div>
        <img className='w-[86%] mt-[3rem] ml-[32px]' src={location?.state?.data?.urlToImage} alt="" />
        <div className='flex items-center font-bold mt-4'>
        </div>
        <h1 className='font-serif text-2xl mt-3 w-9/12 pl-40 mb-[10px]'>{location?.state?.data?.content}</h1>

    </div>
    <Footer />
    </>
    
  )
}

export default Details