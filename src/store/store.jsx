import { makeAutoObservable } from 'mobx'


class Weather {
  weather = ""
  weatherList = []
  query = localStorage.getItem("query") || ''
  constructor() {
    makeAutoObservable(this)
  }

  async fetchData(query) {
    try {
      const key = process.env.REACT_APP_KEY
      this.query = query
      localStorage.setItem("query", query)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`)
      const result = await response.json();
      this.weather = result
    } catch (error) {
      console.log(error)
    }
  }
 
  async fetchList (query) {
      try {
        const key = process.env.REACT_APP_KEY
        this.query = query
        localStorage.setItem("query", query)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${query}&cnt=40&appid=${key}&units=metric`)
        const result = await response.json();
        this.weatherList = []
        for (let i = 0; i < result.list.length; i += 8) {
            const forescat = {
                dt: result.list[i].dt,
                temp: result.list[i].main.temp,
                desc: result.list[i].weather[0].description
            }
            this.weatherList.push(forescat)
        }
      } catch (error) {
        console.log(error)
      }
  }

}


export default new Weather()