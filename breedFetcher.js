const request = require("request")
const process = require("process")
const ps = process.argv.splice(2)
const par = ps[0]


request(`https://api.thecatapi.com/v1/breeds/search?q=${par}`, (error, response, body) => {
    if (error) {
        console.error(error);
    }

    x(body)

});

const x = (a) => {

    const data = JSON.parse(a);
    const data1 = data[0].description
    console.log(data1);

}