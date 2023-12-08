import React, { Component } from 'react'
import Search from "./Search";
import Result from "./Result";
import axios from 'axios';
import Loader from './Loader';

 class Weather extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       lat:'',
       lon:'',
       weatherData:null,
       city:null,
       loading:false,
    };
  }

  changeHandler=(event)=>{
    const name=event.target.name;
    if(name==='city'){
      this.setState({
        city:event.target.value,
      });
    }
    

    else if(name==='lon'){
      this.setState({
        lon:event.target.value,
      });
    }
    

    else if(name==='lat'){
      this.setState({
        lat:event.target.value,
      });
  }
};





// locationHandler = () => {
//   this.setState({
//       lat: '',
//       lon: '',
//       weatherData: null,
//       city: '',
//       loading:true,
//     });
//   if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition(
//           (res) => {
//               //console.log(res);
//               setTimeout(() => {
//                 const { latitude: lat, longitude: lon } = res.coords;

               

//                 axios
//                   .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72b971780557d7931113d1e8118af613`)
//                   .then((result) => {
//                     this.setState({
//                       city: result.data.name,
//                       weatherData: result.data,
//                     });
//                   })
//                   .catch((error) => {
//                     console.log(error);
//                   });
//                 this.setState({
//                   lat,
//                   lon,
//                 });
//               }, 500);
//             },
//             (error) => {
//               console.log(error);
//             }
//           );
//         } else {
//           console.log('Location Is Not Supported');
//         }
//       };
    
//       searchHandler = () => {
//         if (!this.state.lat || !this.state.lon) {
//           console.log("Latitude or longitude is undefined");
//           return;
//         }
        
//         axios
//           .get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=72b971780557d7931113d1e8118af613`)
//           .then((result) => {
//             this.setState({
//               city: result.data.name,
//               weatherData: result.data,
//             });
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       };
    
    
    

  render() {
    return (
      <div>
      <Loader/>
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          weatherData={this.state.weatherData}
          city={this.state.city}
          change={this.changeHandler}
          getLocation={this.locationHandler}
          search = {this.searchHandler}
        >
          
        </Search>
        <Result    />
      </div>
    )
  }
}

export default Weather;
