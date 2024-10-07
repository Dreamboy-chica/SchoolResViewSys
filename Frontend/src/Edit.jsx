import { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Ct from './Ct';
import './App.css'; // Import the CSS file

function Edit() {
    let obj = useContext(Ct);
    let navigate = useNavigate();
    let [data, setData] = useState({ ...obj.data.item });
    let [msg, setMsg] = useState("");

    let fun = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    let upd = () => {
        axios.post("http://localhost:5000/upd", data).then((res) => {
            if (res.data.err === undefined) {
                navigate("/");
            } else {
                setMsg(res.data.err);
            }
        });
    }

    return (
        <div className="edit-container">
            <div className="back">
                <Link to="/">X</Link>
            </div>
            {msg && <div className="error-message">{msg}</div>}
            <input
                type='text'
                placeholder='Enter HNo'
                name="_id"
                value={data._id}
                onChange={fun}
                className="input"
            />
            <input
                type='text'
                placeholder='Enter Name'
                name="name"
                value={data.name}
                onChange={fun}
                className="input"
            />
            <input
                type='text'
                placeholder='Enter Marks'
                name="marks"
                value={data.marks}
                onChange={fun}
                className="input"
            />
            <input
                type='text'
                placeholder='Enter PhNo'
                name="phno"
                value={data.phno}
                onChange={fun}
                className="input"
            />
            <select value={data.dept} onChange={fun} name="dept" className="input">
                <option value="" selected disabled>Select Dept</option>
                <option value="cse">Computers</option>
                <option value="ece">Electrical</option>
                <option value="eee">Electronics</option>
                <option value="ce">Civil</option>
            </select>
            <div className="radio-group">
                <label>
                    <input
                        type='radio'
                        name='gen'
                        value="male"
                        onChange={fun}
                        checked={data.gen === 'male'}
                    /> Male
                </label>
                <label>
                    <input
                        type='radio'
                        name='gen'
                        value="female"
                        onChange={fun}
                        checked={data.gen === 'female'}
                    /> Female
                </label>
            </div>
            <button onClick={upd} className="button">Update</button>
        </div>
    );
}

export default Edit;
