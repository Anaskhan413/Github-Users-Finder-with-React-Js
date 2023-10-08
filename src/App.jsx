import React, { useState } from 'react';
// import "./App.css"
import "./Data.css"
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUser] = useState({});
  const handlesearch = async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${input}`);
      setUser(res.data)

    } catch (error) {
      console.log(error.message)
    }
  }




  return (
    <div>

      <div className="container">
        <h1 className="text">GITHUB USER FINDER</h1>
        <input onChange={(e) => setInput(e.target.value)} type="text" name="username" id="input" placeholder="Enter Your Name" />
        <button onClick={handlesearch} className="search-btn">Search</button>
      </div>



      {Object.keys(users).length > 0 ?
        <div className="mycard">
          <img src={users.avatar_url} alt="name" style={{ width: " 200px" }} />
          <h1>{users.username}</h1>
          <p className="title"><span><b>Name </b></span> : {users.name}</p>
          <p className='comp'><span><b>Company :  </b></span>{users.company}</p>
          <p className='bio'><span><b>Bio :  </b></span>{users.bio}</p>
          <p><button className="btnnnnnn">Contact</button></p>
        </div> : (
          ""
        )}

    </div>
  )
}

export default App
