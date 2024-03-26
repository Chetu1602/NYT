import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import News from "./News";
import Footer from "./Footer";
import '../../src/index.css';

const Main = () => {
  const [news, setNews] = useState([]);
  const [menu,setMenu]=useState("");
  const[search,setSearch]=useState("");

  const searchRef=useRef(null)
  const getNews = async () => {
    try {
      await fetch(
        `https://newsapi.org/v2/everything?q=${menu ? menu : "politics"}&sortBy=popularity&apiKey=5336fbf2979e40e0a9424dc20e8537d6`
      )
        .then((res) => res.json())
        .then((json) => setNews(json?.articles));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getNews();
  }, [menu]);
  return (
    <div>
      <Navbar searchRef={searchRef} setMenu = {setMenu} setSearch={setSearch}/>
      <div className="content flex mt-3">
        <Home news={news} num="8" />
        <Sidebar news={news} num="5" />
      </div>
      <div className=" content flex mt-3">
        <Home news={news} num="1" />
        <Sidebar news={news} num="6" />
      </div>

      <div className="content flex mt-3">
        <Home news={news} num="2" />
        <Sidebar news={news} num="7" />
      </div>

      <div className=" content flex mt-3">
        <Home news={news} num="3" />
        <Sidebar news={news} num="8" />
      </div>

      <div className="content flex mt-3">
        <Home news={news} num="4" />
        <Sidebar  news={news} num="9" />
      </div>
      <div className="newsMargin">
      <div className="hr"></div>
      </div>

      
    <News searchRef={searchRef} search={search} news={news}/>
    <Footer setMenu={setMenu}/>
    </div>
  );
};

export default Main;
