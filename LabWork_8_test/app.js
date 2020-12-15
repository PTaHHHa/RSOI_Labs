var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
 
var app = express();
var jsonParser = bodyParser.json();
 
app.use(express.static(__dirname + "/public"));
// получение списка данных

app.get("/api/tools", function(req, res){
    var content = fs.readFileSync("tools.json", "utf8");
    var tools = JSON.parse(content);
    res.send(tools);
});

app.get("/api/editedTools", function(req, res){
    var content = fs.readFileSync("toolsEdited.json", "utf8");
    var editedTools = JSON.parse(content);
    res.send(editedTools);
});

// получение одного пользователя по id
app.get("/api/users/:id", function(req, res){
      
    var id = req.params.id; // получаем id
    var content = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(content);
    var user = null;
    // находим в массиве пользователя по id
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
    // отправляем пользователя
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// получение отправленных данных
app.post("/api/users", jsonParser, function (req, res) {
     
    if(!req.body) return res.sendStatus(400);
     
    var userName = req.body.name;
    var userAge = req.body.age;
    var tool = {name: userName, age: userAge};
     
    var data = fs.readFileSync("tools.json", "utf8");
    var tools = JSON.parse(data);
    // находим максимальный id
    var id = Math.max.apply(Math,tools.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    tool.id = id+1;
    // добавляем пользователя в массив
    tools.push(tool);
    var data = JSON.stringify(tools);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("tools.json", data);
    res.send(tool);

    tools.forEach(element => {
        element.name = element.name.toString().toLowerCase();
    });
    let editedTools = JSON.stringify(tools);
    console.log(editedTools)

    fs.writeFileSync("toolsEdited.json", editedTools);
    
});
 // удаление пользователя по id
app.delete("/api/users/:id", function(req, res){
      
    var id = req.params.id;
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var user = users.splice(index, 1)[0];
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        // отправляем удаленного пользователя
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// изменение пользователя
app.put("/api/users", jsonParser, function(req, res){
      
    if(!req.body) return res.sendStatus(400);
     
    var userId = req.body.id;
    var userName = req.body.name;
    var userAge = req.body.age;
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    // изменяем данные у пользователя
    if(user){
        user.age = userAge;
        user.name = userName;
        var data = JSON.stringify(users);
        fs.writeFileSync("users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});
  
app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});