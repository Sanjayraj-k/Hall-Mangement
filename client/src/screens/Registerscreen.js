import React,{useState,useEffect} from 'react';

function Registerscreen() {
    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
                <div>
                    <h1>Name of your club</h1>
                    <input type='text' placeholder='name' className='form-control' />
                    <h1>Email</h1>
                    <input type='email' placeholder='email' className='form-control' />
                    <h1>password</h1>
                    <input type='password' placeholder='password' className='form-control' />
                </div>
                </div>
               
        </div>
    )
}
export default Registerscreen