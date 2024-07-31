import {Current, Location} from "services/types/WeatherType.ts";
import {create} from "zustand";
import {Forecastday} from "services/types/ForecastType.ts";

interface CurrentState {
    q: string
    current?: Current;
    location?: Location;
    forecast_day?: Forecastday[]
    setWeather: (current: Current, location: Location) => void
    setSearch: (q: string) => void
    setForecast: (forecast: Forecastday[]) => void
}

export const useCurrentWeatherStore = create<CurrentState>()((set) => ({
    q: "jakarta",
    current: undefined,
    location: undefined,
    forecast_day: undefined,
    setWeather: (current: Current, location: Location) => set((state) => ({...state, current, location})),
    setSearch: (q: string) => set((state) => ({...state, q})),
    setForecast: (forecast: Forecastday[]) => set((state) => ({...state, forecast_day: forecast}))
}))