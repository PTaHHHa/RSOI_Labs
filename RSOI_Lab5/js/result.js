window.addEventListener('load', () => {
    var name_item = JSON.parse(localStorage.getItem('name'))
    var size_item = JSON.parse(localStorage.getItem('size'))
    var color_item = JSON.parse(localStorage.getItem('color'))
    var data = Object.values(name_item)
    var table = document.getElementById("myTable");
    for (var i = 0; i < name_item.length; i++) {
        var row = table.insertRow(i + 1);
        var name_cell = row.insertCell(0);
        var size_cell = row.insertCell(1);
        console.log(name_item.length)
        name_cell.innerHTML = data[i];
         size_cell.innerHTML = size_item[i];
         row.style.fontSize = size_item[i]+'px'
        row.style.backgroundColor = color_item[i]
    }


})


function clearAll() {
    localStorage.clear();
    window.location.reload()
}

function close() {
    window.open('', '_parent', '');
    window.close();
}
