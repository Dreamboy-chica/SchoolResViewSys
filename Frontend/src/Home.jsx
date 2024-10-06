import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Home = () => {
  let [data,setData]=useState([])
  let [ids,setids]=useState([])
  let [f,setF]=useState(true)
  let navigate=useNavigate()
  let obj=useContext(Ct)
  useEffect(()=>{
    axios.get("http://localhost:5000/data").then((res)=>{
      setData(res.data)
    })

  },[f])
  let fun=(fname)=>{
    axios.get(`http://localhost:5000/sortdata/${fname}`).then((res)=>{
      setData(res.data)
    })
  }
  let view=(item)=>{
    obj.updfun({"item":item})
    navigate("/getres")

  }
  let edit=(item)=>{
    obj.updfun({"item":item})
    navigate("/edit")

  }
  let chk=(e,id)=>{
    if(e.target.checked)
    {
      setids([...ids,id])
    }
    else{
      ids.splice(ids.indexOf(id),1)
      setids([...ids])

    }
    
  }
  let del=()=>{
    if(ids.length>0)
    {
    axios.post("http://localhost:5000/del",{"ids":ids}).then(()=>{
      setF(!f)

    })
  }
  }
  return (
    <div>
      <table>
        <tr>
          <th onClick={()=>fun('_id')}>HNO</th>
          <th onClick={()=>fun('name')}>Name</th>
          <th onClick={()=>fun('dept')}>Dept</th>
          <th onClick={()=>fun('gen')}>gender</th>
          <th onClick={()=>fun('marks')}>Marks</th>
          <th>Phno</th>
        </tr>
        {
          data.map((item)=>{
            return(<tr>
              <td><input type='checkbox' onChange={(e)=>chk(e,item._id)}/></td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.dept}</td>
              <td>{item.gen}</td>
              <td>{item.marks}</td>
              <td>{item.phno}</td>
              <td><button onClick={()=>view(item)}>View</button></td>
              <td><button  onClick={()=>edit(item)}>Edit</button></td>
            </tr>)
          })
        }
      </table>

      <button>
        <Link to="/add">Addresults</Link>
        
      </button>
      <button onClick={del}>delete</button>
    </div>
  )
}

export default Home