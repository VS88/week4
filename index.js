const express = require("express");
bodyParser = require('body-parser');
 
 // создаем объект приложения
const app = express();



//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));
// support parsing of application/json type post data
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'x-test,Content-Type,Accept,Access-Control-Allow-Headers');

    next();
}

app.use(allowCrossDomain);

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});

app.post("/result4", function (request, response) 
    {

    result = {"message":"vyacheslavkirchuk","x-result":request.headers['x-test'],"x-body":request.body}

    response.json(JSON.stringify(result));

});

// начинаем прослушивать подключения на 3000 порту
app.listen(4321, (err) => {
    if (err) console.log('Error ', err);
    console.log('Server port', 4321);
});
