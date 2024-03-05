import React, { useState } from 'react'

const AddUser = () => {

  const [user,userState] = useState({
    name : "",
    username : "",
    email : ""
    })

    const{name,username,email} = user;

    const onInputChange = (event)=>{
        userState({...user,[event.target.name]:event.target.value})
    }

  return (
    <div className="container">

      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4" >Register Form</h2>

          <div className="mb-3">

            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Enter your name' name='name' value={name} onChange={(event)=>onInputChange(event)} />

          </div>

          <div className="mb-3">

            <label htmlFor="UserName" className="form-label">User Name</label>
            <input type="text" className="form-control" placeholder='Enter your user name' name='UserName' value={username} onChange={(event)=>onInputChange(event)}/>

          </div>

          <div className="mb-3">

            <label htmlFor="Email" className="form-label">Email</label>
            <input type="text" className="form-control" placeholder='Enter your Email' name='Email' value={email} onChange={(event)=>onInputChange(event)}/>

          </div>

          <button type='submit' className="btn btn-outline-primary">Submit</button>
          <button type='submit' className="btn btn-outline-danger m-2 ">Cancel</button>

        
        </div>
      </div>
      
    </div>
  )
}

export default AddUser
