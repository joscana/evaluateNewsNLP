function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('user_input').value
    //Client.evaluateInput(formText)

    const url = `http://localhost:3000/aylien?text=${formText}`
    console.log(url)

    console.log("::: AYLIEN Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.polarity;
    })
}


export { handleSubmit }
