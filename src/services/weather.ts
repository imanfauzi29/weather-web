import {AxiosConfig} from "services/AxiosConfig.ts";
import {Range} from "types/range.ts";
import {ForecastType} from "services/types/ForecastType.ts";
import {MarineType} from "services/types/MarineType.ts";


type ForecastWeatherProps = {
    q: string
    days: Range<1, 14>
}
export const getForecastWeather = (params: ForecastWeatherProps): Promise<ForecastType> => {
    return AxiosConfig.get('/forecast.json', {params: {...params, aqi: "no", alerts: "no"}})
        .then(res => res.data)
        .catch(err => {
            throw new Error(err)
        })
}

type MarineWeatherProps = {
    q: string
    days: Range<1, 8>
    hour?: number
}

export const getMarineWeather = (params: MarineWeatherProps): Promise<MarineType> => {
    return AxiosConfig.get('/marine.json', {params: {...params}})
        .then(res => res.data)
        .catch(err => {
            throw new Error(err)
        })
}