import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Addres from './Addres'
import Getres from './Getres'
import Ct from './Ct'
import { useState } from 'react'
import Edit from './Edit'
const App = () => {
  let [data,setData]=useState({})
  let updfun=(obj)=>{
    setData({...data,...obj})
  }
  let obj={"data":data,"updfun":updfun}
  return (
   <BrowserRouter>
  <Ct.Provider value={obj}>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/add' element={<Addres/>}/>
    <Route path='/getres' element={<Getres/>}/>
    <Route path='/edit' element={<Edit/>}/>
   </Routes>
   </Ct.Provider>
   
   </BrowserRouter>
  )
}

export default App