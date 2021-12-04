import React from 'react'
import App from '../App.js'


export default function Login(props) {
    return (
      
        <>
        {/* let changea =function () {
          props.name="Admin"
          
        } */}
     {/* {changea = e =>{  
    
    let fields = { ...this.state.fields };
    fields[e.target.name] =  e.target.value
    this.setState({fields});
}} */}

      
<div className="text-center my-3">

</div>

<form className="text-center my-2 mx-5" style={{paddingLeft:"20%",width:"80%"}} >
    
    <h1 className="text-center my-3"> {props.name} Login </h1>

    <div className="form-floating">
      <input type="text" className="form-control my-3" id="floatingInput" placeholder={props.name} name  />
      <label htmlfor="floatingInput">{props.name} Name</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control my-3" id="floatingPassword" placeholder="Password"/>
      <label htmlfor="floatingPassword">Password</label>
    </div>
    <div className="checkbox mb-3">
      <label className="mb-3">
        <input type="checkbox" value="terms and condtions"/>{" "}I Abide By Hospital Rules and Regulations 
      </label>
    </div>

    
    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
   
  </form>
        
        </>
    )
}
