const id = 'cdab67fe7772f7a328daac107ff9a9f7'
const inputField = document.getElementById('input-field')

const loadCity = () => {
    let cityName = inputField.value.toLowerCase()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cdab67fe7772f7a328daac107ff9a9f7`)
        .then(res => res.json())
        .then(data => getTemp(data))
}

const getTemp = (data) => {
    document.getElementById('current-temp').innerText = data.main.temp
    let city = document.getElementById('city-name');
    city.innerText = `${inputField.value.toUpperCase()}`
    inputField.value = ''

    document.getElementById('clouds').innerText = data.clouds.all;
    
}


