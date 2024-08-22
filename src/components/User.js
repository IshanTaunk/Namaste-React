import React, { useState } from 'react'

const User = ({name}) => {
    const [count] = useState(0);
    const [count1] = useState(1);
  return (
    <div className='user-card'>
        <h1>{name}</h1>
        <h2>Count: {count}</h2>
        <h2>Count1: {count1}</h2>
        <h3>Location: Bangalore</h3>
        <h4>Contact: ishan.taunk444</h4>
    </div>
  )
}

export default User