var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Order = require("./order")
 
var fs = require("fs");
var app = express();
var jsonParser = bodyParser.json();

try{
    mongoose.connect('mongodb+srv://alexey:mongo@cluster0.e2nuy.mongodb.net/labWork', {useNewUrlParser: true, useFindAndModify: false})

} 
catch(e) {
console.log("Can't connect to mongoDB")
}

app.post('/create', jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body)
    const order = new Order({
        name: req.body.name,
        amount: req.body.amount,
        price: req.body.price
    })
    await order.save();
    res.send(order)
})

app.get('/get', async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
})

app.get('/getById/:id', async (req, res) => {
    var id = req.params.id; // получаем id
    const order = await Order.findById(id);
    res.send(order);
})

app.post('/edit', jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const order = await Order.findById(req.body.id);
    console.log(req.body)
    order.name = req.body.name;
    order.amount = req.body.amount;
    if(order.price != undefined){
        order.price = req.body.price;
    }
    await order.save();
    res.send(order)
})

app.delete('/deleteById/:id', async (req, res) => {
    var id = req.params.id; // получаем id
    const order = await Order.findByIdAndDelete(id);
    res.send(order);
})











app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/users", function(req, res){
      
    var content = fs.readFileSync("o.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);
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
    var user = {name: userName, age: userAge};
     
    var data = fs.readFileSync("users.json", "utf8");
    var users = JSON.parse(data);
     
    // находим максимальный id
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    user.id = id+1;
    // добавляем пользователя в массив
    users.push(user);
    var data = JSON.stringify(users);
    // перезаписываем файл с новыми данными
    fs.writeFileSync("users.json", data);
    res.send(user);
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