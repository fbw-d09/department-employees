import React, { useState } from 'react';
import './App.css';

function App() {
  const [ isToggled, setIsToggled ]= useState(false);

  const [ depData, setDepData ] = useState([]);
  const [ empData, setEmpData ] = useState([]);

  const fetchedDataDepartments = async () => {
    const data = await ((await fetch('http://localhost:4000/api/departments'))).json();
    console.log(data)
    setDepData(data)

  }

  const fetchedDataEmployees = async () => {
    const data = await ((await fetch('http://localhost:4000/api/employees'))).json();
    console.log(data)
    setEmpData(data);
  }
  
  const handleDepartments = () => {
    fetchedDataDepartments();
    //setIsToggled(!isToggled);
  }

  const handleEmployees = () => {
    fetchedDataEmployees();
    // setIsToggled(!isToggled);
  }
  return (
    <div className='box'>
      <h1>Testpage</h1>
      <button onClick={ handleDepartments }>Departments</button>
      <button onClick={ handleEmployees }>Employees</button>
      <ul>
        {
          depData.map((data, index) => {
            return(
            <li key={index}>Name: {data.name} Location: {data.location} </li>
          )})
        }
      </ul>
      <ul>
        {
          empData.map((data, index) => {
            console.log(empData)
            return(
            <li key={index}>
            Name: {data.name} <br></br> 
            E-Mail: {data.email} <br></br> 
            Salary: {data.salary} <br></br> 
            Hire Date: {data.hireDate} <br></br> 
            Department: {data.department.name} <br></br> 
            Location: {data.department.location} <br></br>
            <hr></hr>
            </li>
          )})
        }
      </ul>
    </div>
  )
}

export default App
