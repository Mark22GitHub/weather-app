const ApiKey = '184d35ee89a4d141bb8c25903bba881f';

export default {
    _city: ``,
    
    fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${ApiKey}`;
      return fetch(url)
        .then(response => response.json())


    //     .then(res => {
    //     const dt = new Date(res.dt * 1000)
    //     refs.daysList.innerHTML= item({...res, dt})
    // })
      
      
      
            // .then(data => {
            //     console.log(data)
            //     return data})
    
    },

    get city () {
    return this._city;
  },
  set city (newCity) {
    this._city = newCity;
  },
}