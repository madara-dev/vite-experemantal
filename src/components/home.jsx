import React, { useState, useEffect } from 'react'
import Register from './register'
import Dashboard from './dashboard';
import Alert from "./alert";




export default function Home() {
  // const [email, setEmail] = useState('');
  // const [clicks, setClicks] = useState({clicks:''});

  const [session, setSession] = useState('')
  const [alert] = useState(null)



  useEffect(() => {
    fetch('http://localhost:5000/jwt_decoder', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((response) => response.json())
      .then(json => {
          // console.log(json);
          if (json.success) {
            setSession(true)
            
            // setEmail(json.name)
  
            
            // setClicks(json.clicks)
            
          }else{
            setSession(false)
          }
      })
  }, []);



  function Item({isPacked, email,clicks }) {
    if (!isPacked) {
      return <Register setSession={setSession}/>;
    }else{

      return <Dashboard email={email} clicks={clicks}/>;
    }
  }


  return (
    <>
      <center>

        <Alert alert={alert} />
      </center>

      <Item
        isPacked={session} />
    </>
  )
}
