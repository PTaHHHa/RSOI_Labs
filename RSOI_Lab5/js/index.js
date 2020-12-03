if (window.openDatabase){
    db = openDatabase('muhDick', '0.1', 'Laba database', 200000)
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS school (id INTEGER PRIMARY KEY ASC, class_number TEXT, students TEXT, phone_number TEXT, FIO TEXT)')
    })
}
else {
    alert('WebSQL is not supported by your browser')
}

function insert() {
    if (db){
        console.log(document.getElementById('number').value)
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO school (id, class_number, students, phone_number, FIO) ' +
                'VALUES (NULL,?,?,?,?)', [document.getElementById('number').value,document.getElementById('students').value,document.getElementById('phone_number').value,document.getElementById('FIO').value])
        })
        location.reload()
    }
    else {
        alert('No database!')
    }
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        showAll();
    }
}
function reloadAll() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

    function showAll() {
    if(db){
        // window.location.reload()
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM school',[], function (tx, result){
                var myTable = document.getElementById('myTable')
                for (var i = 0; i < result.rows.length; i++){
                    var row = myTable.insertRow(i+1)
                    var id = row.insertCell(0)
                    var class_number = row.insertCell(1)
                    var students = row.insertCell(2)
                    var phone_number = row.insertCell(3)
                    var FIO = row.insertCell(4)
                    var deleteRow = row.insertCell(5)
                    id.innerHTML = result.rows.item(i).id
                    class_number.innerHTML = result.rows.item(i).class_number
                    students.innerHTML = result.rows.item(i).students
                    phone_number.innerHTML = result.rows.item(i).phone_number
                    FIO.innerHTML = result.rows.item(i).FIO
                    deleteRow.innerHTML += "<button onclick='deleteRecord(" + result.rows.item(i).id + ")'>Delete Car</button>"
                }
            })
        })
    }
    else {
        alert('No database!')
    }
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        showSpecial();
    }
}
function reloadSpecial() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

function showSpecial() {
    if (db){
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM school WHERE students=(SELECT MAX(students) FROM school)',[],
                function (tx, result){
                var myTable = document.getElementById('myTable')
                for (var i = 0; i < result.rows.length; i++){
                    var row = myTable.insertRow(i+1)
                    var id = row.insertCell(0)
                    var class_number = row.insertCell(1)
                    var students = row.insertCell(2)
                    var phone_number = row.insertCell(3)
                    var FIO = row.insertCell(4)
                    id.innerHTML = result.rows.item(i).id
                    class_number.innerHTML = result.rows.item(i).class_number
                    students.innerHTML = result.rows.item(i).students
                    phone_number.innerHTML = result.rows.item(i).phone_number
                    FIO.innerHTML = result.rows.item(i).FIO
                }
            })
        })
    }
    else {
        alert('No database!')
    }
}

function dropTable() {
    if (db){
        db.transaction(function (tx) {
            tx.executeSql('DROP TABLE school')
        })
        location.reload()
    }
    else {
        alert('No database!')
    }
}

function reset() {
    location.reload()
}

function deleteRecord(id) {
    if(db){
        db.transaction(function (tx) {
            tx.executeSql('DELETE FROM school WHERE id=?',[id])
        })
        location.reload()
    }
    else {
        alert('No database!')
    }
}