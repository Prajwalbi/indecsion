import { useState } from 'react';
import './App.css'

function Ternary() {
 const users = {
  name: "Rana",
  age: 12,
  location: "pune"
 
 }

 const checkLocation = (location) => {
  console.log(location);
    if((location) === (undefined || null)){
       return null;
    }else{
      return <p>Location: {location}</p>
    }
    
 }
 let app1 = {
  tittle: "course",
  subtitle: "Brand new : Reactg course",
  option: ["One", "Two"]
}

const getFullName = name => name.split(" ")[0];
console.log(getFullName("Prajwal B I"));

  return (
    // <>
    //   <h1>User Info</h1>
    //   <h4>{users.name}</h4>
    //   {/* <p>age: {users.age}</p> */}
    //   {users.age >= 18 && <p>age: {users.age}</p>}
    //   {checkLocation(users.location)}
       
      
    //   {/* {users.location ? <p>{users.location}</p> : <div></div>} */}
    //   <h1> {users.location ? users.location : undefined}</h1>
    //   {/* <p>Location:{ checkLocation(users.location) }</p> */}
    // </>
   
    <div>
     
      <h1>Title: {app1.tittle}</h1>
      {/* //only render subtitle , if p exists logical and operator */}
      {app1.subtitle && <p>{app1.subtitle}</p>}
      {/* //render new p tag- "Here are your options"  if options.lent > 0 else NO options */}
      <p>{app1.option.length > 0 ? "Here are your options" : "No options, Boss!"}</p>
    </div>
  )
}

export default Ternary;
