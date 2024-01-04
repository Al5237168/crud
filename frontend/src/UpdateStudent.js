import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        console.log("ID:", id); // Add this line to log the ID
        axios.put('http://localhost:8081/update/'+id, {name, email})
        .then(res=> {
            console.log("Response Data:", res.data); // Log the response data
        navigate('/')
        }).catch(err => console.log("axios_error_update",err));
    }

    return(
        <div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4">Update Students</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
        // <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        //   <div className='w-80 bg-white rounded p-3'>
        //     <form onSubmit={handleSubmit}>
        //         <h2>Update Students</h2>
        //         <div className="mb-2">
        //             <label htmlFor="">Name</label>
        //             <input type="text" placeholder="Enter Name" className="form-control" 
        //                 onChange={e => setName(e.target.value)}
        //             />
        //         </div>
        //         <div className="mb-2">
        //             <label htmlFor="">Email</label>
        //             <input type="email" placeholder="Enter email" className="form-control" 
        //                 onChange={e => setEmail(e.target.value)}
        //             />
        //         </div>
        //         <button className="btn btn-success">Update</button>
        //     </form>
        //   </div>
        // </div>
    )
}

export default UpdateStudent