import React from 'react'

export default function Recup() {
    <style>
        
    </style>
    function request(){

        // const name=document.getElementById('paid')
       // document.getElementById("di").innerHTML="We will let you Know your Appointment timing via SMS to your given  mobile number"
         alert("We will let you Know your Appointment timing via SMS to your given  mobile number")
    }
    return (
        <div style={{paddingLeft:"35%",paddingRight:"15%"}}>
            
<form className="center my-2 mx-5" style={{ paddingLeft:"5%",paddingRight:"5%",width:"60%", border:"double-dark" , backgroundColor:"violet"}} >
   
    <h2 style={{textAlign: 'center'}}>New Recuruitment</h2> 
    <div className="form-floating my-3">
      <input type="text" className="form-control " id="floatingInput" placeholder="Patient Name"  />
      <label  htmlfor="floatingInput">Doctor Name</label>
    </div>
     <dl/>
<div style={{display:'inline-block'}}>
     <h6 id="g">Gender:</h6>
    <div className="form-check my-3" >
    <label id="g" className="form-check-label" >
    Male
  </label>
  <input id="g" className="form-check-input" type="radio" name="flexRadioDefault" />
  
  <div/>

<div className="form-check my-3">
<label id="g" className="form-check-label" >
    Female
  </label>
  <input id="g" className="form-check-input" type="radio" name="flexRadioDefault" />
  
</div>
<div className="form-check my-3">
<label id="g" className="form-check-label">
    Others
  </label>
  <input id="g" className="form-check-input my-3" type="radio" name="flexRadioDefault" />
  </div>
</div>
   
   <label htmlfor="Age">Age:</label> 
   <input className="form-control my-3"  type="number" placeholder="Age:" required/>
   <label>Mobile Number:</label>
   <input className="form-control my-3  "  type="tel" pattern="[789][0-9]{9}" placeholder="Mobile Number:" required/>
   <label>Email ID:</label>
   <input className="form-control my-3  " type="email" placeholder="Email"/>
   <label>Address:</label>
   <input className="form-control my-3 "  type="text" placeholder="Address:" required/>
   <label> Recuruitment Date:</label>
   <input className="form-control my-3"  type="date" placeholder="Recuruitment Date" required/>
   <label>Field of expertise:</label>
   <select className="form-select"  required>
       <option value="Pediatrician">Pediatrician</option>
       <option value="Gynecologists">Gynecologists</option>
       <option value="Child Psychologist/Psychiatrist">Child Psychologist/Psychiatrist</option>
       <option value="Dermatologist">Dermatologist</option>
       <option value="Cardiologist">Cardiologist </option>
       <option value="Ear, Nose, and Throat Specialist"> Ear, Nose, and Throat Specialist</option>
       <option value="Neurologist">Neurologist </option>
       <option value="Therapist ">Therapist</option>
       <option value="Audiologist"> Audiologist</option>
       <option value="Psychologist">Psychologist</option>
       <option value="Dentist ">Dentist </option>
       <option value="Allergist">Allergist</option>
       <option value="Endocrinologist ">Endocrinologist </option>
       <option value="Others">Others</option>
   </select>
   
 
   <button className="btn btn-outline-success my-3" style={{padding:"3%",paddingLeft:"5%",width:"35%"}} type="submit"   id="su">Request</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <button className="btn btn-outline-danger my-3" style={{padding:"3%",paddingLeft:"5%",width:"35%"}} type="reset"  id="re">Reset</button>
   <br/><br/>
 </div>
</form>


      </div> 

       
    )
}
