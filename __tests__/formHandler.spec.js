import formHandler from '../src/client/js/formHandler'
import { SingleEntryPlugin } from 'webpack';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

describe("Form Handler Function", () => {
    test("it should fetch a response from the localhost", () => {
        
        formHandler.fetchData = jest.fn().mockReturnValue(new Promise(function(resolve,reject){
               resolve({
                polarity: 'positive',
                subjectivity: 'subjective'
                })
            })
        );
        
        document.body.innerHTML =
        `<form id="submitForm" class="form" onsubmit="return Client.handleSubmit(event)">
        <input id="user_input" type="text" name="input" id="submit" value="https://www.google.com" onblur="onBlur()" placeholder="Place URL here to evaluate!">
        <input type="submit" name="" value="submit" onclick="return Client.handleSubmit(event)"
            onsubmit="return Client.handleSubmit(event)">
        </form>
        <div id="results"></div>`;

        const event = { preventDefault: () => {} };
        formHandler.handleSubmit(event)        

        const expectedResponse = `Polarity: positive
        Subjectivity: subjective`

        return sleep(1000).then(() => {
            const response = document.getElementById('results').innerHTML
            expect(response).toEqual(expectedResponse);
        })
    })
})
