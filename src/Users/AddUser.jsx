import React from 'react'

const AddUser = () => {
  return (
    <div className="container">

      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4" >Register Form</h2>

          <div className="mb-3">

            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" placeholder='Enter your name' name='name' />

          </div>

          <div className="mb-3">

            <label htmlFor="UserName" className="form-label">User Name</label>
            <input type="text" className="form-control" placeholder='Enter your user name' name='UserName' />

          </div>

          <div className="mb-3">

            <label htmlFor="Email" className="form-label">Email</label>
            <input type="text" className="form-control" placeholder='Enter your Email' name='Email' />

          </div>

          <button type='submit' className="btn btn-outline-primary">Submit</button>
          <button type='submit' className="btn btn-outline-danger m-2 ">Cancel</button>

        
        </div>
      </div>
      
    </div>
  )
}

export default AddUser
