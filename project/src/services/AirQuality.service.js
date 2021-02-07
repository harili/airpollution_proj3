import config from "@/config/config.js"
import axios from "axios"

const baseUrl = "http://api.waqi.info/feed/";

export const AirQualityService={
    getAirQuality(cityName){
        const url = `${baseUrl}/${cityName}/?token=${config.token}`
    }
}