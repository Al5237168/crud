import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('https://crud-backend-production-62ae.up.railway.app/create', {name, email})
        .then(res=> {
            console.log(res);
            navigate('/')
        }).catch(err => console.log("axios_error",err));
    }

    return(
        <div className='d-flex flex-column min-vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 w-md-75 w-lg-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center">Add Students</h2>
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
          <div className="text-center">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
        // <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        //   <div className='w-80 bg-white rounded p-3'>
        //     <form onSubmit={handleSubmit}>
        //         <h2>Add Students</h2>
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
        //         <button className="btn btn-success">Submit</button>
        //     </form>
        //   </div>
        // </div>
    )
}

export default CreateStudent