const table = document.querySelector("table");
const titleInput = document.querySelector("#titleInput");
const ratingInput = document.querySelector("#ratingInput");

function addMovie() {
    var title = titleInput.value;
    var rating = ratingInput.value;

    var template = `
    <tr>
        <td id="title">${title}</td>
        <td id="rating">${rating}</td>
        <td id="delete">
            <button onclick="deleteMovie(this)" class="delete_button" type="submit">Delete</button>
        </td>
    </tr>`

    table.innerHTML += template;
}

function deleteMovie(ele) {
    let tr = ele.parentNode.parentNode;
    let tb = tr.parentNode;
    tb.removeChild(tr);
}


// var td = document.querySelectorAll("td");
// console.log(td[3].innerHTML)

function sortData() {
    var movieArray = [];
    var tds = Array.from(document.querySelectorAll("#myTable tr td"));

    for (let i = 0; i < tds.length; i += 3) {
        movieArray.push({ title: tds[i].innerHTML, rating: tds[i + 1].innerHTML });
    }

    var byTitle = movieArray.slice(0);
    byTitle.sort(function(a, b) {
        var x = a.title.toLowerCase();
        var y = b.title.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
    });

    console.log(byTitle);
}