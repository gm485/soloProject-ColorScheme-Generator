
//array for color scheme
const colScheme = []
//var for api url
//variables for form selections
let formClr, formSchema;

//form
const form = document.getElementById('color-form')
//elements
const formColor = document.getElementById('favcolor')
const formScheme = document.getElementById('colorScheme')
const formBtn = document.getElementById('btn')

//return section
const colorGenerator = document.getElementById('color-generator')


let url = `https://www.thecolorapi.com/scheme?hex=${formClr}&mode=${formSchema}`
//get request from color api


//action event for button (form handler)
form.addEventListener("submit", function(e) {
    e.preventDefault()   
    formClr = formColor.value.replace("#", "")
    formSchema = formScheme.value

    retrieveColorScheme()
    


})

function retrieveColor() {
//fetch data with user input
    
    fetch(`https://www.thecolorapi.com/id?hex=${formClr}`, {method:"GET"})
        .then(res => res.json())
        .then(data => {
            console.log("color data:", data)
            
            colorGenerator.innerHTML = `
                <p>Color Name: ${data.name.value}</p>
                <img src="${data.image.bare}">
                
            `
        })
    }

function retrieveColorScheme() {
    let schemeHTML
    //fetch scheme
    fetch(`https://www.thecolorapi.com/scheme?hex=${formClr}&mode=${formSchema}&count=5`)
        .then(res => res.json())
        .then(data => {
           
            
            data.colors.forEach(color => {
                schemeHTML += `
                    <img src="${color.image.named}">
                `
            })
            
            colorGenerator.innerHTML = schemeHTML
        })
}
