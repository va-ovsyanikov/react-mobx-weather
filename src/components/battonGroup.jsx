import React from 'react'
import { Link } from "react-router-dom";
const battonGroup = ({ selectCity }) => {
    return (
        <div className="weather_footer">
            <Link to="#"
                className="waves-effect waves-light btn"
                name="Minsk"
                onClick={selectCity}
            >Minsk</Link>
            <Link to="#"
                className="waves-effect waves-light btn"
                onClick={selectCity}
                name="Warsaw"
            >Warsaw </Link>
            <Link to="#"
                className="waves-effect waves-light btn"
                onClick={selectCity}
                name="London"
            >London</Link>
        </div>
    )
}
export default battonGroup