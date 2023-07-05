import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({dataPickerValue}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    dataPickerValue(date);
  };

  return (
    <div>
      <label htmlFor="datePicker">Select a date: </label>
      <DatePicker
        selected={selectedDate}
        id="datePicker"
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
};

export default DatePickerComponent;
