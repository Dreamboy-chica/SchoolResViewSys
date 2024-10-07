import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Addres() {
  const [data, setData] = useState({ "_id": "", "name": "", "marks": "", "dept": "", "phno": "", "gen": "" });
  const [msg, setMsg] = useState("");

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const add = () => {
    axios.post("http://localhost:5000/add", data).then((res) => {
      if (res.data.err === undefined) {
        setMsg(res.data.msg);
        setData({ "_id": "", "name": "", "marks": "", "dept": "", "phno": "", "gen": "" });
      } else {
        setMsg(res.data.err);
      }
    });
  };

  return (
    <div className="container">
     <span className='back'> <Link to="/" >X</Link></span>
      <div className={`message ${msg.includes("Error") ? 'error' : 'success'}`}>{msg}</div>
      <input type='text' placeholder='Enter HNO' name="_id" value={data._id} onChange={fun} className="input" />
      <input type='text' placeholder='Enter Name' name="name" value={data.name} onChange={fun} className="input" />
      <input type='text' placeholder='Enter Marks' name="marks" value={data.marks} onChange={fun} className="input" />
      <input type='text' placeholder='Enter Phone Number' name="phno" value={data.phno} onChange={fun} className="input" />
      <select value={data.dept} onChange={fun} name="dept" className="input">
        <option value="" disabled>Select Department</option>
        <option value="cse">Computers</option>
        <option value="ece">Electrical</option>
        <option value="eee">Electronics</option>
        <option value="ce">Civil</option>
      </select>
      <div className="radio-group">
        <label>
          <input type='radio' name='gen' value="male" onChange={fun} checked={data.gen === 'male'} /> Male
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input type='radio' name='gen' value="female" onChange={fun} checked={data.gen === 'female'} /> Female
        </label>
      </div>
      <button onClick={add} className="button btn btn-success">Submit</button>
    </div>
  );
}

export default Addres;
