import {Current, Location} from "./WeatherType.ts"

export type ForecastType = {
    location: Location
    current: Current
    forecast: Forecast
    alerts: Alerts
}


export type Forecast = {
    forecastday: Forecastday[]
}

export type Forecastday = {
    date: string
    date_epoch: number
    day: Day
    astro: Astro
    hour: Hour[]
}

export type Day = {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    avgtemp_c: number
    avgtemp_f: number
    maxwind_mph: number
    maxwind_kph: number
    totalprecip_mm: number
    totalprecip_in: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    daily_will_it_rain: number
    daily_chance_of_rain: number
    daily_will_it_snow: number
    daily_chance_of_snow: number
    condition: Condition2
    uv: number
}

export type Condition2 = {
    text: string
    icon: string
    code: number
}

export type Astro = {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: string
}

export type Hour = {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition3
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    will_it_rain: number
    chance_of_rain: number
    will_it_snow: number
    chance_of_snow: number
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
}

export type Condition3 = {
    text: string
    icon: string
    code: number
}

export type Alerts = {
    alert: Alert[]
}

export type Alert = {
    headline: string
    msgtype: string | null
    severity: string | null
    urgency: string | null
    areas: string | null
    category: string
    certainty: string | null
    event: string
    note: string | null
    effective: string
    expires: string
    desc: string
    instruction: string
}
