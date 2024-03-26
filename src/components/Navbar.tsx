import React, { useState } from "react";
import moment from "moment";
import "../../src/index.css";
interface menuProp {
  setMenu: any;
  setSearch: any;
  searchRef: any;
}
const Navbar = (props: menuProp) => {
  const [searchIcon, setsearchIcon] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  

  return (
    <div className="header gird grid-rows-3 ">
      <div className="flex items-center">
        <img
          className="w-5 h-5 cursor-pointer"
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
          className="w-[16px] h-[16px] ml-5 cursor-pointer"
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
        {searchIcon ? (
          <h1 className=" fontOfHeader text-xs ml-[8.1rem] ">U.S.</h1>
        ) : (
          <h1 className=" fontOfHeader text-xs ml-[25rem]">U.S.</h1>
        )}

        <h1 className=" fontOfHeader text-xs font-semibold ">INTERNATIONAL</h1>
        <h1 className=" fontOfHeader text-xs ">CANADA</h1>
        <h1 className=" fontOfHeader text-xs ">ESPANOL</h1>
        <h1 className=" fontOfHeader fontSize  ">中文</h1>

        <button className=" rightButton text-xs ml-[14rem] bg-slate-500 p-1 w-[9rem] text-white font-bold rounded-sm">
          PLAY SPELLING BEE
        </button>
        <button className=" rightButton text-xs ml-1 bg-slate-500 p-1 w-[60px] text-white font-bold rounded-sm">
          LOG IN
        </button>
      </div>

      <div className="flex items-center">
        <div>
          <h1 className=" dateFont font-bold text-xs ">
            {moment(new Date()).format("dddd, MMMM D, YYYY")}
          </h1>
          <h1 className="dateFont today">Today's paper</h1>
        </div>

        <img
          className=" w-[27rem] h-[5rem] ml-[14rem]"
          src="https://myaccount.nytimes.com/lire_ui/img/nyt-logo.svg"
        />
      </div>
      <div>
        <div className="mb-[14px] ">
        <hr className="mt-[-6px]" />
        <div className=" horizontalLine flex items-center text-sm mt-[18px]">
            <div className="flex items-center hoverLine">
              <h1 className="ml-[172px] cursor-pointer" onClick={() => props?.setMenu("US")}><span>U.S.</span></h1>
              <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
            </div>
          
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("World")}><span>World</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Business")}><span>Business</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Arts")}><span>Arts</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Lifestyle")}><span>Lifestyle</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Opinion")}><span>Opinion</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center ">
            <h1 className="divider">|</h1>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Audio")}><span>Audio</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Games")}><span>Games</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Cooking")}><span>Cooking</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Wirecutter")}><span>Wirecutter</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
          <div className="flex items-center hoverLine">
            <h1 className=" cursor-pointer" onClick={() => props?.setMenu("Athletic")}><span>The Athletic</span></h1>
            <img className="downArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAP1BMVEX///+IiIiEhISAgID7+/vj4+P4+Pjx8fF9fX2MjIzn5+eVlZWgoKCkpKSYmJjS0tLKysq2trbBwcHY2NisrKyVXCnIAAAB1klEQVR4nO3ZzXaCMBBAYZOIgKCg9P2ftYwWGWylQBJgcb9VV3Omt/yE08MBAAAAAAAAAAAAAAAAWOKYVMkxyKRTUp2DDDokRZZl1xDDGtNOKtMAk1JrjTHW+G9VySBjy5P/UjdnHrNM4rvTc5Bxlf9Spflh/baqbTfnFnKp3GerKuvmuABL3d1rK49Wr07tmMZ/qVNu+1ZLr/bm1cm4i/9O7e1X9L+lW9ZKdyrDPPLOfSuz6LrSna4BHggPulU2/y9Yu77TJUwn4dUqSifh0SpSJzFoNWerxkXqJBa2ithJLGrV2IidxKDVtKu9zqJ2ErrVpJNMFbuTSPNZz/YVOolZrVQnW8TbaVarWr+DY+7Utiom3oOrdRKq1dj5atAp1jXe060+nttX7SR0qw9bVW7VTkK1+nsr3em6RifxT6sNOonRVhHOvtOMtKrUfRfiY3gGfQ9a/bzarJPQrdQJecNOQrdyXatNOz22yn89RTfuJNL3Vpt3Em+tmu07Cd3K3tXPkc8q43Qru4tOQrfaRycxuK6enaJ9I0z33mr7TmLYyq12Vhk3uAd30Un0rfbSSXRv59jfUvM838576iROX7nN7/vaqZWeQ/wnCAAAAAAAAAAAIJRvoQ8OuiUTEeYAAAAASUVORK5CYII=" alt=""/>
          </div>
        </div>
        </div>
        <div className="doubleBorder mb-[2px]"></div>
        <div className="doubleBorder"></div>

        
      </div>
      {/* <div className="navSection">
        <ul className="flex items-center">
          <li className="liveColor">LIVE</li>
          <li className="hoverText">Texas Immigration Law<span className="color">1hr ago</span></li>
          <li className="hoverText">Federal Reserve Meeting<span className="color">1hr ago</span></li>
          <li className="hoverText"> Middle East Crisis<span  className="color">1hr ago</span></li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
