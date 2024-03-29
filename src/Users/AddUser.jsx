import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddUser = () => {

    let navigate = useNavigate();

  const [user,userState] = useState({
    name : "",
    userName : "",
    email : ""
    })

    const{name,userName,email} = user;

    const onInputChange = (event)=>{
        userState({...user,[event.target.name]:event.target.value})
    }

    const onSubmit = async(event) =>{

      event.preventDefault()
      await axios.post("http://localhost:8080/user",user)
      navigate("/")

    }


   

  return (
    <div className="container">

      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4" >Register Form</h2>

       
      <form onSubmit={(event)=> onSubmit(event)}>
          <div className="mb-3">

            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Enter your name' name='name' value={name} onChange={(event)=>onInputChange(event)} />

          </div>

          <div className="mb-3">

            <label htmlFor="UserName" className="form-label">User Name</label>
            <input type="text" className="form-control" placeholder='Enter your user name' name='userName' value={userName} onChange={(event)=>onInputChange(event)}/>

          </div>

          <div className="mb-3">

            <label htmlFor="Email" className="form-label">Email</label>
            <input type="text" className="form-control" placeholder='Enter your Email' name='email' value={email} onChange={(event)=>onInputChange(event)}/>

          </div>

          <button type='submit' className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger m-2 " to="/">Cancel</Link>

          </form>
        </div>
      </div>
      
    </div>
  )
}

export default AddUser
