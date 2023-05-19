import React, { useState } from 'react'
import "./Join.css";
import logo from "../../images/p_chat_logo.png";
import { Link, useNavigate } from "react-router-dom";

let user;


const sendUser = () => {
    user = document.getElementById('joinInput').value;
    if (user!=="")
    {
        localStorage.setItem('myUser', String(user));
    }
    document.getElementById('joinInput').value = "";
}



const Join = () => {

    const [name, setname] = useState("");

    const navigate = useNavigate()

    function handleKeyPress(event) {
        if ((event.key === 'Enter') && name) {
          sendUser();
          navigate('/chat');
        }
      }

    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt="logo" />
                <h1>P CHAT</h1>
                <input onKeyDown={handleKeyPress} onChange={(e) => setname(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} className="joinbtn"><div className='joinFront'><div className='joinText'>JOIN</div></div></button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }
