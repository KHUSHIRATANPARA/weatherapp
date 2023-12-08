import React from 'react'

export default function Result(props) {
  // const {weatherData: data} = props;

  // function kToc(k) {
  //   return (k - 273.15).toFixed(2) + " C";
  // }



  // if (!data) {
  //   return null;
  // }
  return (
    <div>
      <div className='row'>
        <div className='col'>
            <div className='card border-primary'>
                <div className='card-body'>
                    <h4 className='card-title'>
                      {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='' /> {data.name} ({kToc(data.main.temp)})<span className='ps-2'>{data.weather[0].description}</span> */}
                    </h4>
                    <div className='row'>
                      <div className='col'>
                        <div className='row'>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <th>Feels Like</th>
                                {/* <td>{data.main.feels_like}</td> */}
                              </tr>
                              <tr>
                                <th>Min. Temp</th>
                                {/* <td>min temp</td> */}
                              </tr>
                              <tr>
                                <th>Max. Temp</th>
                                {/* <td>max temp</td> */}
                              </tr>
                              <tr>
                                <th>Sun Rise</th>
                                {/* <td>sun rise time</td> */}
                              </tr>
                              <tr>
                                <th>Sun Set</th>
                                {/* <td>sun set time</td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

