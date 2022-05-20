function addMovie() {
    var table = document.querySelector("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("titleInput");
    cell1.innerHTML = document.getElementById("ratingInput");

}