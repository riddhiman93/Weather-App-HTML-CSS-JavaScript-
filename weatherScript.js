const loc = document.getElementById("city")
const submitBtn = document.getElementById("btn")

const temp = document.getElementById("temp")
const maxMintemp =document.getElementById("maxMin")
const feelsLiketemp =document.getElementById("feelsLike")
const humidity =document.getElementById("humidity")
const desc =document.getElementById("desc")
const cityText= document.getElementById("cityname")


// let response =fetch(url);
//     let data = response.json()
//     console .log(data)


async function getWeather(cityname) {
    try {
        const apiKey = "9c30076b4aa7f146559fa1c799dd2a29"
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=9c30076b4aa7f146559fa1c799dd2a29`

        const response = await fetch(url);
        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;

        weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9c30076b4aa7f146559fa1c799dd2a29&units=metric`

        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        tempData = weatherData.main.temp
        maxTempData = weatherData.main.temp_max
        minTempData = weatherData.main.temp_min
        feelsLikeData = weatherData.main.feels_like
        humidityData = weatherData.main.humidity
        descriptionData = weatherData.weather["0"].description

        cityText.innerText=`City:    ${cityname}`
        temp.innerText = `Temperature:    ${tempData}°C`
        maxMintemp.innerText =`Max / Min:    ${maxTempData}°C / ${minTempData}°C`
        feelsLiketemp.innerText =`Feels Like:    ${feelsLikeData}`
        humidity.innerText =`Humidity:    ${humidityData}%`
        desc.innerText =`Description:    ${descriptionData}`
        


        


    } catch (error) {
        console.error("Something went wrong:", error);
    }

}


submitBtn.addEventListener("click", () => {
    city = loc.value
    console.log(city)
    loc.value = ""
    getWeather(city);

})



