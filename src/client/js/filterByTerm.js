//Test Function Jest Tutorial
//In a real project, define the function in another file and import it from the test file.

function filterByTerm(inputArr, searchTerm) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!inputArr.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }

module.exports = filterByTerm;
