import { useState, useEffect } from 'react';
import './App.css';
import { Employee } from '../../backend/src/employee/interfaces/employee.interface';
import Axios from "axios";

function App() {
  
  const [listOfEmployees, setListOfEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/employee/employees').then((response) => {
      setListOfEmployees(response.data)
    })
  }, [])

  return (
    <div className="App">
      <div className='employees'>
        {listOfEmployees.map((employee) => {
          return (
          <div>
            <h1>
              Name: {employee.first_name} {employee.last_name}
            </h1>
            <h2>
              Email: {employee.email}
            </h2>
            <h2>
              Address: {employee.address}
            </h2>
            <h2>
              Phone: {employee.phone}
            </h2>
            <h2>
              Created: {employee.created_at}
            </h2>
          </div> )
        })}
      </div>
    </div>
  );
}

export default App;
