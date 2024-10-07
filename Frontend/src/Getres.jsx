import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Ct from './Ct';
import './App.css'; 

const Getres = () => {
    let obj = useContext(Ct);
    let [data, setData] = useState(obj.data.item || {});

    return (
        <div className="contain">
            <Link to="/" className="getback"><button>X</button></Link>
            {data && Object.keys(data).length > 0 ? (
                <table>
                    <tbody>
                        <tr><th>HNO</th><td>{data._id}</td></tr>
                        <tr><th>Name</th><td>{data.name}</td></tr>
                        <tr><th>Marks</th><td>{data.marks}</td></tr>
                    </tbody>
                </table>
            ) : (
                <p className="no-data">No data available</p>
            )}
        </div>
    );
};

export default Getres;
