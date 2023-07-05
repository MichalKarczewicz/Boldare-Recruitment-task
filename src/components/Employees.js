import React, { useState } from 'react'
import Employee from './Employee';
import sluzba from '../data/sluzba.json'
import DataFilter from './DataFilter';

function Employees() {
  const [employees, setEmployees] = useState([]);



  return (
    <div>
        <DataFilter />
        <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Data urodzenia</th>
            <th>Funkcja</th>
            <th>Doświadczenie (w latach)</th>
        </tr>
        </thead>
        <tbody>
        <Employee employees={employees}/>
        </tbody>
    </table>
  </div>
  
  )
}

export default Employees