import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

var moment = require("moment");

function WeatherData(props) {
    let _date = new Date();
    const weekday = props.reading.dt * 1000;
    _date.setTime(weekday);
    const _img = `owf owf-${props.reading.weather[0].id} owf-5x`;
    const fahrenheitMax = props.reading.main.temp_max;

    const fahrenheitMin = props.reading.main.temp_min;

    const farenheitTemp = props.reading.main.temp;

    return (
        <div className="row">
            <div className="col-12">
                <Link
                    to={{
                        pathname: `/${props.reading.day}`,
                        state: {
                            completeData: props.completeData,
                            cityName: props.cityName,
                        },
                    }}
                >
                    <div className="card py-2 mt-3">
                        <div className="row">
                            <div className="col">
                                <i className={_img}></i>
                                <p>{props.reading.weather[0].description}</p>
                                <h4 className="text-secondary">
                                    {moment(_date).format("MMMM D YYYY")}
                                    --{props.reading.day}
                                </h4>
                                <p>Temp: {farenheitTemp}°F || Min: {fahrenheitMin}°F || Max: {fahrenheitMax}°F</p>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default withRouter(WeatherData);
