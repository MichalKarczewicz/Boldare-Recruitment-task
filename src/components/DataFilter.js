import React, { useState } from 'react'


const DataFilter = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      setValue(e.target.value);
    };

  return (
    <>
        <input type="text" value={value} onChange={handleChange} />
    </>
  )
}

export default DataFilter