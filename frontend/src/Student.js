import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Student(){
    const [student, setStudent] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/' ,{ withCredentials: false })
        .then(res => setStudent(res.data))
        .catch(err => console.log("Error-axios",err));
      }, [])

      const handleDelete = async (id) =>{
        try{
          await axios.delete('http://localhost:8081/student/'+id)
          window.location.reload()
        }catch(err){
          console.log(err);
        }
      }
  
    return (
      
    <div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <Link to='/create' className='btn btn-success mb-3'>Add +</Link>
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <Link to={`update/${data.ID}`} className="btn btn-primary me-2 mb-2 mb-md-0">
                    Update
                  </Link>
                  <button className="btn btn-danger" onClick={e => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    );
}

export default Student