import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h1>Contact Us</h1>
        <form>
            <input  className='contact-input' placeholder='Name'></input>
            <input  className='contact-input' placeholder='Phone Number'></input>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Contact