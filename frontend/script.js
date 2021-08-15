const request = (path, type, success, data) => {
    $.ajax({
        url: `http://localhost:3000/${path}`,
        type: type,
        dataType: "json",
        data: JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Origin": "*" // enable cross requests
        },
        contentType: "application/json",
        success: success,
        error: () => {
            console.log("Something went wrong");
        }
    });
};

const addNote = () => {
    const note = document.getElementById("note").value;
    request("addNote", "POST", getNotes, {
        note: note
    });
};

const deleteNote = (id) => {
    request("deleteNote", "POST", getNotes, {
        id: id
    });
};

const getNotes = () => {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";
    request("getNotes", "GET", (results) => {
        for(const result of results) {
            notesList.innerHTML += `
                <li>
                    ${result.note}
                    <button onclick="deleteNote(${result.id})">Delete</button>
                </li>
            `;
        }
    });
};