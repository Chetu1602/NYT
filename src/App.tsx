import React,{ useEffect, useRef, useState }  from 'react'
import Login from './components/Login';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';

const App = () => {
  const [news, setNews] = useState([]);
  const [menu,setMenu]=useState("");
  const[search,setSearch]=useState("");
  const searchRef=useRef(null)

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path ='/' element={<Main/>}/>
      <Route path='/details' element={<Details searchRef={searchRef} setMenu = {setMenu} setSearch={setSearch}/>}/>
    </Routes>
    {/* <Main/> */}

    </>
    
  )
}
export default App;

