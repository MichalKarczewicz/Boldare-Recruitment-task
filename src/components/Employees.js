import React, { useState } from 'react'
import sluzba from '../data/sluzba.json'
import DataFilter from './DataFilter';
import'./Employees.css';

function Employees() {
  const [dataValue, setDataValue] = useState('');
  const [datePickerValue, setDataPickerValue] = useState('');

  const handleDataFilter = (data) => {
    setDataValue(data);
  };

  const handleDataPickerFilter = (data) => {
    setDataPickerValue(data);
  };

  return (
    <div className='card'>
        <DataFilter dataValue={handleDataFilter} datePickerValue={handleDataPickerFilter}/>
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
        {
            sluzba.map((employee) => {
                if (dataValue && !employee.id.toString().includes(dataValue) 
                && !employee.firstName.includes(dataValue) 
                && !employee.lastName.includes(dataValue) 
                && !employee.function.includes(dataValue) 
                && !employee.experience.toString().includes(dataValue))
                {
                return null;
                }
                if (datePickerValue && !employee.dateOfBirth.toString().includes(
                    new Date(datePickerValue).toLocaleDateString()
                )) { return null }
                
                return (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.function}</td>
                    <td>{employee.experience}</td>
                </tr>
                );
            })
        }

        </tbody>
    </table>
  </div>
  
  )
}

export default Employees