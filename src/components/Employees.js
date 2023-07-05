import React, { useState } from 'react'
import sluzba from '../data/sluzba.json'
import DataFilter from './DataFilter';
import'./Employees.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function Employees() {
  const [data, setData] = useState(sluzba);
  const [order, setOrder] = useState("asc");
  const [dataValue, setDataValue] = useState('');
  const [datePickerValue, setDataPickerValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(sluzba.length / recordsPerPage);
  const numbers = [...Array(npage+1).keys()].slice(1)

  const handleDataFilter = (data) => {
    setDataValue(data);
  };

  const handleDataPickerFilter = (data) => {
    setDataPickerValue(data);
  };


const sortFunction = (i) => {
    if(order === "asc"){
        const sorted = [...data].sort((a,b) => 
        a[i].toLowerCase() > b[i].toLowerCase() ? 1 : -1)
    setData(sorted);
    setOrder("desc")
    }
    if(order === "desc"){
        const sorted = [...data].sort((a,b) => 
        a[i].toLowerCase() < b[i].toLowerCase() ? 1 : -1)
    setData(sorted);
    setOrder("asc")
    }
}
  
const nextPage =() => {
    if(currentPage !== lastIndex){
        setCurrentPage(currentPage+1);
    }
}
  
const changeCurrentPage = (id) =>{
      setCurrentPage(id);
}
  
const prevPage = () =>{
  if(currentPage !== firstIndex){
    setCurrentPage(currentPage-1);
  }
}

  return (
    <div className='card'>
        <DataFilter dataValue={handleDataFilter} datePickerValue={handleDataPickerFilter}/>
        <table>
        <thead>
        <tr>
            <th>ID</th>
            <th onClick={() => sortFunction("firstName")}>Imię</th>
            <th onClick={() => sortFunction("lastName")}>Nazwisko</th>
            <th>Data urodzenia</th>
            <th onClick={() => sortFunction("function")}>Funkcja</th>
            <th>Doświadczenie (w latach)</th>
        </tr>
        </thead>
        <tbody>
        {
            records.map((employee, i) => {
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
                <tr key={i}>
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
    <nav>
        <ul className='pagination'>
            <li className='page-item'>
                <a href="#" className='page-link' onClick={prevPage}>Prev</a>
            </li>
            {
                numbers.map((number, i) => (
                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={i}>
                        <a href="#" className='page-link' onClick={() => changeCurrentPage(number)}>{number}</a>
                    </li>
                ))
            }
             <li className='page-item'>
                <a href="#" className='page-link' onClick={nextPage}>Next</a>
            </li>
        </ul>
    </nav>
  </div>
  
  )


}

export default Employees