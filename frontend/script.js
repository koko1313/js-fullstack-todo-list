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

const getNotes = () => {
    const results = document.getElementById("results");
    results.innerHTML = "";
    request("getNotes", "GET", (res) => {
        for(const note of res.notes) {
            results.innerHTML += `<li>${note}</li>`;
        }
    });
};