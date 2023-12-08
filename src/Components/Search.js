import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'



export default function Search(props) {
  return (
    <>
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-lg-5'>
          <label>Enter City Name</label>
          <input type='text' className='form-control' name='city' id='city' value={props.city}
            onChange={props.change} aria-describedby='helpId' placeholder='Enter City Name' />
        </div>
        <div className='col-lg-1 text-muted'>
          <label htmlFor=''></label>
          <h5>Or</h5>
        </div>
        <div className='col-lg-5'>
          <div className='form-group'>
            <label htmlFor=''>Get Co-ordinate</label>
            <button className='btn fa fa-crosshairs' ></button>
            <div className='row'>
              <div className='bg-dark text-white rounded m-1 p-1' >Lat:-</div>
              <input type='number' step="any" className='form-control col me-1' name="lat" id="lat" onChange={props.change} value={props.lat} aria-describedby='helpId' />
              <div className='bg-dark text-white rounded m-1 p-1'  >Lon:-</div>
              <input type='number' step="any" className='form-control col me-1' name="lon" id="lon" value={props.lon} onChange={props.change} aria-describedby='helpId' />
            </div>
          </div>
          <div className='col-lg-1 mb-3'>
            <label>Search</label>
            <button className='btn btn-primary fa fa-search' onClick = { props.search }></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}