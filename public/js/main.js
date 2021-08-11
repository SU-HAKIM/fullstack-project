const form = document.getElementById("form");
const text = document.getElementById("text");
const dayId = document.getElementById("day");
const today_date = document.getElementById("today_date");
const temp_amount = document.getElementById("temp_amount");
const icon = document.getElementById("icon");
const address = document.getElementById("address");
const city_name=document.querySelector('.city_name')
const middle_layer=document.querySelector('.middle_layer')



const date = new Date();
let day = date.getDay();
let dayInText = '';
let monthDate = date.getDate();
let month=date.getMonth()
let monInText = '';


switch (day) {
    case 0:
        dayInText = "sunday";
        break;
    case 1:
        dayInText = "monday";
        break;
    case 2:
        dayInText = "tuesday";
        break;
    case 3:
        dayInText = "wednesday";
        break;
    case 4:
        dayInText = "thursday";
        break;
    case 5:
        dayInText = "friday";
        break;
    case 6:
        dayInText = "saturday";
        break;
}

switch (month) {
    case 0:
        monInText = "Jan";
        break;
    case 1:
        monInText = "Feb";
        break;
    case 2:
        monInText = "Mar";
        break;
    case 3:
        monInText = "Apr";
        break;
    case 4:
        monInText = "May";
        break;
    case 5:
        monInText = "June";
        break;
    case 6:
        monInText = "July";
        break;
    case 7:
        monInText = "Aug";
        break;
    case 8:
        monInText = "Sep";
        break;
    case 9:
        monInText = "Oct";
        break;
    case 10:
        monInText = "Nov";
        break;
    case 11:
        monInText = "Dec";
        break;
}

dayId.innerText = dayInText;
today_date.innerText=monthDate+" "+monInText

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
    if (text.value === "") {
        city_name.innerHTML = "Make sure you entered a city name";
        middle_layer.classList.add("data_hide")
        address.innerText =""
    } else {
            //? setting to default
            city_name.innerHTML="Get Output Here"
            middle_layer.classList.remove("data_hide")

            //? fetching data
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=3f38ae1408f39824850bdd18003458d1`;
            fetch(url)
                .then(res =>res.json())
                .then(data => {
                    temp_amount.innerText = data.main.temp
                    address.innerText = data.name + ',' + data.sys.country
                    //? using icon
                    if (data.weather[0].main === "Rain") {
                        icon.className="fas fa-cloud-rain"
                    } else if (data.weather[0].main === "Clouds") {
                        icon.className = "fas fa-cloud"
                        icon.style.color="#fff"
                    } else if (data.weather[0].main === "Haze") {
                        icon.className = "fas fa-smog"
                        icon.style.color="#999"
                    } else if (data.weather[0].main==="Thunderstorm") {
                        icon.className = "fas fa-poo-storm"
                        icon.style.color="#ccc"
                    } else {
                        icon.className = "fas fa-sun"
                        icon.style.color="yellow"
                    }
                    console.log(data)
                })
            .catch(err=>console.log(err))
            //? evaluating
    }
})