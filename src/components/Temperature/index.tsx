import {TemperatureContainer, TemperatureText, WindSpeedText} from "components/Temperature/style.ts";

export default function Temperature() {
    return (
        <TemperatureContainer>
            <TemperatureText>
                11&deg;C
            </TemperatureText>
            <WindSpeedText>
                <svg width={"20px"} height={"20px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8"
                            stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path
                            d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9"
                            stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
                        <path
                            d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25"
                            stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>
                    </g>
                </svg>
                Northwest 38.9 km/h
            </WindSpeedText>
        </TemperatureContainer>
    )
}