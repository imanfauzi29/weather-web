import Select from "components/ui/Select";
import Temperature from "components/Temperature";
import ButtonTabs from "components/ButtonTabs";
import Forecast from "components/Forecast";
import {ForecastContainer, NextForecastContainer, Title, WeatherContainer} from "./style.ts";

export default function WeatherLocation() {
    return (
        <WeatherContainer>
            <div>
                <Select/>
                <Temperature/>
                <hr/>
                <NextForecastContainer>
                    <Title>The Next Days Forecast</Title>
                    <ButtonTabs/>
                    <ForecastContainer>
                        <Forecast/>
                        <Forecast/>
                        <Forecast/>
                        <Forecast/>
                        <Forecast/>
                    </ForecastContainer>
                </NextForecastContainer>
            </div>
        </WeatherContainer>
    )
}