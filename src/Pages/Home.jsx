import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

  return (
    <div className='container'>
        <div className='py-5'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

        {
            users.map((user,index)=>(
                <tr>
                     <th scope="row" key={index}>{index+1}</th>
                    <td>{user.name}</td>
                     <td>{user.userName}</td>
                    <td>{user.email}</td>
                 </tr>
            ))
        }
    
   
  </tbody>
</table>
        </div>
      
    </div>
  )
}

export default Home
