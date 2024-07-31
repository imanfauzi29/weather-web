export interface MarineType {
    location: Location
    forecast: Forecast
}

export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
}

export interface Forecast {
    forecastday: Forecastday[]
}

export interface Forecastday {
    date: string
    date_epoch: number
    day: Day
    astro: Astro
    hour: Hour[]
}

export interface Day {
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
    totalsnow_cm: number
    avgvis_km: number
    avgvis_miles: number
    avghumidity: number
    tides: Tide[]
    condition: Condition
    uv: number
}

export interface Tide {
    tide: Tide2[]
}

export interface Tide2 {
    tide_time: string
    tide_height_mt: string
    tide_type: string
}

export interface Condition {
    text: string
    icon: string
    code: number
}

export interface Astro {
    sunrise: string
    sunset: string
    moonrise: string
    moonset: string
    moon_phase: string
    moon_illumination: number
    is_moon_up: number
    is_sun_up: number
}

export interface Hour {
    time_epoch: number
    time: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition2
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
    vis_km: number
    vis_miles: number
    gust_mph: number
    gust_kph: number
    uv: number
    sig_ht_mt: number
    swell_ht_mt: number
    swell_ht_ft: number
    swell_dir: number
    swell_dir_16_point: string
    swell_period_secs: number
    water_temp_c: number
    water_temp_f: number
}

export interface Condition2 {
    text: string
    icon: string
    code: number
}
