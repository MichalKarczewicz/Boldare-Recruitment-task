import React, { useState } from 'react'
import DatePickerComponent from './DatePickerComponent';
import'./DataFilter.css';


const DataFilter = ({dataValue, datePickerValue}) => {
    const [value, setValue] = useState('');

    const handleDataPickerFilter = (data) => {
      datePickerValue(data);
    };

    const handleChange = (e) => {
      const value = e.target.value;
      setValue(value);
      dataValue(value);
    };

  return (
    <div className='container'>
        <label htmlFor="filtr">Search: </label>
        <input type="text" id="filtr" value={value} onChange={handleChange} />
        <DatePickerComponent dataPickerValue={handleDataPickerFilter}/>
    </div>
  )
}

export default DataFilter