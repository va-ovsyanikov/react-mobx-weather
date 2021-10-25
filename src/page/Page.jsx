/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import weather from '../store/store'
import { observer } from 'mobx-react-lite'
import Loader from '../components/contentLoaderForecast'


export const Page = observer(() => {
    const location = useLocation();
    const city = location.state.city
    const [state, setState] = React.useState(city)

    React.useEffect(() => {
        window.M.updateTextFields();
    })

    React.useEffect(() => {
        weather.fetchList(state)
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        weather.fetchList(state)
    }
    return (
        <div className="row">
            <div>
                <form onSubmit={handleSubmit}>
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
                </form>
            </div>
            {console.log(weather.weatherList.length)}
            {
                
                weather.weatherList.length ? (
                    <div className="weather_body forecast">
                        <div className="city">
                            {weather.query}
                        </div>
                        {weather.weatherList.map((item, i) =>
                            <div className="weather_body_item " key={i}>
                                <div className="date">
                                    {moment.unix(item.dt).format("DD MMMM YYYY")}
                                </div>
                                <div className="temp">
                                    {Math.round(item.temp)}&deg;
                                </div>
                                <div className="way">
                                    {item.desc}
                                </div>
                            </div>
                        )}
                    </div>
                ) :
                    <Loader />
            }
        </div>
    )
})
