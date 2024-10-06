import  { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Addres() {
  let [data,setData]=useState({"_id":"","name":"","marks":"","dept":"","phno":"","gen":""})
  let [msg,setMsg]=useState("")
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/add",data).then((res)=>{
      if(res.data.err==undefined)
      {
        setMsg(res.data.msg)
        setData({"_id":"","name":"","marks":"","dept":"","phno":"","gen":""})
      }
      else{
        setMsg(res.data.err)
      }

    })

  }
  return (
    <div>
      <button><Link to="/">X</Link></button>
      <div>{msg}</div>
      <input type='text' placeholder='enter hno' name="_id" value={data._id} onChange={fun}/>
      <input type='text' placeholder='enter name' name="name" value={data.name} onChange={fun}/>
      <input type='text' placeholder='enter marks' name="marks" value={data.marks} onChange={fun}/>
      <input type='text' placeholder='enter phno' name="phno" value={data.phno} onChange={fun}/>
      <select value={data.dept} onChange={fun} name="dept">
        <option value="" selected disabled>select dept</option>
        <option value="cse">computers</option>
        <option value="ece">electrical</option>
        <option value="eee">electronics</option>
        <option value="ce">civil</option>

      </select>
      <input type='radio' name='gen' value="male"  onChange={fun} checked={data.gen=='male'}/>Male
      <input type='radio' name='gen' value="female"  onChange={fun} checked={data.gen=='female'}/>Female
      <button onClick={add}>addres</button>

    </div>
  )
}

export default Addres