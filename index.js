/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn") 
const numberByUser = document.getElementById("input-el")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")



function calculate(){
    length.textContent = `${numberByUser.getAttribute("placeholder")} meters = ${(numberByUser.getAttribute("placeholder") * 3.281).toFixed(3)} feet | ${numberByUser.getAttribute("placeholder")} feet = ${(numberByUser.getAttribute("placeholder")/3.281).toFixed(3)} meters`
    
    volume.textContent = `${numberByUser.getAttribute("placeholder")} liters = ${(numberByUser.getAttribute("placeholder") * 0.264).toFixed(3)} gallons | ${numberByUser.getAttribute("placeholder")} gallons = ${(numberByUser.getAttribute("placeholder")/0.264).toFixed(3)} liters` 
    
    mass.textContent = `${numberByUser.getAttribute("placeholder")} kilograms = ${(numberByUser.getAttribute("placeholder") * 2.204).toFixed(3)} pound | ${numberByUser.getAttribute("placeholder")} pound = ${(numberByUser.getAttribute("placeholder")/0.264).toFixed(3)} kilograms` 
}

calculate()

convertBtn.addEventListener("click",function (){
    length.textContent = `${numberByUser.value} meters = ${(numberByUser.value * 3.281).toFixed(3)} feet | ${numberByUser.value} feet = ${(numberByUser.value/3.281).toFixed(3)} meters`
    
    volume.textContent = `${numberByUser.value} liters = ${(numberByUser.value * 0.264).toFixed(3)} gallons | ${numberByUser.value} gallons = ${(numberByUser.value/0.264).toFixed(3)} liters` 
    
    mass.textContent = `${numberByUser.value} kilograms = ${(numberByUser.value * 2.204).toFixed(3)} pound | ${numberByUser.value} pound  = ${(numberByUser.value/0.264).toFixed(3)} kilograms` 
})