document.getElementById("btn").addEventListener("click", async function() {
    const city=document.getElementById("cityInput").value;
    if(city===""){
            document.getElementById("result").innerHTML="Please Enter City name";
            return;
    }
    const apiKey="aad7e2161338d04237534400fbf56558"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response=await fetch(url);
    if(response.status === 404){
        document.getElementById("result").innerHTML="City Not Found ❌";
        return;
    }
    const data= await response.json();
    console.log(data);

    const name=data.name;
    const temp=data.main.temp;
    const desc=data.weather[0].description;
    const descformat=desc.toUpperCase();
    const icon=data.weather[0].icon;
    const iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.getElementById("result").innerHTML=
        `<h3> ${name} </h3>
         <img src="${iconUrl}">
          <p>${temp}°C <p>
          <p>${descformat}</p>`;    
       
});