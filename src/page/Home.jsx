
import React from 'react'
import BattonGroup from '../components/battonGroup'
import Loader from '../components/contentLoader'
import moment from 'moment'
import weather from '../store/store'
import { observer } from 'mobx-react-lite'

export const Home = observer(() => {

    const [state, setState] = React.useState('Minsk')

    React.useEffect(() => {
        window.M.updateTextFields();
    })
    React.useEffect(() => {
        if (weather.query) {
            setState(weather.query)
            weather.fetchData(weather.query)
        } else {
            weather.fetchData(state)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        weather.fetchData(state)
    }

    const arryCity = ["Minsk", "Warsaw", "London"]


    function selectCity(e) {
        const name = e.target.name;
        for (let i = 0; i < arryCity.length; i++) {
            if (name === "Minsk" && arryCity[i] === "Minsk") {
                weather.fetchData("Minsk")
                setState(weather.query)
            }

            if (name === "Warsaw" && arryCity[i] === "Warsaw") {
                weather.fetchData("Warsaw")
                setState(weather.query)
            }

            if (name === "London" && arryCity[i] === "London") {
                weather.fetchData("London")
                setState(weather.query)
            }

        }
    }


    return (
        <div className="row">
            <form className="col s12"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="Enter_city"
                            type="text"
                            className="validate"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <label htmlFor="Enter_city">Enter city</label>
                    </div>
                </div>
            </form>
            {weather.weather ?
                <div className="weather_body">
                    <div className="city">
                        {weather.weather && weather.weather.name}, {weather.weather && weather.weather.sys.country}
                    </div>
                    <div className="date">
                        {moment().format("DD MMMM YYYY")}
                    </div>
                    <div className="temp">
                        {weather.weather && Math.floor(weather.weather.main.temp)}&deg;
                    </div>
                    <div className="way">
                        {weather.weather && weather.weather.weather[0].description}
                    </div>
                    <div className="hum">
                        {weather.weather && weather.weather.main.humidity}%
                    </div>
                    <BattonGroup
                        selectCity={selectCity}


                    />
                </div>

                :
                <Loader />

            }


        </div>
    )
})
