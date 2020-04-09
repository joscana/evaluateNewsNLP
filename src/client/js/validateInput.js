function validateInput(input) {
    const regex = new RegExp("^https?:\/\/[^\s$.?#].[^\s]*")
    let matches = input.match(regex)

    return matches != null && matches.length == 1
}


export { validateInput }
