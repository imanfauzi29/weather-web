import styled from "styled-components";
import HorizontalDivider from "components/Divider/Horizontal.tsx";
import {Hour} from "services/types/ForecastType.ts";
import {useEffect, useMemo, useState} from "react";
import {weatherIcon} from "utils/weatherIcon.ts";

export default function VerticalForecast({temp_c, time, condition}: Hour) {
    const [isCurrentTime, setIsCurrentTime] = useState(false)

    useEffect(() => {
        if (time) {
            let existingTime = time.split(" ")[1]
            existingTime = existingTime.split(":")[0]

            let currentHours = new Date().getHours()
            currentHours = Number(currentHours.toString().padStart(2, ""))

            setIsCurrentTime(currentHours === Number(existingTime))
        }
    }, [time])

    const formatTime = useMemo(() => {
        if (time) {
            return time.split(" ")[1]
        }
        return ""
    }, [time])

    return (
        <Container iscurrenttime={isCurrentTime ? 'rgba(177,177,177,0.6)' : 'rgba(99,99,99,0.3)'}>
            <span>{formatTime}</span>
            <HorizontalDivider/>
            <SVGContainer>
                <img src={weatherIcon[condition.code]} alt={"rainy"} width={24} height={24}/>
            </SVGContainer>
            <Temperature>{Math.round(temp_c)}&deg;C</Temperature>
        </Container>
    )
}

const Container = styled.div<{ iscurrenttime: string }>`
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 50px;
    background-color: ${props => props.iscurrenttime};
    border-radius: 8px;
    gap: 5px;

    & > span {
        color: white;
        font-size: 14px;
    }
`

const SVGContainer = styled.div`
    display: flex;
    width: 38px;
    height: 38px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.4);
`

const Temperature = styled.p`
    color: white;
    font-size: 20px;
    font-weight: bold;
`