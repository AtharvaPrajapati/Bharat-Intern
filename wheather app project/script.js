const API_KEY="a5cf10cfdba4fb146177cbffccbd0617"

var city="delhi"

var API="a5cf10cfdba4fb146177cbffccbd0617"
const fetchdata =async()=>{
     const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
     const data=response.json()
     console.log("Fgsggsg",data);


    
}

// const renderinui=()=>{

// }


function switchTab(clickedTab){
if(clickedTab!==currentTab){
    currentTab.classList.remove('current-tab')
    currentTab=clickedTab
    currentTab.classList.add('current-Tab')
}
}

