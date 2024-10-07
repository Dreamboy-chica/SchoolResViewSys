import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Ct from './Ct';
import './App.css'; // Import the CSS file

const Home = () => {
    let [data, setData] = useState([]);
    let [ids, setIds] = useState([]);
    let [f, setF] = useState(true);
    let navigate = useNavigate();
    let obj = useContext(Ct);

    useEffect(() => {
        axios.get("http://localhost:5000/data").then((res) => {
            setData(res.data);
        });
    }, [f]);

    let fun = (fname) => {
        axios.get(`http://localhost:5000/sortdata/${fname}`).then((res) => {
            setData(res.data);
        });
    }

    let view = (item) => {
        obj.updfun({ "item": item });
        navigate("/getres");
    }

    let edit = (item) => {
        obj.updfun({ "item": item });
        navigate("/edit");
    }

    let chk = (e, id) => {
        if (e.target.checked) {
            setIds([...ids, id]);
        } else {
            ids.splice(ids.indexOf(id), 1);
            setIds([...ids]);
        }
    }

    let del = () => {
        if (ids.length > 0) {
            axios.post("http://localhost:5000/del", { "ids": ids }).then(() => {
                setF(!f);
            });
        }
    }

    return (
        <div className="home-container">
            <table>
                <thead>
                    <tr>
                        <th>Select</th> {/* Keep the header title for the checkbox column */}
                        <th onClick={() => fun('_id')}>HNO</th>
                        <th onClick={() => fun('name')}>Name</th>
                        <th onClick={() => fun('dept')}>Dept</th>
                        <th onClick={() => fun('gen')}>Gender</th>
                        <th onClick={() => fun('marks')}>Marks</th>
                        <th>PhNo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td><input type='checkbox' onChange={(e) => chk(e, item._id)} /></td>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.dept}</td>
                            <td>{item.gen}</td>
                            <td>{item.marks}</td>
                            <td>{item.phno}</td>
                            <td>
                                <button onClick={() => view(item)} className='m-2 btn btn-success'>View</button>
                                <button onClick={() => edit(item)} className='btn btn-success'>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="m-2 btn btn-success">
                <Link to="/add" style={{ color: 'white', textDecoration: 'none' }}>Add Results</Link>
            </button>
            <button onClick={del} className='btn btn-danger'>Delete</button>
        </div>
    );
    
    
}

export default Home;
