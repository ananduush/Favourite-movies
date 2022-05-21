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
    let tb = tr.parentNode
    tb.removeChild(tr)
}