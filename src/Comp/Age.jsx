import React, { useState } from 'react'

function Age() {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [age, setAge] = useState(null);
  
    const calculateAge = () => {
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
  
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      setAge(age);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      calculateAge();
    };


  return (
    <div className=' w-56 max-h-60  mx-auto bg-gray-400 '>
             <div className='m-5'>
    <h1 className='text-center underline'>Age Calculator</h1>
    <form onSubmit={handleSubmit} className='text-center my-3'>
      <div>
        <label>Year: </label>
        <input 
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div>
        <label>Month: </label>
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <div>
        <label>Day: </label>
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <button type="submit" className='bg-green-500 text-white my-4  rounded-md px-2 py-1'>Calculate Age</button>
    </form>
    {age!== null && (
      <div >
        <h2>Your Age is: {age}</h2>
      </div>
    )}
  </div>
    </div>
   
  )
}

export default Age
