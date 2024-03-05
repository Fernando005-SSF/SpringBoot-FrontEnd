import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {

    const [user,setUser] = useState({
        name:"",
        userName:"",
        email:""
    })

    const {id} = useParams()

    useEffect(()=>{
        loadUser()
 } ,[])

 const loadUser = async ()=>{
   const result =  await axios.get(`hhtp://localhost:8080/user/${id}`)
   setUser(result.data)

 }

  return (
   < div className="container">

      <div className="row">

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4" >View User</h2>
        </div>
            <div className="card">
                <div className="card-header">
                    Details of the User id :{user.id}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Name : {user.name}</b>
                        </li>

                        <li className="list-group-item">
                            <b>User Name : {user.userName}</b>
                        </li>

                        <li className="list-group-item">
                            <b>Email : {user.email}</b>
                        </li>
                    </ul>
                </div>

                <Link className="btn btn-primary my-2" to ={"/"}>Back to Home</Link>
            </div>
    </div>  
 </div>     
  )
}

export default ViewUser
