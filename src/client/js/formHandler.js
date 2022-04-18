// Personal API Key for OpenWeatherMap API
const apiKey = '50b167ff30e937171afa4f012fd8323e&units=imperial';//units=metric Celsius
/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const zip =  "E14";
    const country =  "GB";
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`
    getGeocoding(url)
    .then(function(data){
        console.log("data GEo",data);
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`
        getGeocoding(urlWeather)
        .then(function(dataWeather){
            console.log("data weather",dataWeather);
            const temperature = dataWeather.main.temp;
            const weatherDescription = dataWeather.weather[0].description;
            document.getElementById('results').innerHTML = `Date : ${newDate}
            Temperature : ${temperature}
            Weather Description : ${weatherDescription}
            `;
        })
        // postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:favFact} );
    })
    .then(
        // updateUI()
        console.log("updateUI()")
    )

    // console.log("::: Form Submitted :::",formText)
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}


/* Function to GET Web API Data*/
const getGeocoding = async (url)=>{
    const res = await fetch(url);
    try {
      const data=res.json();
      return data;
    } catch (error) {
      console.log("error=",error)
      return error;
    }
  }



export { handleSubmit }
