import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [docs, setDocs] = useState([]);

    const fetchDocs = () => {
        const fetchData = new FormData();
        fetchData.append("read", 'true')

        axios.post("http://localhost/React/React_ERP/src/php/doctorsApi.php", fetchData)
            .then((resp) => {
                // console.log(resp.data);
                setDocs(resp.data);
                // console.log(docs);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    console.log(docs);


    useEffect(() => {

        fetchDocs()

    }, [])

    return (
        <>
            <div className="container">
                <h1 className='text-center mt-5 bg-secondary p-3 rounded text-info'>Doctors at ReviveMe</h1>
            </div>

            <table className='table-dark table-striped table w-75 mx-auto'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docs.map((doc, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><img src={doc.photo} alt="" className="rounded-circle" width
                                        style={{ width: '50px', height: '50px' }} /></td>
                                    <td>{doc.name}</td>
                                    <td>{doc.gender}</td>
                                    <td>

                                        <Link to="/addDoctor" className='btn btn-success mx-1'>+</Link>
                                        <Link to={`/updateDoctor/${doc.id}`} className='btn btn-success mx-1'>Edit</Link>
                                        <button className="btn btn-success mx-1" to="/addDoctor">+</button>
                                        <button className="btn btn-info mx-1" onClick={() => deleteDoc(doc.id)}>Edit</button>
                                        <button className="btn btn-danger mx
                                        -1" onClick={() => deleteDoc(doc.id)}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </>
    )
}

export default Doctors