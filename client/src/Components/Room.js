import React from 'react'

function Room({room}) {
  return (
    <div className='row bs'>
        <div className='col md-3'>
            <img src={room.imageurls[0]} className='smallimg' />
    </div>
    <div className='col-md-7 '>
        <b>
        <h1>{room.name}</h1>
        <p>Max Count : {room.maxcount}</p>
        <p>phone Number: {room.labInCharge}</p>
        <p>Department: {room.department}</p>
        </b>
        <div style={{float:'right'}}>
            <button className='btn btn-primary'>View Details</button>
            </div>   

    </div>
    </div>

  )
}

export default Room