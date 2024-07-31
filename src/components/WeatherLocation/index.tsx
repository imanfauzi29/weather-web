import Temperature from "components/Temperature";
import Forecast from "components/Forecast";
import React, {useCallback, useEffect, useState} from "react";
import {Forecastday} from "services/types/MarineType.ts";
import styled from "styled-components";
import {getMarineWeather} from "services/weather.ts";
import {useCurrentWeatherStore} from "store/useCurrentWeatherStore.ts";
import Input from "components/ui/Input";
import {debounce} from "utils/utils.ts";

export default function WeatherLocation() {
    const [futures, setFutures] = useState<(Forecastday | null)[]>()
    const {q, setSearch} = useCurrentWeatherStore(state => state)

    useEffect(() => {
        getFutures()
    }, [q]);

    const getFutures = async () => {
        try {
            const {forecast} = await getMarineWeather({q, hour: 12, days: 7})

            const newForecast = forecast.forecastday.map((future, i) => {
                if (i === 0) return null
                return future
            }).filter(v => v)

            setFutures(newForecast)
        } catch (err) {
            console.log("Failed to get current weather:")
            console.error("Error: %s", err)
        }
    }

    const setSearchValue = (event: unknown) => {
        const {target: {value}} = event as React.ChangeEvent<HTMLInputElement>

        setSearch(value)
    }
    const handleChangeInput = useCallback(
        debounce(setSearchValue, 300),
        [setSearch]
    );
    return (
        <WeatherContainer>
            <div>
                <Input onChange={handleChangeInput} defaultValue={q}/>
                <Temperature/>
                <hr/>
                <NextForecastContainer>
                    <Title>The Next Days Forecast</Title>
                    {/*<ButtonTabs/>*/}
                    <ForecastContainer>
                        {
                            futures && futures.map((future, i) => <Forecast key={i} {...future}/>)
                        }
                    </ForecastContainer>
                </NextForecastContainer>
            </div>
        </WeatherContainer>
    )
}

const WeatherContainer = styled.div`
    width: 450px;
    background: rgba(76, 76, 76, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 32px 30px;

    & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 60px;

        & > hr {
            width: 100%;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    }
`

const NextForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.h4`
    color: white;
    font-size: 18px;
    text-align: center;
`

const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`