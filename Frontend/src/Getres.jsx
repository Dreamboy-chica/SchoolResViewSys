import  { useContext, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { Link } from 'react-router-dom'

const Getres = () => {
    let obj=useContext(Ct)
 
    let [data,setdata]=useState(obj.data.item)
  
  return (
    <div>
        <button><Link to="/">X</Link></button>
       <table>
        <tr><th>HNO</th><td>{data._id}</td></tr>
        <tr><th>Name</th><td>{data.name}</td></tr>
        <tr><th>Marks</th><td>{data.marks}</td></tr>

        </table>
    </div>
  )
}

export default Getres