const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const container = document.querySelector('.container');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "4a5161641bc8240d01d72de2f053e41e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/Hr`;


    switch(weather_data.weather[0].main){
        case 'Few Clouds':
            weather_img.src = "overcast.png";
            break;   
        case 'Overcast Clouds':
            weather_img.src = "overcast.png";
             break;
        case 'Scattered Clouds':
                weather_img.src = "overcast.png";
                 break;     
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        case 'Clear Sky':
            weather_img.src = "clear.png";
            break;
        case 'Rain':
            weather_img.src = "rain.png";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.png";
            break;
        case 'Fog':
            weather_img.src = "fog.png";
            break;
        case 'Foggy':
            weather_img.src = "foggy.jpeg";
            break;   
        case 'Haze':
            weather_img.src = "haze.jpg";
            break;  
                         
    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    
    checkWeather(inputBox.value);
    container.style.margin ='0 auto'  ;
});

window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
    checkWeather(inputBox.value);
    container.style.margin ='0 auto'  ;}
});
