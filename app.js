const apiKey = "&appid=5754f084aa8214abbeb51ee3b010685f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + apiKey);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }else{
        var weatherhData = await response.json();

        document.querySelector(".city").innerHTML = weatherhData.name;
        document.querySelector(".temp").innerHTML = Math.round(weatherhData.main.temp/10).toFixed(1) + " °C";  + "°C";
        document.querySelector(".humidity").innerHTML = weatherhData.main.humidity + " %";
        document.querySelector(".wind").innerHTML = weatherhData.wind.speed + " km/hr"; 
    
        if(weatherhData.weather[0].main=='Clouds'){
            weatherIcon.src = "images/clouds.png"
        } else if(weatherhData.weather[0].main=='Clear'){
            weatherIcon.src = "images/clear.png"
        } else if(weatherhData.weather[0].main=='Drizzle'){
            weatherIcon.src = "images/drizzle.png"
        }else if(weatherhData.weather[0].main=='Mist'){
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
    


    
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})