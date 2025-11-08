
//array for color scheme
const colScheme = []
//var for api url
//variables for form selections
let formClr, formSchema;
//dom objects
const text = document.getElementById('test-section') 
//form
const form = document.getElementById('color-form')
//elements
const formColor = document.getElementById('favcolor')
const formScheme = document.getElementById('colorScheme')
const formBtn = document.getElementById('btn')
//return section
const colorGenerator = document.getElementById('color-generator')
let html = `<h4></h4>`

let url = `https://www.thecolorapi.com/scheme?hex=${formClr}&mode=${formSchema}`
//get request from color api


//action event for button (form handler)
form.addEventListener("submit", function(e) {
    e.preventDefault()
    formClr = formColor.value;
    formSchema = formScheme.value;   
    console.log(formClr, formSchema)
    retrieveScheme()
    


})

function retrieveScheme() {
//fetch data with user input
    fetch("https://www.thecolorapi.com/scheme?hex=ffffff&mode=monochrome", {method:"GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
