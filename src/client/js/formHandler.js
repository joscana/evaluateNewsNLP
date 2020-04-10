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

    exportFunctions.fetchData(formText)
    .then(function(res) {
        const results = `Polarity: ${res.polarity}
        Subjectivity: ${res.subjectivity}`
        document.getElementById('results').innerHTML = results;
    })
}

function fetchData(text) {
    const url = `http://localhost:3000/aylien?text=${text}`
    console.log(url)

    console.log("::: AYLIEN Form Submitted :::")
    return fetch(url).then(res => res.json())

}

const exportFunctions = {
    handleSubmit,
    fetchData
}

export default exportFunctions
