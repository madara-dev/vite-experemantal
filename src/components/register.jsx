
// import axios from "axios";
// import { Link } from "react-router-dom";

// import { Cookies } from 'react-cookie';


import React, { useState } from 'react'
import Alert from "./alert";

function Register(props) {
  // const cookies = new Cookies();


  const [creds, setCreds] = useState({eaddress: "", });
  const [alert, setAlert] = useState(null)





  
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const RegisterSubmited = async function (e) {

    const {eaddress} = creds
    

    e.preventDefault()

    
    fetch('http://localhost:5000/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        eaddress: eaddress,

      })
    })
      .then(async (response) => response.json())
      .then( async json => {
        if (json.errors) {
          showAlert(json.errors.msg, 'denger')
        } else if(json.success) {
          showAlert(json.success, 'success')

          setTimeout(() => {
            
            props.setSession(true)
          }, 2000);
        }



      })




  }

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })

  }



  return (
     <>
      <center>

        <Alert alert={alert} />
      </center>
      <main className={`login-form`} id='regmain'>
        <div className="cotainer">


          <div className={`text-dark row justify-content-center`} >
            <div className="col-md-8">
              <div className={`card Bg-color-dark`}>


                <form onSubmit={RegisterSubmited}>
                  <div className="card-body" id='card' >



              

                    <div className="form-group row">
                      <label htmlFor="Email_Address" className={`col-md-4 col-form-label text-md-right text-light`}>Email Address</label>
                      <div className="col-md-6">


                        <input style={{ border: "1px solid black" }} type="text" id="Email_Address" onChange={onChange}
                          className="form-control" placeholder="email address" name="eaddress" value={props.value} autoFocus />


                      </div>
                    </div>

     



                    <div className="col-md-6 offset-md-4">
                      <button type="submit" className="btn btn-primary" id="btn" name="btn">
                        register
                      </button>
                      <a href="/" className="btn btn-link">

                      </a>
                    </div>


                  </div >
                </form>

              </div >
            </div >
          </div >
        </div >

      </main >
    </>

  )
}





export default Register










