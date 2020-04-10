import { validateInput } from "./validateInput"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('user_input').value
    const isURL = validateInput(formText)
    if(!isURL) {
        alert("Not a valid URL")
        return
    }

    
    const url = `http://localhost:3000/aylien?text=${formText}`
    console.log(url)

    console.log("::: AYLIEN Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        const results = `Polarity: ${res.polarity}
         Subjectivity: ${res.subjectivity}`
        document.getElementById('results').innerHTML = results;
    })
}


export { handleSubmit }
