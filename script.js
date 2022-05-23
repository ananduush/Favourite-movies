const table = document.querySelector("#table");
const titleInput = document.querySelector("#titleInput");
const ratingInput = document.querySelector("#ratingInput");
const td = document.querySelectorAll("td");

function addMovie() {
    var title = titleInput.value;
    var rating = ratingInput.value;

    //validation
    if (title == null || title == "", rating == null || rating == "") {
        alert("Did you not fill the title or rating?\nThe programm won't work unless you do.");
        return false;
    }

    var template = `
    <tr>
        <td id="title">${title}</td>
        <td id="rating">${rating}</td>
        <td id="delete">
            <button onclick="deleteMovie(this)" class="delete_button" type="submit">Delete</button>
        </td>
    </tr>`

    table.innerHTML += template;
    titleInput.value = '';
    ratingInput.value = '';

}

function deleteMovie(ele) {
    let tr = ele.parentNode.parentNode;
    let tb = tr.parentNode;
    tb.removeChild(tr);
}

function sortTitle(thi) {
    var wow = $('th');
    var order = $('th').data('order');
    var movieArray = [];
    var tds = Array.from(document.querySelectorAll("#myTable tr td"));

    for (let i = 0; i < tds.length; i += 3) {
        movieArray.push({ title: tds[i].innerHTML, rating: tds[i + 1].innerHTML });
    }

    var byTitle = movieArray.slice(0);

    console.log(thi)
        //Sorts given array by title or array depending on which button clicked
    if (thi == 'titles') {
        if (order == "desc") {
            wow.data('order', 'asc');
            byTitle.sort(function(a, b) {
                var x = a.title.toLowerCase();
                var y = b.title.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
        } else {
            wow.data('order', 'desc');
            byTitle.sort(function(a, b) {
                var x = a.title.toLowerCase();
                var y = b.title.toLowerCase();
                return x > y ? -1 : x < y ? 1 : 0;
            });
        }

    } else {

        if (order == "desc") {
            wow.data('order', 'asc');
            byTitle.sort(function(a, b) {
                var x = Number(a.rating);
                var y = Number(b.rating);
                return x < y ? -1 : x > y ? 1 : 0;
            });
        } else {
            wow.data('order', 'desc');
            byTitle.sort(function(a, b) {
                var x = Number(a.rating);
                var y = Number(b.rating);
                return x > y ? -1 : x < y ? 1 : 0;
            });
        }
    }

    //Displays sorted elements
    table.innerHTML = '';
    for (let i = 0; i < byTitle.length; i++) {
        var template = `
            <tr>
                <td id="title">${byTitle[i].title}</td>
                <td id="rating">${byTitle[i].rating}</td>
                <td id="delete">
                    <button onclick="deleteMovie(this)" class="delete_button" type="submit">Delete</button>
                </td>
            </tr>`
        table.innerHTML += template;
    }
}