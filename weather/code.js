const apiKey="a7eb994de6de5abedece5ef6e32ec92f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const sb=document.querySelector(".search input");
const sbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function ckw(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
document.querySelector(".press").innerHTML = data.main.pressure + " atm";
document.querySelector(".country").innerHTML = data.sys.country + " -origin";




if(data.weather[0].main == "Clouds"){
weatherIcon.src="images/clouds.png";
}
else  if(data.weather[0].main == "Clear"){
weatherIcon.src="images/clear.png";
}
else  if(data.weather[0].main == "Rain"){
weatherIcon.src="images/rain.png";
}
else  if(data.weather[0].main == "Drizzle"){
weatherIcon.src="images/drizzle.png";
}
else  if(data.weather[0].main == "Mist"){
weatherIcon.src="images/mist.png";
}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";



}
}
sbtn.addEventListener("click",()=>{
    ckw(sb.value);
}
)
